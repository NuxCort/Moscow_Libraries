import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MosDataTableComponent } from './mos-data-table.component';

describe('MosDataTableComponent', () => {
  let component: MosDataTableComponent;
  let fixture: ComponentFixture<MosDataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MosDataTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MosDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
