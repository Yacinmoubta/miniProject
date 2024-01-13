import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FesPage } from './fes.page';

describe('FesPage', () => {
  let component: FesPage;
  let fixture: ComponentFixture<FesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
