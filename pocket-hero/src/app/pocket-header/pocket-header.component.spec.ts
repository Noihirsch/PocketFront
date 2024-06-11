import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PocketHeaderComponent } from './pocket-header.component';

describe('PocketHeaderComponent', () => {
  let component: PocketHeaderComponent;
  let fixture: ComponentFixture<PocketHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PocketHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PocketHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
