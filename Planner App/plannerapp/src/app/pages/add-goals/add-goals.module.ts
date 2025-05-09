import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { AddGoalsPage } from './add-goals.page'; 

@NgModule({
  declarations: [AddGoalsPage],  
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,  
    IonicModule,
    RouterModule.forChild([{ path: '', component: AddGoalsPage }]),
  ],  
})

export class AddGoalsPageModule {}
