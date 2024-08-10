import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMatTableComponent } from './ngx-mat-table.component';

describe('NgxMatTableComponent', () => {
  let component: NgxMatTableComponent;
  let fixture: ComponentFixture<NgxMatTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxMatTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxMatTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
