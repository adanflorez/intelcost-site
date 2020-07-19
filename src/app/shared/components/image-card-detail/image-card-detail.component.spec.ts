import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCardDetailComponent } from './image-card-detail.component';

describe('ImageCardDetailComponent', () => {
  let component: ImageCardDetailComponent;
  let fixture: ComponentFixture<ImageCardDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageCardDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageCardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
