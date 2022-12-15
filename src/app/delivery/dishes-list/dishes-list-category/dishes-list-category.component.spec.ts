import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishesListCategoryComponent } from './dishes-list-category.component';

describe('DishesListCategoryComponent', () => {
  let component: DishesListCategoryComponent;
  let fixture: ComponentFixture<DishesListCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DishesListCategoryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DishesListCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
