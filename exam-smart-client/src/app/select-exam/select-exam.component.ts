import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ExamTypeService } from '../../services/exam-type-service';
import { GetExamTypeDto } from '../../models/exam-type-models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-select-exam',
  imports: [RouterLink,CommonModule],
  templateUrl: './select-exam.component.html',
  styleUrl: './select-exam.component.css',
})
export class SelectExamComponent implements OnInit {

  protected examTypes: GetExamTypeDto[] = []; 

  constructor(private examTypeService:ExamTypeService) {}
  ngOnInit(): void {
    this.examTypeService.getAllExamTypes().subscribe({
      next: (examTypes) => {
        this.examTypes = examTypes;
      },
      error: (error) => {
        console.error('Error fetching exam types:', error);
      },
    });
  }
}
