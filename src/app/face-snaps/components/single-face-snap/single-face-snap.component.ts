import { Component, Input, OnInit } from '@angular/core';
import { faceSnap } from '../../../core/models/face-snap';
import { CommonModule, CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, NgClass, NgStyle, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { FaceSnapsService } from '../../../core/services/face-snaps.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    TitleCasePipe,
    DatePipe,
    RouterLink,
    CommonModule
  ],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent implements OnInit{
  faceSnap!: faceSnap
  faceSnap$!: Observable<faceSnap>
  snapButtonText!: string;
  userHasSnapped!: boolean;

  constructor(
    private faceSnapService: FaceSnapsService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.snapButtonText = 'Oh Snap!'
    this.userHasSnapped = false
    const faceSnapId = this.route.snapshot.params['id']
    console.log('faceSnapId erreur ' + faceSnapId)
    this.prepareInterface();
    this.faceSnap$ = this.faceSnapService.getFaceSnapById(faceSnapId)
    
  }

  private prepareInterface() {
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false;
  }
  
onSnap(faceSnapId: number) {
  if (this.snapButtonText === 'Oh Snap!') {
    this.faceSnap$ = this.faceSnapService.snapFaceSnapById(faceSnapId, 'snap').pipe(
      tap(() => {
        this.snapButtonText = 'Oops, unSnap!';
        this.userHasSnapped = true  
      })
    )
  } else {
    this.faceSnap$ = this.faceSnapService.snapFaceSnapById(faceSnapId, 'unsnap').pipe(
      tap(() => {
        this.snapButtonText = 'Oh Snap!';
        this.userHasSnapped = false
      })
    )
  }
}
}
