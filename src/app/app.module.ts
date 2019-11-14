import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GridComponent } from './ui-components/grid/grid.component';
import { DropdownsComponent } from './ui-components/dropdowns/dropdowns.component';
import { AccordionModule } from './ui-components/accordion/accordion.module';
import { IndexComponent } from './modules/table/sc-table/index/index.component';
import { ScTableRoutingModule } from './modules/table/sc-table/sc-table-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [AppComponent, GridComponent, DropdownsComponent, IndexComponent, DashboardComponent],
  imports: [BrowserModule, AccordionModule, ScTableRoutingModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
