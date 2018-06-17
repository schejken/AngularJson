import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from './interfaces';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = 'http://localhost:3000/employees';
  employees: IEmployee[];

  constructor(private http: HttpClient) { }

  // GET Employees
  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.apiUrl)
      .pipe(
        map(employee => {
          return employee;
        }),
        catchError(this.handleError)
      );
  }

  // POST Employee function
  addEmployeePOST(employee: IEmployee): Observable<IEmployee> {
    return this.http.post<IEmployee>(this.apiUrl, employee)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Error handling
  handleError(error: HttpErrorResponse) {
    console.log(error);
    return Observable.throw(error || 'Node.js server error');
  }
}
