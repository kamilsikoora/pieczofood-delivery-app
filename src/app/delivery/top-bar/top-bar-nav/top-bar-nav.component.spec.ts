import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBarNavComponent } from './top-bar-nav.component';

describe('TopBarNavComponent', () => {
  let component: TopBarNavComponent;
  let fixture: ComponentFixture<TopBarNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopBarNavComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TopBarNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
