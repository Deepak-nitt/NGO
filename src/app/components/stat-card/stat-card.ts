import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-stat-card',
  standalone:true,
  imports: [FormsModule, CommonModule],
  templateUrl: './stat-card.html',
  styleUrl: './stat-card.css'
})
export class StatCard {
  labels: string[]= ["Village helped" , "Litres Filtered" , "Volunteers"]
  values:string[]=["120","60000","55"];



}
