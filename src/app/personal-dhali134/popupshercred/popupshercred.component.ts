import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import {PersonalDhali134Component} from '../personal-dhali134.component';
@Component({
  selector: 'app-popupshercred',
  templateUrl: './popupshercred.component.html',
  styleUrls: ['./popupshercred.component.css']
})
export class PopupshercredComponent {
  constructor(private dialogRef: MatDialogRef<PersonalDhali134Component>, @Inject(MAT_DIALOG_DATA) public data: any){}
  ok(){
    this.dialogRef.close();
  }
}
