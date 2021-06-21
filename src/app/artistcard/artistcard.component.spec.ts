import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistcardComponent } from './artistcard.component';

describe('ArtistcardComponent', () => {
  let component: ArtistcardComponent;
  let fixture: ComponentFixture<ArtistcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
