import { useState } from 'react';
import './App.css';
import Employee from './components/Employee';
import AddEmployee from './components/AddEmployee';
import { v4 as uuidv4 } from 'uuid';
import EditEmployee from "./components/EditEmployee";

function App() {
  const [role, setRole] = useState('dev');
  const [employees, setEmployees] = useState(
    [
      { id: 1, name: "Caleb", role: "developer", img: "https://img.freepik.com/free-photo/cheerful-healthy-portrait-face-background_1187-6062.jpg" },
      { id: 2, name: "Sal", role: "manager", img: "https://img.freepik.com/free-photo/happy-joyful-hipster-guy-posing_1262-21147.jpg" },
      { id: 3, name: "June", role: "Director of Engg", img: "https://img.freepik.com/free-photo/smiling-brunette-woman-yellow-sweater-pointing-finger-up-happy-female-model-showing-advertisement-top-indicating-copy-space-standing-white-background_176420-53284.jpg" },
      { id: 4, name: "Melanie", role: "Software Engineer", img: "https://img.freepik.com/free-photo/vertical-shot-happy-dark-skinned-female-with-curly-hair_273609-15519.jpg" },
      { id: 5, name: "Corey", role: "The Devops Guy", img: "https://img.freepik.com/free-photo/beautiful-female-half-length-portrait-isolated-young-emotional-indian-woman-dress-standing-crossing-hands-negative-space-facial-expression-human-emotions-concept_155003-18237.jpg" },
      { id: 6, name: "Melissa", role: "Senior", img: "https://img.freepik.com/free-photo/young-beautiful-woman-casual-clothes-looking-smiling-confident-with-arms-crossed_141793-128211.jpg" },
    ]
  );
  function updateEmployee(id, newName, newRole) {
    const updatedEmployee = employees.map((employee) => {
      if (id === employee.id) {
        return { ...employee, name: newName, role: newRole }
      }
      return employee;
    })
    setEmployees(updatedEmployee);
  }

  function newEmployee(name, role, img) {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img
    }
    setEmployees([...employees, newEmployee]);
  }

  const showEmployees = true;

  return (
    <div className="App">
      {showEmployees ?
        <>
          <input type="text" onChange={(e) => {
            console.log(e.target.value);
            setRole(e.target.value)
          }
          } />
          <div className='flex flex-wrap justify-center'>
            {employees.map((employee) => {
              const editEmployee = <EditEmployee
                name={employee.name}
                role={employee.role}
                id={employee.id}
                updateEmployee={updateEmployee}
              />

              return (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  editEmployee={editEmployee}
                />
              )
            })}
          </div>
          <AddEmployee newEmployee={newEmployee} />
        </>
        : <p>There are no emplopyees to show</p>}

    </div>
  );
}

export default App;
