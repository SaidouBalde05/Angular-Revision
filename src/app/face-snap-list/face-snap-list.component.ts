import { Component, OnInit } from '@angular/core';
import { faceSnap } from '../models/face-snap';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [FaceSnapComponent],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit {
  constructor(private faceSnapsService: FaceSnapsService){}

  faceSnaps!: faceSnap[];
  ngOnInit(): void {
    this.faceSnaps = this.faceSnapsService.getFaceSnaps()
  }
}
