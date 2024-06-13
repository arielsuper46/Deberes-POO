import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LGComponent } from './lg.component';

describe('LGComponent', () => {
  let component: LGComponent;
  let fixture: ComponentFixture<LGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LGComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
