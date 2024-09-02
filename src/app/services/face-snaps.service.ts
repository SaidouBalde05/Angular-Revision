import { Injectable } from '@angular/core';
import { faceSnap } from '../models/face-snap';
import { SnapType } from '../models/snap-type.type';
import { HttpClient } from '@angular/common/http';
import { map, Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {

  constructor(
    private http: HttpClient
  ){}


  getAllFaceSnaps(): Observable<faceSnap[]> {
    return this.http.get<faceSnap[]>('http://localhost:3000/facesnaps');
  }

  getFaceSnapById(faceSnapId: number): Observable<faceSnap> {
    return this.http.get<faceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`)
  }

  snapFaceSnapById(faceSnapId: number, snapType: SnapType): Observable<faceSnap> {
    return this.getFaceSnapById(faceSnapId).pipe(
      map(faceSnap => ({
        ...faceSnap,
        snaps: faceSnap.snaps + (snapType === 'snap' ? 1 : -1)
      })),
      switchMap(updatedfaceSnap => this.http.put<faceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`, updatedfaceSnap))
    )
  }

  addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string}):
  Observable<faceSnap> {
    return this.getAllFaceSnaps().pipe(
      map (faceSnap  => [...faceSnap].sort(( a, b )  => a.id - b.id )),
      map(faceSnapSorti  => faceSnapSorti[ faceSnapSorti.length - 1 ]),
      map( previousfaceSnap  => ({
        ...formValue,
        snaps: 0,
        createdAt: new Date(),
        id: previousfaceSnap.id + 1
      })),
      switchMap(newfaceSnap  => this.http.post<faceSnap>
        ('http://localhost:3000/facesnaps', newfaceSnap) 
      )
    );
  }
}
