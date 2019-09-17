import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[ronxCommonTemplate]',
})
export class CommonTemplateDirective {
  @Input() type: string;
    
  @Input('commonTemplate') name: string;
  
  constructor(public template: TemplateRef<any>) {}
  
  getType(): string {
      return this.name ? this.name.toUpperCase(): this.name;
  }
}
