import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


// Array de empleados 
const employees = [
    {
        name: 'David',
        lastName: 'Mora',
        age: 33,
        location: 'Madrid'
    },
    {
        name: 'Jesus',
        lastName: 'Mora',
        age: 42,
        location: 'Madrid'
    },
    {
        name: 'Alejandro',
        lastName: 'Perez',
        age: 23,
        location: 'Sevilla'
    },
    {
        name: 'Pedro',
        lastName: 'Gonzalez',
        age: 31,
        location: 'Barcelona'
    },
    {
        name: 'Sylvia',
        lastName: 'Dalmau',
        age: 45,
        location: 'Valencia'
    }
]

window.onload = function () {

    // número de empleados
    function numEmployees(arrayEmployees) {
        return arrayEmployees.length;
    }
    
    const totalEmployees = numEmployees(employees); 

    console.log('numero de empleados', totalEmployees);

    function getEmployeesByLocation(arrayEmployees, location) {

        let employeesByLocation = arrayEmployees.filter(employee => employee.location.toLowerCase() === location.toLowerCase()); 

        // for(let i = 0; i < arrayEmployees.length; i++) {
        //     if(arrayEmployees[i].location === location) {
        //         employeesByLocation.push(arrayEmployees[i])
        //     }
        // }
        

        return employeesByLocation;
    }

    const employeesLocatedMadrid = getEmployeesByLocation(employees, 'Madrid');

    console.log(employeesLocatedMadrid);

    const employeesLocatedSevilla = getEmployeesByLocation(employees, 'Sevilla');

    console.log(employeesLocatedSevilla);

    function getEmployeesUnder40(arrayEmployees) {
        let employeesUnder40 = arrayEmployees.filter(employee => employee < 40); 

        // for(let employee of arrayEmployees) {
        //     if(employee.age < 40) {
        //         employeesUnder40.push(employee)
        //     }
        // }

        return employeesUnder40
    }

    const employeesUnder40 = getEmployeesUnder40(employees);

    console.log(employeesUnder40);
};
