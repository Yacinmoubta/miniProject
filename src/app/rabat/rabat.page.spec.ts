import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RabatPage } from './rabat.page';

describe('RabatPage', () => {
  let component: RabatPage;
  let fixture: ComponentFixture<RabatPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RabatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
