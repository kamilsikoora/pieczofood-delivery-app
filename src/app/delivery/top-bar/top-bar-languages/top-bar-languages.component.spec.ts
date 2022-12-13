import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBarLanguagesComponent } from './top-bar-languages.component';

describe('TopBarLanguagesComponent', () => {
  let component: TopBarLanguagesComponent;
  let fixture: ComponentFixture<TopBarLanguagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopBarLanguagesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TopBarLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
