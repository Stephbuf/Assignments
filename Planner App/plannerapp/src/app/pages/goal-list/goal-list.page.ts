import { Component, OnInit } from '@angular/core';
import { Goal } from 'src/app/interfaces/goal';
import { GoalsService } from 'src/app/services/goals.service';

@Component({
  selector: 'app-goal-list',
  templateUrl: './goal-list.page.html',
  styleUrls: ['./goal-list.page.scss'],
  standalone: false,
})
export class GoalListPage implements OnInit {
  goals: Goal[] = [];
  showToast = false;
  toastMessage = '';

  constructor(private goalsService: GoalsService) {}

  ngOnInit() {
    const storedGoals = localStorage.getItem('goals');

    if (storedGoals) {
      // Load goals
      this.goals = JSON.parse(storedGoals);
      console.log('Goals loaded from localStorage:', this.goals);
    }

    this.getGoals();
  }

  getGoals() {
    this.goalsService.getAllGoals().subscribe({
      next: (result: Goal[]) => {
        const freshGoals = result.map(goal => ({
          ...goal,
          completed: this.findCompletedState(goal)
        }));

        this.goals = freshGoals;
        this.saveGoals(); 
        console.log('Goals loaded from server:', this.goals);
      },
      error: (error) => {
        console.error('Error loading goals:', error);
      }
    });
  }

  findCompletedState(goalFromServer: Goal): boolean {
    const storedGoals = localStorage.getItem('goals');

    if (storedGoals) {
      const localGoals: Goal[] = JSON.parse(storedGoals);
      const localGoal = localGoals.find(t => t.id === goalFromServer.id);
      return localGoal ? (localGoal as any).completed || false : false;
    }

    return false;
  }

  saveGoals() {
    localStorage.setItem('goals', JSON.stringify(this.goals));
  }

  onGoalCheckboxChange(goal: Goal) {
    this.saveGoals();
  
    if (goal.completed) {
      this.toastMessage = `"${goal.title}" marked as completed ✅`;
    } else {
      this.toastMessage = `"${goal.title}" marked as incomplete ❌`;
    }
  
    this.showToast = true; // Open the toast
  }

  onDelete(goalId: number) {
    this.goalsService.deleteGoal(goalId).subscribe({
      next: () => {
        this.goals = this.goals.filter(goal => goal.id !== goalId); 
        this.saveGoals();
        this.toastMessage = 'Goal deleted successfully!';
        this.showToast = true;
      },
      error: (error) => {
        console.error('Error deleting goal:', error);
        this.toastMessage = 'Failed to delete goal!';
        this.showToast = true;
      }
    });
  }
  onEdit(goal: Goal) {
    this.goalsService.updateGoal(goal.id!, goal).subscribe({
      next: () => {
        this.saveGoals();
        this.toastMessage = 'Goal updated successfully!';
        this.showToast = true;
      },
      error: (error) => {
        console.error('Error updating goal:', error);
        this.toastMessage = 'Failed to update goal!';
        this.showToast = true;
      }
    });
  }
}
