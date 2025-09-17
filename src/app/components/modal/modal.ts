import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.html',
  styleUrl: './modal.css'
})
export class Modal {
  
  onClick(){
    alert("Enter the donation amount")
  }

}
