import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion.component';
import { AccordionTabComponent } from './accordion-tab/accordion-tab.component';
import { CommonTemplateDirective } from '../shared/directives/ronx-template.directive';
import { AccordionService } from './services/accordion.service';

@NgModule({
  imports: [CommonModule],
  exports: [AccordionComponent, AccordionTabComponent, CommonTemplateDirective],
  declarations: [
    AccordionComponent,
    AccordionTabComponent,
    CommonTemplateDirective,
  ],
  providers: [AccordionService],
})
export class AccordionModule {}
