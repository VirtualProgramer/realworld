import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, FormArray, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-tag-selector',
  templateUrl: './tag-selector.component.html',
  styleUrls: ['./tag-selector.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TagSelectorComponent),
      multi: true
    }
  ]
})
export class TagSelectorComponent implements OnInit, ControlValueAccessor {

  tag = new FormControl();
  tagList = new FormArray([]);

  onTouched;

  constructor() { }
  // Input
  writeValue(obj: string[]): void {
    this.tagList.clear();
    obj?.forEach(element => {
      this.tagList.push(new FormControl(element));
    });
  }
  // Output
  registerOnChange(fn: any): void {
    this.tagList.valueChanges.subscribe({
      next: value => {
        fn(value.join(","));
        if (!!this.onTouched) {
          this.onTouched();
        }
      }
    });
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

  addtag() {
    this.tagList.push(new FormControl(this.tag.value));
    this.tag.reset();
  }

  remove(idx) {
    this.tagList.removeAt(idx);
  }

}
