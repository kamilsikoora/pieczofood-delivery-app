import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBarLocationsComponent } from './top-bar-locations.component';

describe('TopBarLocationsComponent', () => {
  let component: TopBarLocationsComponent;
  let fixture: ComponentFixture<TopBarLocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopBarLocationsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TopBarLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
