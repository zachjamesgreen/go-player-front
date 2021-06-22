import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumcardComponent } from './albumcard.component';

describe('AlbumcardComponent', () => {
  let component: AlbumcardComponent;
  let fixture: ComponentFixture<AlbumcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
