import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionTabComponent } from './accordion-tab.component';

describe('AccordionTabComponent', () => {
  let component: AccordionTabComponent;
  let fixture: ComponentFixture<AccordionTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccordionTabComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
