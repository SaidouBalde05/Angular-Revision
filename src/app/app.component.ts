import { Component, OnInit } from '@angular/core';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { HeaderComponent } from './header/header.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { concat, concatMap, delay, exhaustMap, filter, interval, map, mergeMap, Observable, of, pipe, switchMap, take, tap } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    RouterOutlet,
    RouterLink,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
      
  }
  // debut
  // redTrainsCalled = 0;
  // yellowTrainsCalled = 0;

  // ngOnInit() {
  //   interval(500).pipe(
  //     take(10),
  //     map(value => value % 2 === 0 ? 'rouge' : 'jaune'),
  //     tap(color => console.log(`La lumière s'allume en %c${color}`, `color: ${this.translateColor(color)}`)),
  //     switchMap(color => this.getTrainObservable$(color)),
  //     tap(train => console.log(`Train %c${train.color} ${train.trainIndex} arrivé !`, `font-weight: bold; color: ${this.translateColor(train.color)}`))
  //   ).subscribe();
  // }

  // getTrainObservable$(color: 'rouge' | 'jaune') {
  //   const isRedTrain = color === 'rouge';
  //   isRedTrain ? this.redTrainsCalled++ : this.yellowTrainsCalled++;
  //   const trainIndex = isRedTrain ? this.redTrainsCalled : this.yellowTrainsCalled;
  //   console.log(`Train %c${color} ${trainIndex} appelé !`, `text-decoration: underline; color: ${this.translateColor(color)}`);
  //   return of({ color, trainIndex }).pipe(
  //     delay(isRedTrain ? 5000 : 6000)
  //   );
  // }

  // translateColor(color: 'rouge' | 'jaune') {
  //   return color === 'rouge' ? 'red' : 'yellow';
  // }
  // fin

  
  // interval$!: Observable<any>
  // ngOnInit(): void {
  //   this.interval$ = interval(1000).pipe(
  //     filter( value => value % 3 === 0),
  //     map( value => value % 2 === 0?
  //        `je suis ${value} et je suis pair` :
  //        `je suis ${value} et je suis impair`
  //      ),
  //      tap(text => this.logger(text) )
  //   )
  // }
  // logger( text : string){
  //   console.log(text)
  // }
}
