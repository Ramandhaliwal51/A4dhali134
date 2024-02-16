import { Component, Input } from '@angular/core';
import { PersonalInfo } from '../dhali134Interface';
@Component({
  selector: 'app-header-dhali134',
  templateUrl: './header-dhali134.component.html',
  styleUrls: ['./header-dhali134.component.css']
})
export class HeaderDhali134Component {
  @Input() dhali134MyData!: PersonalInfo;

  currentDate = new Date();
}
