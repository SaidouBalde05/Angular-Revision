import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { map, Observable, tap } from 'rxjs';
import { faceSnap } from '../../../core/models/face-snap';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FaceSnapsService } from '../../../core/services/face-snaps.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-new-face-snap',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  templateUrl: './new-face-snap.component.html',
  styleUrl: './new-face-snap.component.scss'
})
export class NewFaceSnapComponent implements OnInit{

  snapForm!: FormGroup
  faceSnapPreviews$!: Observable<faceSnap>
  urlRegex!: RegExp

  constructor(
    private formsBuilder: FormBuilder,
    private router: Router,
    private faceSnapService: FaceSnapsService
  ){}

  ngOnInit(): void {
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    this.snapForm = this.formsBuilder.group(
      {
        title: [null, [Validators.required]],
        description: [null, [Validators.required]],
        imageUrl: [null, [Validators.required, Validators.pattern(this.urlRegex)]],
        location: [null]
      },
      {
        opdatOn: 'blur'
      }
   );

    this.faceSnapPreviews$ = this.snapForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        createdAt: new Date,
        id: 0,
        snaps: 0
      }))
    )
  }

  onSubmitForm() {
   this.faceSnapService.addFaceSnap(this.snapForm.value).pipe(
      tap(() => this.router.navigateByUrl('/faceSnaps'))
   ).subscribe();
  }
//   onSubmitForm() {
//     this.faceSnapService.addFaceSnap(this.snapForm.value).pipe(
//         tap(() => this.router.navigateByUrl('/faceSnaps'))
//     ).subscribe();
// }
}
