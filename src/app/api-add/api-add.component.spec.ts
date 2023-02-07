import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiAddComponent } from './api-add.component';

describe('ApiAddComponent', () => {
  let component: ApiAddComponent;
  let fixture: ComponentFixture<ApiAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
