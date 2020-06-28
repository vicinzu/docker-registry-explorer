import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrShowRepositoryComponent } from './dr-show-repository.component';

describe('DrShowRepositoryComponent', () => {
  let component: DrShowRepositoryComponent;
  let fixture: ComponentFixture<DrShowRepositoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrShowRepositoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrShowRepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
