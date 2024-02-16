import { Component, Input } from '@angular/core';
import {NoblePrizes} from '../dhali134Interface';
@Component({
  selector: 'app-nobel-dhali134',
  templateUrl: './nobel-dhali134.component.html',
  styleUrls: ['./nobel-dhali134.component.css']
})
export class NobelDhali134Component {
  @Input() dhali134Prizes!: NoblePrizes[];

 // displayedColumns: string[] = ["awardYear", "awardCategory", "laureate", "motivation"];
 displayedColumns: string[] = ["awardYear", "awardCategory", "laureate", "motivation"];

}
