import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  HostListener,
  ViewChild,
  ElementRef
} from '@angular/core';
import cloneDeep from 'lodash/cloneDeep';
@Component({
  selector: 'jar-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class JarvisInputComponent implements OnInit {
  @Input() name: string;
  @Input() id: string;
  @Input() model: string;
  @Input() placeholder: string;
  @Input() label: string;
  @Output() modelChange = new EventEmitter<string>();
  @ViewChild('el', { static: false }) el: ElementRef;
  placeHldr: string;
  isLabelHide: boolean;
  constructor() {}

  ngOnInit() {
    if (!this.model) {
      this.isLabelHide = true;
      this.placeHldr = cloneDeep(this.placeholder);
    } else {
      this.placeHldr = '';
      this.isLabelHide = false;
    }
  }

  onFocus(): void {
    this.placeHldr = '';
    this.isLabelHide = false;
  }

  onBlur(): void {
    if (!this.model || this.model === '') {
      this.placeHldr = cloneDeep(this.placeholder);
      this.isLabelHide = true;
    }
  }

  @HostListener('input', ['$event']) onInputChange(event) {
    if (!this.model || this.model === '') {
      this.placeHldr = cloneDeep(this.placeholder);
      this.isLabelHide = true;
    }
    this.modelChange.emit(this.el.nativeElement.value);
  }
}
