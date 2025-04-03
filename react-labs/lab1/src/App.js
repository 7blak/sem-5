import logo from './logo.svg';
import './App.css';
import {sumOfTeachersAges, sumOfActiveTeachersAges, listOfAllStudents} from './utils.js';

const students = ['John', 'Mark', 'Stephanie', 'Martha', 'Vlad'];
const numbers = [2, 5, 8, 10];
const data = [
  {
      teacherName: "Jan Nowak",
      teacherAge: 36,
      active: true,
      students: [
          {
              name: "Maciej Janosz",
              age: 12
          },
          {
              name: "Wojciech Kowalski",
              age: 15
          },
          {
              name: "Wioletta PoznaÄšÂska",
              age: 1000000
          }
      ]
  },
  {
      teacherName: "Mariusz Flasinski",
      teacherAge: 56,
      active: true,
      students: [
          {
              name: "Jan Kot",
              age: 12
          },
          {
              name: "Jan Ziobro",
              age: 15
          },
          {
              name: "Adam Malysz",
              age: 41
          }
      ]
  },
  {
      teacherName: "Wojciech Kuzak",
      teacherAge: 44,
      active: false,
      students: [
          {
              name: "Janina Wronska",
              age: 22
          },
          {
              name: "John Dover",
              age: 7
          },
          {
              name: "Emil Petterson",
              age: 46
          }
      ]
  }
];

const filterStudents = (students) => {
  return students.filter((s) => s.startsWith("M")).toString();
}

const rootNumbers = (array) => {
  return array.map((n) => Math.sqrt(n)).toString();
}

const sumArray = (array) => {
  return array.reduce((a, b) => a + b, 0);
}

function App() {
  return (
    <div>
      <p>
        <b>Results of function one:</b> {filterStudents(students)}
      </p>
      <p>
        <b>Results of function two:</b> {rootNumbers(numbers)}
      </p>
      <p>
        <b>Results of function three:</b> {sumArray(numbers)}
      </p>
      <p>
        <b>Results of function four:</b> {sumOfTeachersAges(data)}
      </p>
      <p>
        <b>Results of function five:</b> {sumOfActiveTeachersAges(data)}
      </p>
      <p>
        <b>Results of function six:</b> {listOfAllStudents(data)}
      </p>
      <p>
        <b>Results of function six:</b> 
        <ul>
          {listOfAllStudents(data).map(d=>{
          return <li>{d}</li>;
        })}
        </ul>
        
      </p>
    </div>
  );
}

export default App;
