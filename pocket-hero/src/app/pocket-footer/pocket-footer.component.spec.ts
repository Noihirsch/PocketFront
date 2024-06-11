import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PocketFooterComponent } from './pocket-footer.component';

describe('PocketFooterComponent', () => {
  let component: PocketFooterComponent;
  let fixture: ComponentFixture<PocketFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PocketFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PocketFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
