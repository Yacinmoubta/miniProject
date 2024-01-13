import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OujdaPage } from './oujda.page';

describe('OujdaPage', () => {
  let component: OujdaPage;
  let fixture: ComponentFixture<OujdaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OujdaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
