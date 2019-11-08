import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor( private empservice: EmployeeService) { }

  ngOnInit() {
  }

}
