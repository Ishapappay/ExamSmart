import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiClient } from './apiClient' // Import the ApiClient
import { CreateExamTypeDto, GetExamTypeDto, UpdateExamTypeDto } from '../models/exam-type-models';

@Injectable({
  providedIn: 'root',
})
export class ExamTypeService {
  private readonly endpoint = 'examtypes'; // Base endpoint for ExamType API

  constructor(private apiClient: ApiClient) {}

  /**
   * Get all exam types.
   * @returns Observable of an array of GetExamTypeDto.
   */
  getAllExamTypes(): Observable<GetExamTypeDto[]> {
    return this.apiClient.get<GetExamTypeDto[]>(this.endpoint);
  }

  /**
   * Get a specific exam type by ID.
   * @param id The ID of the exam type.
   * @returns Observable of GetExamTypeDto.
   */
  getExamTypeById(id: number): Observable<GetExamTypeDto> {
    return this.apiClient.get<GetExamTypeDto>(`${this.endpoint}/${id}`);
  }

  /**
   * Create a new exam type.
   * @param examTypeDto The data for the new exam type.
   * @returns Observable of the created exam type.
   */
  createExamType(examTypeDto: CreateExamTypeDto): Observable<GetExamTypeDto> {
    return this.apiClient.post<GetExamTypeDto>(this.endpoint, examTypeDto);
  }

  /**
   * Update an existing exam type.
   * @param id The ID of the exam type to update.
   * @param updatedExamTypeDto The updated data for the exam type.
   * @returns Observable of void.
   */
  updateExamType(
    id: number,
    updatedExamTypeDto: UpdateExamTypeDto
  ): Observable<void> {
    return this.apiClient.put<void>(
      `${this.endpoint}/${id}`,
      updatedExamTypeDto
    );
  }

  /**
   * Delete an exam type.
   * @param id The ID of the exam type to delete.
   * @returns Observable of void.
   */
  deleteExamType(id: number): Observable<void> {
    return this.apiClient.delete<void>(`${this.endpoint}/${id}`);
  }
}
