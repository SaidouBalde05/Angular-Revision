import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    CommonModule,
    ReactiveFormsModule

  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

  constructor(private router: Router){}

  userEmail!: string;

  onContinue(){
    this.router.navigateByUrl('faceSnaps');
  }

  onSubmitForm(form: NgForm): void{
    console.log(form.value)
  }
 
}
