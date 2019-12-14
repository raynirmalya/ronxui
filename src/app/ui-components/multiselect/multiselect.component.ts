import { Component, OnInit, Input, ViewChild, ElementRef, OnChanges } from '@angular/core';
import cloneDeep from 'lodash/cloneDeep';
import { Option } from './multiselect.model';

@Component({
  selector: 'jar-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.css']
})
export class JarvisMultiselectComponent implements OnInit, OnChanges {
  @Input() name: string;
  @Input() id: string;
  @Input() model: string;
  @Input() placeholder: string;
  @Input() label: string;
  @Input() options: any[];
  @Input() optionKey: string;
  @Input() optionValue: string;
  @Input() selectedValues: string[] = [];
  @ViewChild('multiSelect', { static: false }) multiSelect: ElementRef;
  placeHldr: string;
  isLabelHide: boolean;
  jarvisOptions: Option[] = [];
  showOptions: boolean;
  multiSelectWidth: number;
  constructor() {}
  ngOnChanges(): void {
    let selected: boolean;
    this.isLabelHide = true;
    this.placeHldr = cloneDeep(this.placeholder);
    if (this.optionKey && this.optionValue) {
    } else {
      this.jarvisOptions = [];
      this.options.forEach((item: string, index: number) => {
        selected = this.selectedValues.indexOf(item) > -1;
        this.jarvisOptions.push({ key: item, value: item, isSelected: selected });
      });
    }
  }

  ngOnInit() {

    // this.multiSelectWidth = this.multiSelect.nativeElement.width;
  }

  onFocus(): void {
    this.placeHldr = '';
    this.isLabelHide = false;
    this.showOptions = true;
  }

  onBlur(): void {
    if (!this.model || this.model === '') {
      this.placeHldr = cloneDeep(this.placeholder);
      this.isLabelHide = true;
    }
  }

  onSelect(opts: Option, i: number): void {
    if (opts.isSelected) {
      this.selectedValues.forEach((val, index) => {
        if (opts.value === val) {
          this.onRemove(index);
        }
      });
    } else if (this.selectedValues.indexOf(opts.value) === -1) {
      this.selectedValues.push(opts.value);
      opts.isSelected = !opts.isSelected;
    }
  }
  close($event): void {
    this.showOptions = false;
  }
  onRemove(i: number): void {
    const selectedVal = this.selectedValues[i];
    this.selectedValues.splice(i, 1);
    this.jarvisOptions.forEach(element => {
      if (selectedVal === element.value) {
        element.isSelected = !element.isSelected;
      }
    });
  }
}
