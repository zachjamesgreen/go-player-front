import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongtableheaderComponent } from './songtableheader.component';

describe('SongtableheaderComponent', () => {
  let component: SongtableheaderComponent;
  let fixture: ComponentFixture<SongtableheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongtableheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongtableheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
