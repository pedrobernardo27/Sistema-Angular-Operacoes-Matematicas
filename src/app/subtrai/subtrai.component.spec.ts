import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtraiComponent } from './subtrai.component';

describe('SubtraiComponent', () => {
  let component: SubtraiComponent;
  let fixture: ComponentFixture<SubtraiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubtraiComponent]
    });
    fixture = TestBed.createComponent(SubtraiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
