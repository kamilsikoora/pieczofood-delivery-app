import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishesListItemComponent } from './dishes-list-item.component';

describe('DishesListItemComponent', () => {
  let component: DishesListItemComponent;
  let fixture: ComponentFixture<DishesListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DishesListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DishesListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
