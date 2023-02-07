import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiEditDailogComponent } from './api-edit-dailog.component';

describe('ApiEditDailogComponent', () => {
  let component: ApiEditDailogComponent;
  let fixture: ComponentFixture<ApiEditDailogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiEditDailogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiEditDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
