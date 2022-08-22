import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AksarantaraComponent } from './aksarantara.component';

describe('AksarantaraComponent', () => {
  let component: AksarantaraComponent;
  let fixture: ComponentFixture<AksarantaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AksarantaraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AksarantaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
