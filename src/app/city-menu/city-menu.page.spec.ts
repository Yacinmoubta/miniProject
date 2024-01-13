import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CityMenuPage } from './city-menu.page';

describe('CityMenuPage', () => {
  let component: CityMenuPage;
  let fixture: ComponentFixture<CityMenuPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CityMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
