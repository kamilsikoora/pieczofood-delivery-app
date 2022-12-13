import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBarLocationComponent } from './top-bar-location.component';

describe('TopBarLocationComponent', () => {
  let component: TopBarLocationComponent;
  let fixture: ComponentFixture<TopBarLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopBarLocationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TopBarLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
