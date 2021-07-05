export interface EmployeeList {
    employeeid: number;
    firstname: string;
    lastname: string;
    birthdate: string;
    employeetype: 'Permanent' | 'Part-time';
    startdate: string;
    salary: number;
    pvfrate: any;
}

export interface TotalWorkingTime {
    years: number;
    totalMonths: number;
}