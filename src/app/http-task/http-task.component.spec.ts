import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpTaskComponent } from './http-task.component';

describe('HttpTaskComponent', () => {
  let component: HttpTaskComponent;
  let fixture: ComponentFixture<HttpTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
