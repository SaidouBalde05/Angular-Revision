import { Component, Input, OnInit } from '@angular/core';
import { faceSnap } from '../models/face-snap';
import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, NgClass, NgStyle, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    TitleCasePipe,
    DatePipe,
    RouterLink
  ],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent implements OnInit{
  faceSnap!: faceSnap
  snapButtonText!: string;
  userHasSnapped!: boolean;

  constructor(
    private faceSnapService: FaceSnapsService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.snapButtonText = 'Oh Snap'
    this.userHasSnapped = false
    const faceSnapId = this.route.snapshot.params['id']
    this.prepareInterface();
    this.getFaceSnap()
  }

  private prepareInterface() {
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false;
  }

  private getFaceSnap() {
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getFaceSnapById(faceSnapId);
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
}
