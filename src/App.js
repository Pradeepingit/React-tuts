import { useState } from 'react';
import './App.css';
import Employee from './components/Employee';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const showEmployees = true;
  const [role, setRole] = useState('dev');
  const [employees, setEmployees] = useState(
    [
      { name: "Caleb", role: "developer", img: "https://img.freepik.com/free-photo/cheerful-healthy-portrait-face-background_1187-6062.jpg" },
      { name: "Sal", role: "manager", img: "https://img.freepik.com/free-photo/happy-joyful-hipster-guy-posing_1262-21147.jpg" },
      { name: "June", role: "Director of Engg", img: "https://img.freepik.com/free-photo/smiling-brunette-woman-yellow-sweater-pointing-finger-up-happy-female-model-showing-advertisement-top-indicating-copy-space-standing-white-background_176420-53284.jpg" },
      { name: "Melanie", role: "Software Engineer", img: "https://img.freepik.com/free-photo/vertical-shot-happy-dark-skinned-female-with-curly-hair_273609-15519.jpg" },
      { name: "Corey", role: "The Devops Guy", img: "https://img.freepik.com/free-photo/beautiful-female-half-length-portrait-isolated-young-emotional-indian-woman-dress-standing-crossing-hands-negative-space-facial-expression-human-emotions-concept_155003-18237.jpg" },
      { name: "Melissa", role: "Senior", img: "https://img.freepik.com/free-photo/young-beautiful-woman-casual-clothes-looking-smiling-confident-with-arms-crossed_141793-128211.jpg" },
    ]
  )
  return (
    <div className="App">
      {showEmployees ?
        <div>
          <input type="text" onChange={(e) => {
            console.log(e.target.value);
            setRole(e.target.value)
          }
          } />
          <div className='flex flex-wrap justify-center'>
            {employees.map((employee) => {
              return (
                <Employee
                  key={uuidv4()}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                />
              )
            })}
          </div>
        </div>
        : <p>There are no emplopyees to show</p>}

    </div>
  );
}

export default App;
