import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBarHoursComponent } from './top-bar-hours.component';

describe('TopBarHoursComponent', () => {
  let component: TopBarHoursComponent;
  let fixture: ComponentFixture<TopBarHoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopBarHoursComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TopBarHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
