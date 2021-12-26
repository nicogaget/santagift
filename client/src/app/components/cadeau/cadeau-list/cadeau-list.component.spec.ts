import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadeauListComponent } from './cadeau-list.component';

describe('CadeauListComponent', () => {
  let component: CadeauListComponent;
  let fixture: ComponentFixture<CadeauListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadeauListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadeauListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
