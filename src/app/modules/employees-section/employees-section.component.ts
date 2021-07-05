import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EmployeeList, TotalWorkingTime } from './employees-section.model';

@Component({
  selector: 'app-employees-section',
  templateUrl: './employees-section.component.html',
  styleUrls: ['./employees-section.component.scss']
})
export class EmployeesSectionComponent implements OnInit {
  datas: EmployeeList[] = [{
    "employeeid": 1,
    "firstname": "Janet",
    "lastname": "Leverling",
    "birthdate": "30/08/1973",
    "startdate": "02/04/2012",
    "employeetype": "Permanent",
    "salary": 40000,
    "pvfrate": 4
  },
  {
    "employeeid": 2,
    "firstname": "Nancy",
    "lastname": "Davolio",
    "birthdate": "08/12/1978",
    "startdate": "01/05/2012",
    "employeetype": "Permanent",
    "salary": 30000,
    "pvfrate": 5
  },
  {
    "employeeid": 3,
    "firstname": "Andrew",
    "lastname": "Fuller",
    "birthdate": "19/02/1962",
    "startdate": "16/08/2012",
    "employeetype": "Permanent",
    "salary": 50000,
    "pvfrate": 5
  },
  {
    "employeeid": 4,
    "firstname": "Anne",
    "lastname": "Dodsworth",
    "birthdate": "02/07/1969",
    "startdate": "16/11/2012",
    "employeetype": "Part-time",
    "salary": 200,
    "pvfrate": null
  },
  {
    "employeeid": 5,
    "firstname": "Michael",
    "lastname": "Suyama",
    "birthdate": "02/07/1963",
    "startdate": "17/10/2013",
    "employeetype": "Permanent",
    "salary": 40000,
    "pvfrate": 2
  },
  {
    "employeeid": 6,
    "firstname": "Laura",
    "lastname": "Callahan",
    "birthdate": "09/01/1968",
    "startdate": "05/03/2014",
    "employeetype": "Permanent",
    "salary": 52000,
    "pvfrate": 8
  },
  {
    "employeeid": 7,
    "firstname": "Fergus",
    "lastname": "Robinson",
    "birthdate": "18/10/1982",
    "startdate": "02/06/2014",
    "employeetype": "Permanent",
    "salary": 43000,
    "pvfrate": 10
  },
  {
    "employeeid": 8,
    "firstname": "Tom",
    "lastname": "Brown",
    "birthdate": "07/11/1977",
    "startdate": "03/02/2015",
    "employeetype": "Permanent",
    "salary": 35000,
    "pvfrate": 10
  },
  {
    "employeeid": 9,
    "firstname": "Margaret",
    "lastname": "Peacock",
    "birthdate": "11/09/1968",
    "startdate": "01/05/2015",
    "employeetype": "Permanent",
    "salary": 70000,
    "pvfrate": 10
  },
  {
    "employeeid": 10,
    "firstname": "Robert",
    "lastname": "King",
    "birthdate": "29/05/1970",
    "startdate": "04/01/2016",
    "employeetype": "Permanent",
    "salary": 25000,
    "pvfrate": 5
  },
  {
    "employeeid": 11,
    "firstname": "Steven",
    "lastname": "Buchanan",
    "birthdate": "04/03/1975",
    "startdate": "17/10/2016",
    "employeetype": "Part-time",
    "salary": 150,
    "pvfrate": null
  },
  {
    "employeeid": 12,
    "firstname": "Rebecca",
    "lastname": "Wilson",
    "birthdate": "20/04/1985",
    "startdate": "01/03/2017",
    "employeetype": "Permanent",
    "salary": 48000,
    "pvfrate": 4
  }];

  isEdit = false;
  currentIndex!: number;
  tempPVF!: number;

  pfvRate = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }


  calculatePVD(employee: EmployeeList, show?: 'company' | 'employee', allMonth?: boolean) {
    const companyContibute = 10;
    const employeeRate = employee.pvfrate;
    const employeeStartDate = employee.startdate;
    const employeeSalary = employee.salary;

    if (employee.employeetype === 'Part-time') {
      return;
    }

    if (allMonth) {

      let totalDateOfWork = this.getTotalMonthOfJoin(employeeStartDate);

      if (totalDateOfWork.years < 3) {
        return Math.floor(this.getTotalPaidPVF(employeeSalary, employeeRate) * totalDateOfWork.totalMonths);
      }

      if (totalDateOfWork.years < 5) {
        return Math.floor(this.getTotalPaidPVF(employeeSalary, 5 + employeeRate) * totalDateOfWork.totalMonths);
      }

      if (totalDateOfWork.years > 5) {
        return Math.floor(this.getTotalPaidPVF(employeeSalary, companyContibute + employeeRate) * totalDateOfWork.totalMonths);
      }

    }

    if (show === 'company') {
      return employee.salary * (companyContibute / 100);
    }

    if (show === 'employee') {
      return employee.salary * (employeeRate / 100)
    }

    return;


  }

  private getTotalMonthOfJoin(startDate: any): TotalWorkingTime {
    let splitedDate = startDate.split('/');
    let formattedDate = new Date(splitedDate[2], splitedDate[1] - 1, splitedDate[0]);
    const currentDate = new Date();
    let years = currentDate.getFullYear() - formattedDate.getFullYear();
    let month = currentDate.getMonth() - formattedDate.getMonth();
    if (month < 0) {
      month = 0;
    }

    const totalMonths = (years * 12) + month

    return {
      totalMonths: totalMonths,
      years: years
    }

  }

  private getTotalPaidPVF(salary: number, contributeRate: number) {
    return salary * (contributeRate / 100);
  }

  editPVF() {
    this.isEdit = !this.isEdit;
  }

}

