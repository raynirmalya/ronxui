import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';  

import { AppComponent } from './app.component';
import { GridComponent } from './ui-components/grid/grid.component';
import { DropdownsComponent } from './ui-components/dropdowns/dropdowns.component';
import { AccordionComponent } from './ui-components/accordion/accordion.component';
import { AccordionTabComponent } from './ui-components/accordion/accordion-tab/accordion-tab.component';
import { CommonTemplateDirective } from './ui-components/shared/directives/ronx-template.directive';
@NgModule({
  declarations: [AppComponent,
     GridComponent, DropdownsComponent,
      AccordionComponent, AccordionTabComponent, CommonTemplateDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
