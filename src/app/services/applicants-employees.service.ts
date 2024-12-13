import { inject, Injectable } from '@angular/core';
import { ApplicantsEmployees } from '../model/applicants-employees.model';
import { Observable, of } from 'rxjs';
import { TypeApplicantsEmployees } from '../pages/user-list/user-list.component';

const employeApplicantEmpty: ApplicantsEmployees = {
  personalData: {
    nifOrPassport: '', 
    firstName: '',      
    lastName1: '',      
    lastName2: '',      
    gender: '',        
    birthDate: '' 
  },
  address: {
    street: '',        
    number: '',        
    door: '',          
    postalCode: '',    
    city: ''           
  },
  workExperience: []   
}

const employeesApplicants: ApplicantsEmployees[] = [
  {
    personalData: {
      nifOrPassport: '12345678A',
      firstName: 'John',
      lastName1: 'Doe',
      lastName2: 'Smith',
      gender: 'Male',
      birthDate: '1990-01-01',
    },
    address: {
      street: 'Main St',
      number: '123',
      door: 'A',
      postalCode: '12345',
      city: 'Madrid',
    },
    workExperience: [
      {
        companyName: 'Company A',
        jobTitle: 'Software Engineer',
        date: '2015-01-01 to 2020-12-31',
      },
      {
        companyName: 'Company B',
        jobTitle: 'Senior Developer',
        date: '2021-01-01 to present',
      },
    ],
  },
  {
    personalData: {
      nifOrPassport: '23456789B',
      firstName: 'Alice',
      lastName1: 'Johnson',
      lastName2: 'Williams',
      gender: 'Female',
      birthDate: '1992-03-15',
    },
    address: {
      street: 'Park Ave',
      number: '456',
      door: 'B',
      postalCode: '67890',
      city: 'Barcelona',
    },
    workExperience: [
      {
        companyName: 'Company C',
        jobTitle: 'Product Manager',
        date: '2016-05-01 to 2020-12-31',
      },
    ],
  },
  {
    personalData: {
      nifOrPassport: '34567890C',
      firstName: 'Carlos',
      lastName1: 'Garcia',
      lastName2: 'Martinez',
      gender: 'Male',
      birthDate: '1988-07-20',
    },
    address: {
      street: 'Sunset Blvd',
      number: '789',
      door: 'C',
      postalCode: '11223',
      city: 'Sevilla',
    },
    workExperience: [
      {
        companyName: 'Company D',
        jobTitle: 'HR Specialist',
        date: '2013-02-01 to 2018-10-31',
      },
      {
        companyName: 'Company E',
        jobTitle: 'HR Manager',
        date: '2019-01-01 to present',
      },
    ],
  },
  {
    personalData: {
      nifOrPassport: '45678901D',
      firstName: 'Eva',
      lastName1: 'Martinez',
      lastName2: 'Gomez',
      gender: 'Female',
      birthDate: '1995-02-25',
    },
    address: {
      street: 'River St',
      number: '321',
      door: 'D',
      postalCode: '34567',
      city: 'Valencia',
    },
    studies: [
      {
        institutionName: 'University W',
        degree: 'Marketing',
        date: '2012-09-01 to 2016-06-30',
      },
    ],
  },
  {
    personalData: {
      nifOrPassport: '56789012E',
      firstName: 'Pedro',
      lastName1: 'Perez',
      lastName2: 'Ruiz',
      gender: 'Male',
      birthDate: '1993-10-10',
    },
    address: {
      street: 'Ocean Dr',
      number: '654',
      door: 'E',
      postalCode: '23456',
      city: 'Bilbao',
    },
    studies: [
      {
        institutionName: 'University V',
        degree: 'Finance',
        date: '2010-09-01 to 2014-06-30',
      },
    ],
  },
  {
    personalData: {
      nifOrPassport: '67890123F',
      firstName: 'Maria',
      lastName1: 'Sanchez',
      lastName2: 'Lopez',
      gender: 'Female',
      birthDate: '1994-12-05',
    },
    address: {
      street: 'Greenwich St',
      number: '987',
      door: 'F',
      postalCode: '34567',
      city: 'Zaragoza',
    },
    studies: [
      {
        institutionName: 'University P',
        degree: 'Psychology',
        date: '2011-09-01 to 2015-06-30',
      },
    ],
  },
];

@Injectable({
  providedIn: 'root'
})
export class ApplicantsEmployeesService {

  getApplicantsEmployees(): Observable<ApplicantsEmployees[]>{
    return of(employeesApplicants);
  }

  getAppEmpByNifOrPassport(nifOrPassport: string): Observable<ApplicantsEmployees> {
    const foundEmployee = employeesApplicants.find(appEmp => appEmp.personalData.nifOrPassport === nifOrPassport);
    return of(foundEmployee || employeApplicantEmpty);
  }

  getAppEmpByFilter(filter: TypeApplicantsEmployees): Observable<ApplicantsEmployees[]> {
    let foundEmployee: ApplicantsEmployees[] = [];
    if(filter === 'demandante') foundEmployee = employeesApplicants.filter(appEmp => !appEmp.workExperience || appEmp.workExperience.length === 0);
    else if(filter === 'empleado') foundEmployee = employeesApplicants.filter(appEmp => !appEmp.studies || appEmp.studies.length === 0);
    return of(foundEmployee);
  }

}
