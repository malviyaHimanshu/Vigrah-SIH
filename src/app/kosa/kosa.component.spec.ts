import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KosaComponent } from './kosa.component';

describe('KosaComponent', () => {
  let component: KosaComponent;
  let fixture: ComponentFixture<KosaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KosaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KosaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
