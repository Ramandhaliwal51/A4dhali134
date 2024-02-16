import { Component, Input } from '@angular/core';
import { PersonalInfo } from '../dhali134Interface';
import {MatDialog} from '@angular/material/dialog';
import {PopupbioComponent} from './popupbio/popupbio.component';
import { PopupshercredComponent } from './popupshercred/popupshercred.component';
@Component({
  selector: 'app-personal-dhali134',
  templateUrl: './personal-dhali134.component.html',
  styleUrls: ['./personal-dhali134.component.css']
})
export class PersonalDhali134Component {
  @Input() dhali134MyData!: PersonalInfo;

  constructor(private dialogVar: MatDialog){}

  dialogBox(choice:string){
    if(choice === 'sherCred'){
    const dialogRef = this.dialogVar.open(PopupshercredComponent, {data: this.dhali134MyData, width:'500px'});
    }
    if(choice === 'moreAboutMe'){
      const dialogRef = this.dialogVar.open(PopupbioComponent, {data: this.dhali134MyData, width: '500px'});
    }
  }
}
