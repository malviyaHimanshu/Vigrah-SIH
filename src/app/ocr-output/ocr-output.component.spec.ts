import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcrOutputComponent } from './ocr-output.component';

describe('OcrOutputComponent', () => {
  let component: OcrOutputComponent;
  let fixture: ComponentFixture<OcrOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OcrOutputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OcrOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
