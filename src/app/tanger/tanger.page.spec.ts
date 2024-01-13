import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TangerPage } from './tanger.page';

describe('TangerPage', () => {
  let component: TangerPage;
  let fixture: ComponentFixture<TangerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TangerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
