import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Goal } from 'src/app/interfaces/goal';
import { GoalsService } from 'src/app/services/goals.service';

@Component({
  selector: 'app-add-goals',
  templateUrl: './add-goals.page.html',
  styleUrls: ['./add-goals.page.scss'],
  standalone: false,
})

export class AddGoalsPage implements OnInit {

  goalForm!: FormGroup;
  isEdit: boolean = false;
  editGoalId!: number;
  goals: Goal[] = [];

  constructor(
    private fb: FormBuilder,
    private goalsService: GoalsService,
    private route: ActivatedRoute
  ) {
    this.goalForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      goal_date: ['', Validators.required], 
      priority_level: ['', Validators.required],
      progress_level: ['', Validators.required],
    });

    const goalId = this.route.snapshot.paramMap.get('goal_id'); 

    if (goalId) {
      this.editGoalId = parseInt(goalId, 10);
      this.isEdit = true; //

      this.goalsService.getSingleGoal(this.editGoalId).subscribe((result: Goal) => {
        this.goalForm.patchValue(result);
      });
    }
  }

  ngOnInit(): void {
    this.getGoals();
  }

  getGoals() { 
    this.goalsService.getAllGoals().subscribe((result: Goal[]) => {
      this.goals = result;
    });
  }

  onSubmit() {
    if (this.goalForm.invalid) {
      alert('Cannot be blank');
      return;
    }
  
    if (this.isEdit) {
      this.updateGoal();
    } else {
      this.addGoal();
    }
  }

  addGoal() {
    const formData = this.goalForm.value;
    this.goalsService.addGoal(formData).subscribe((result: Goal) => {
      alert('Goal was created successfully!');
      this.goalForm.reset();
      this.getGoals(); 
    });
  }

  updateGoal() {
    const formData = this.goalForm.value;
    this.goalsService.updateGoal(this.editGoalId, formData).subscribe((result: Goal) => {
      alert('Goal was updated successfully!');
      this.goalForm.reset();
      this.getGoals(); 
    });
  }

  deleteGoal(goalId: number) {
    if (confirm('Are you sure?')) {
      this.goalsService.deleteGoal(goalId).subscribe(() => {
        alert('Goal deleted successfully!');
        this.getGoals(); // 
      });
    }
  }
}
