import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsAapComponent } from './sms-aap.component';

describe('SmsAapComponent', () => {
  let component: SmsAapComponent;
  let fixture: ComponentFixture<SmsAapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmsAapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsAapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
