import {
  Component,
  OnInit,
  ContentChildren,
  QueryList,
  AfterContentInit,
  TemplateRef,
  Input,
  OnDestroy,
} from '@angular/core';
import { CommonTemplateDirective } from '../../shared/directives/ronx-template.directive';
import { Constants } from '../../shared/common.constants';
import { AccordionService } from '../services/accordion.service';

@Component({
  selector: 'ronx-accordion-tab',
  templateUrl: './accordion-tab.component.html',
  styleUrls: ['./accordion-tab.component.css'],
})
export class AccordionTabComponent
  implements OnInit, AfterContentInit, OnDestroy {
  public contentTemplate: TemplateRef<any>;
  public headerTemplate: TemplateRef<any>;
  public tabIndex: number;
  public toggle: boolean;

  @Input('disabled') isDisabled: boolean;
  @Input('isDefaultExpanded') isContentVisible: boolean = false;
  @ContentChildren(CommonTemplateDirective) templates: QueryList<any>;
  constructor(private accService: AccordionService) {}

  ngOnInit() {}
  ngOnDestroy() {}

  ngAfterContentInit() {
    this.templates.forEach(item => {
      switch (item.getType()) {
        case Constants.CONTENT:
          this.contentTemplate = item.template;
          break;
        case Constants.HEADER:
          this.headerTemplate = item.template;
          break;
        default:
          this.contentTemplate = item.template;
          break;
      }
    });
  }

  public onClickHeader() {
    if (this.toggle) {
      this.isContentVisible = !this.isContentVisible;
      this.accService.setData({ tabIndex: this.tabIndex });
    } else {
      this.isContentVisible = !this.isContentVisible;
    }
  }

  public onClickContent() {}
}
