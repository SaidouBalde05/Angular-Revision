import { Component, Input, OnInit } from '@angular/core';
import { faceSnap } from '../../../core/models/face-snap';
import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, NgClass, NgStyle, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { FaceSnapsService } from '../../../core/services/face-snaps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    TitleCasePipe,
    UpperCasePipe,
    DatePipe,

  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit{
  @Input() faceSnap!: faceSnap;
  snapButtonText!: string;
  userHasSnapped!: boolean;

  constructor(
    private faceSnapService: FaceSnapsService, 
    private router: Router
  ){}

  ngOnInit(): void {
    this.snapButtonText = 'Oh Snap'
    this.userHasSnapped = false
  }
  onSnap():void{
    if(this.userHasSnapped){
      this.unSnap()
    } else {
      this.snap()
    }
  }

 unSnap() {
  this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
  this.snapButtonText = 'Oh Snap!';
  this.userHasSnapped = false;
  }

 snap(){
  this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap')
  this.snapButtonText = 'oops unSnap!'
  this.userHasSnapped = true
 }
 onViewFaceSnap() {
  this.router.navigateByUrl(`faceSnaps/${this.faceSnap.id}`);
}
}
