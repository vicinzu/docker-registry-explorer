import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrListRepositoriesComponent } from './dr-list-repositories.component';

describe('DrListRepositoriesComponent', () => {
  let component: DrListRepositoriesComponent;
  let fixture: ComponentFixture<DrListRepositoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrListRepositoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrListRepositoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
