import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantPortalComponent } from './participant-portal.component';

describe('ParticipantPortalComponent', () => {
  let component: ParticipantPortalComponent;
  let fixture: ComponentFixture<ParticipantPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParticipantPortalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticipantPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
