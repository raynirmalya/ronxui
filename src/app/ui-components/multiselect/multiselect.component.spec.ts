import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JarvisMultiselectComponent } from './jarvis-multiselect.component';

describe('JarvisMultiselectComponent', () => {
  let component: JarvisMultiselectComponent;
  let fixture: ComponentFixture<JarvisMultiselectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [JarvisMultiselectComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JarvisMultiselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
