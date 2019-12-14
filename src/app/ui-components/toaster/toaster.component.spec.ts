import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JarvisToasterComponent } from './toaster.component';

describe('JarvisToasterComponent', () => {
  let component: JarvisToasterComponent;
  let fixture: ComponentFixture<JarvisToasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [JarvisToasterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JarvisToasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
