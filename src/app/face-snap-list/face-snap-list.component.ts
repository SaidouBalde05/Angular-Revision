import { Component, OnDestroy, OnInit } from '@angular/core';
import { faceSnap } from '../models/face-snap';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { FaceSnapsService } from '../services/face-snaps.service';
import { interval, Observable, Subject, take, takeUntil, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms'

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [
    FaceSnapComponent,
    CommonModule,
    FormsModule
  
  ],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit {
  constructor(private faceSnapsService: FaceSnapsService){}

  faceSnaps!: faceSnap[];
  faceSnap$!: Observable<faceSnap[]>

  ngOnInit(): void {
    this.faceSnap$ = this.faceSnapsService.getAllFaceSnaps()
  }
}
