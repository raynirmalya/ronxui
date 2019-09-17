import { CommonTemplateDirective } from './ronx-template.directive';

describe('CommonTemplateDirective', () => {
  it('should create an instance', () => {
    const directive = new CommonTemplateDirective({
      createEmbeddedView: null,
      elementRef: null,
    });
    expect(directive).toBeTruthy();
  });
});
