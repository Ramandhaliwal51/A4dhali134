import { Component, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {PersonalDhali134Component} from '../personal-dhali134.component';

@Component({
  selector: 'app-popupbio',
  templateUrl: './popupbio.component.html',
  styleUrls: ['./popupbio.component.css']
})
export class PopupbioComponent {
  constructor(private dialogRef: MatDialogRef<PersonalDhali134Component>, @Inject(MAT_DIALOG_DATA) public data: any){}

  ok(){
    this.dialogRef.close();
  }
}
