import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { HttpErrorResponse, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee, IEmployee } from '../interfaces';
import { DataService } from '../data.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Component({
  selector: 'app-get-json',
  templateUrl: './get-json.component.html',
  styleUrls: ['./get-json.component.css']
})
export class GetJsonComponent implements OnInit {
 // @ViewChild('idInput') idInputRef: ElementRef;
 @ViewChild('firstNameInput') firstNameInputRef: ElementRef;
 @ViewChild('lastNameInput') lastNameInputRef: ElementRef;
 @ViewChild('emailInput') emailInputRef: ElementRef;

 employees: IEmployee[];

 constructor(
   private http: HttpClient,
   private dataService: DataService) {
     this.showEmployees();
 }

 ngOnInit() {

 }

 showEmployees() {
   this.dataService.getEmployees()
     .subscribe(((employees: IEmployee[]) => {
       this.employees = employees;
     }));
 }

 onAddEmployee() {
   const newEmployee = new Employee(
     // this.idInputRef.nativeElement.value,
     this.firstNameInputRef.nativeElement.value,
     this.lastNameInputRef.nativeElement.value,
     this.emailInputRef.nativeElement.value);
   this.dataService.addEmployeePOST(newEmployee)
     .subscribe(employee => this.employees.push(employee));
   // console.log(newEmployee);
 }

 // Error handling
 handleError(error: HttpErrorResponse) {
   console.log(error);
   return Observable.throw(error || 'Node.js server error');
 }

}
