import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  userInput:string = '';

  constructor(
    private dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {name: string},
    private router: Router,
    private route: ActivatedRoute,
    )
    { }


    onClickOk() : void {
      this.dialogRef.close({
        data : this.userInput,
    });
  }

    onClose() : void {
      this.dialogRef.close();
    }

}
