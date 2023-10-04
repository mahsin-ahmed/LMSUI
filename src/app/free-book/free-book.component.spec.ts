import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeBookComponent } from './free-book.component';

describe('FreeBookComponent', () => {
  let component: FreeBookComponent;
  let fixture: ComponentFixture<FreeBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreeBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
