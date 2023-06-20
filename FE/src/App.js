import './App.css';
import {useEffect, useState} from "react";



function App() {
    const [employees, setEmployees] = useState([]);
    const [newEmployee, setNewEmployee] = useState({
        name: "",
        wage: 0
    });
    useEffect(() => {
        fetch("http://localhost:8080/employees")
            .then(res => res.json())
            .then(data => setEmployees(data));
    },[])

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setNewEmployee({...newEmployee, [name]: value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch('http://localhost:8080/employees', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newEmployee)
        })
            .then(res => res.json())
            .then(data => {
                setEmployees([...employees, data]);
                setNewEmployee({ name: "", wage: 0 });
            })
            .catch(error => console.log(error));
    };
    return (
        <div>
            <h1>Employee Management</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={newEmployee.name}
                    onChange={handleInputChange}
                />
                <input
                    type="number"
                    name="wage"
                    placeholder="Wage"
                    value={newEmployee.wage}
                    onChange={handleInputChange}
                />
                <button type="submit">Create</button>
            </form>
            <ul>
                {employees.map(employee => (
                    <li key={employee.id}>{employee.name} - {employee.wage}</li>
                ))}
            </ul>
        </div>
    );
}
export default App;
