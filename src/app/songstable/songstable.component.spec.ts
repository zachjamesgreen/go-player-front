import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongstableComponent } from './songstable.component';

describe('SongstableComponent', () => {
  let component: SongstableComponent;
  let fixture: ComponentFixture<SongstableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongstableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongstableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
