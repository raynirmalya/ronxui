import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GridComponent } from './ui-components/grid/grid.component';
import { DropdownsComponent } from './ui-components/dropdowns/dropdowns.component';
import { AccordionModule } from './ui-components/accordion/accordion.module';
@NgModule({
  declarations: [AppComponent, GridComponent, DropdownsComponent],
  imports: [BrowserModule, AccordionModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
