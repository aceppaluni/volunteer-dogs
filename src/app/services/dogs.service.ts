import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Dog, PaginationParams } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  constructor(private apiService: ApiService) {}

  getDogs = (url: string, params: PaginationParams): Observable<Dog[]> => {
    return this.apiService.get(url, {
      params,
      responseType: 'json'
    })
  }
}
