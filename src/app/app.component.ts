import { Component } from '@angular/core';
import {PersonalInfo,NoblePrizes,Laureates} from './dhali134Interface';
import jdata from '../assets/data/A4.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'A4dhali134';
  dhali134Personal: PersonalInfo = jdata.A4Student;
  dhali134Prizes: NoblePrizes[] = jdata.nobelPrizes;
  
}
