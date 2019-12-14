import { NgModule } from '@angular/core';
import { JarvisToasterComponent } from './toaster.component';
import { JarvisToasterService } from './toaster.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [JarvisToasterComponent],
  imports: [CommonModule],
  providers: [JarvisToasterService],
  exports: [JarvisToasterComponent]
})
export class JarvisToasterModule {}
