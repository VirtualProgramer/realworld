import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  formData = new FormGroup({
    title: new FormControl("Default Title"),
    description: new FormControl(""),
    body: new FormControl(""),
    tag: new FormControl("")
  });

  constructor() { }

  ngOnInit(): void {
    this.formData.controls.title.valueChanges.subscribe({
      next: v => {
        const descriptionCtrl = this.formData.controls.description;
        if (!!v) {
          descriptionCtrl.setValidators([
            Validators.required
          ]);
        } else {
          descriptionCtrl.clearValidators();
        }
        descriptionCtrl.updateValueAndValidity({
          emitEvent: false
        });
      }
    });
  }

}
