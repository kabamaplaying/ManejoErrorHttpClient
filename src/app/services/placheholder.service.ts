
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './../models/todo';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PlacheHolderService {
  private readonly ULR_BASE = 'http://jsonplaceholder.typicode.com/';
  constructor(private http: HttpClient) {

  }

  getTodosNotFound(): Observable<Todo[]> {
    return this.http.get<any>('http://www.mocky.io/v2/5ebb29813600006400f7e57c');
  }
}
