import { useState } from 'react';
import './App.css';
import Employee from './Components/Employee';

function App() {
  const showEmployees = true;
  const [role, setRole] = useState('dev');
  return (
    <div className="App">
      {showEmployees ?
        <div>
          <input type="text" onChange={(e) => {
            console.log(e.target.value);
            setRole(e.target.value)
          }
          } />
          <Employee name="Caleb" role="intern" />
          <Employee name="Joseph" role="senior developer" />
          <Employee name="Samantha" role={role} />
        </div>
        : <p>There are no emplopyees to show</p>}

    </div>
  );
}

export default App;
