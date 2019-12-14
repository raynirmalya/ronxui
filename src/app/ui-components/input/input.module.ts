import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JarvisInputComponent } from './input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [JarvisInputComponent],
  declarations: [JarvisInputComponent],
  providers: []
})
export class JarvisInputModule {}
