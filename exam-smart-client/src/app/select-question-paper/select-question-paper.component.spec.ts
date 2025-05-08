import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectQuestionPaperComponent } from './select-question-paper.component';

describe('SelectQuestionPaperComponent', () => {
  let component: SelectQuestionPaperComponent;
  let fixture: ComponentFixture<SelectQuestionPaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectQuestionPaperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectQuestionPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
