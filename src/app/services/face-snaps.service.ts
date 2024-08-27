import { Injectable } from '@angular/core';
import { faceSnap } from '../models/face-snap';
import { SnapType } from '../models/snap-type.type';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  private faceSnaps: faceSnap[] = [
    new faceSnap(
      'Archibald',
      'Mon meilleur ami depuis toujours',
       'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
       new Date(),
       40
    ),
    new faceSnap(
      'Paysage',
      'Un beau paysage',
      'https://jeromeobiols.com/wordpress/wp-content/uploads/photo-montagne-vallee-blanche-chamonix-mont-blanc.jpg',
      new Date(),
      50
    ).widthLocation('A la montagne'),
    new faceSnap(
      'Un bons repas ',
      'Un bons repas Chinois a grignoter',
      'https://www.chine-sur-mesure.com/uploads/sites/6/2018/12/raviolis-chinois-alf-photo.jpeg',
      new Date(),
      110
    )
  ]

  getFaceSnaps(): faceSnap[] {
    return [...this.faceSnaps];
  }

  getFaceSnapById(faceSnapId: string): faceSnap {
    const foundFaceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!foundFaceSnap) {
      throw new Error('FaceSnap not found!');
    }
    return foundFaceSnap;
  }

  snapFaceSnapById(faceSnapId: string, snapType: SnapType): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    faceSnap.snap(snapType);
  }

  // getFaceSnapById(){}

  // snapFaceSnapById(faceSnapId: string, snapType: SnapType): void{
  //   const foundFaceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId );
  //   if(!foundFaceSnap){
  //     throw new Error ('faceSnap not found');
  //   }
  //   foundFaceSnap.snap(snapType)
  // }
}
