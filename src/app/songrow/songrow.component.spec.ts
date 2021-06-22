import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongrowComponent } from './songrow.component';

describe('SongrowComponent', () => {
  let component: SongrowComponent;
  let fixture: ComponentFixture<SongrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongrowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
