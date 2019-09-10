import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GridComponent } from './ui-components/grid/grid.component';
import { DropdownsComponent } from './ui-components/dropdowns/dropdowns.component';

@NgModule({
  declarations: [AppComponent, GridComponent, DropdownsComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
