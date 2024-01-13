import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CasablancaPage } from './casablanca.page';

describe('CasablancaPage', () => {
  let component: CasablancaPage;
  let fixture: ComponentFixture<CasablancaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CasablancaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
