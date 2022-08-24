import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbhinanaComponent } from './abhinana.component';

describe('AbhinanaComponent', () => {
  let component: AbhinanaComponent;
  let fixture: ComponentFixture<AbhinanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbhinanaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbhinanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
