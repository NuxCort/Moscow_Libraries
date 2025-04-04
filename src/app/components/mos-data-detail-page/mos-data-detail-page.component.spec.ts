import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MosDataDetailPageComponent } from './mos-data-detail-page.component';

describe('MosDataDetailPageComponent', () => {
  let component: MosDataDetailPageComponent;
  let fixture: ComponentFixture<MosDataDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MosDataDetailPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MosDataDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
