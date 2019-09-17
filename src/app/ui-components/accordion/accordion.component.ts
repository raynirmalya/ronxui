import { Component, OnInit, Input, QueryList, ContentChildren, OnDestroy, AfterContentInit } from '@angular/core';
import { AccordionTabComponent } from './accordion-tab/accordion-tab.component';
import { AccordionService } from './services/accordion.service';

@Component({
  selector: 'ronx-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent implements OnInit, OnDestroy, AfterContentInit {
  @Input('toggle') toggle = true;

  @ContentChildren(AccordionTabComponent) accordionTabs: QueryList<any>;
  constructor(private accService: AccordionService) {}

  ngOnInit(): void {
    this.accService.tabHeaderEventData.subscribe(data => {
      if(data) {
        this.accordionTabs.forEach((item, index) => {
          if(item.tabIndex !== data.tabIndex) {
            item.isContentVisible = false;
          }
        });
      }
    });
  }

  ngOnDestroy(): void {}
  ngAfterContentInit(): void {
    this.accordionTabs.forEach((item, index) => {
      item.tabIndex = index;
      item.toggle = this.toggle;
    });
  }
}

