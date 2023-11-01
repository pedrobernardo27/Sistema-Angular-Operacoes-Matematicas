import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplicaComponent } from './multiplica.component';

describe('MultiplicaComponent', () => {
  let component: MultiplicaComponent;
  let fixture: ComponentFixture<MultiplicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultiplicaComponent]
    });
    fixture = TestBed.createComponent(MultiplicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
