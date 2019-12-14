import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JarvisMultiselectComponent } from './multiselect.component';
import { JarvisOutsideclickDirective } from './outsideclick.directive';
import { FilterPipe } from './filter.pipe';

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [JarvisMultiselectComponent],
  declarations: [
    JarvisMultiselectComponent,
    JarvisOutsideclickDirective,
    FilterPipe
  ],
  providers: []
})
export class JarvisMultiselectModule {}
