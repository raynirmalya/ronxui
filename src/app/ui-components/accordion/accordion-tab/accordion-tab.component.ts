import { Component, OnInit, ContentChildren, QueryList, AfterContentInit, TemplateRef } from '@angular/core';
import { CommonTemplateDirective } from 'app/ui-components/shared/directives/ronx-template.directive';
import { Constants } from 'app/ui-components/shared/common.constants';

@Component({
  selector: 'ronx-accordion-tab',
  templateUrl: './accordion-tab.component.html',
  styleUrls: ['./accordion-tab.component.css'],
})
export class AccordionTabComponent implements OnInit, AfterContentInit {
  public contentTemplate: TemplateRef<any>;
  public headerTemplate: TemplateRef<any>;

  @ContentChildren(CommonTemplateDirective) templates: QueryList<any>;
  constructor() {}

  ngOnInit() {}

  ngAfterContentInit() {
    console.log(this.templates);
    this.templates.forEach((item) => {
        switch(item.getType()) {
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
}
