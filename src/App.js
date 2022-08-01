import{useState} from "react";
import './App.css';

export default function App() {
    const[name,setName]= useState("");
    const[id,setId]=useState("");
    const[role,setRole]=useState("");
    const[employee,setEmployee]= useState([{id:1,name:"Priya",role:"Developer"}]);
        const AddEmployee =()=>{
        setEmployee([...employee,{id:id,name:name,role:role}])
        setName("");
        setId("");
        setRole("");

    }
    const DeleteAll=()=>{
        setEmployee([]);

    }
    const deleteIndividual =(id) =>{
        const newEmp = employee.filter(e=>e.id !== id);
        setEmployee(newEmp)

    }
    return(
         <div className="App">
         <h1>Employee Management</h1>
        <div className="form">
        <input
        required
        type="number"
        placeholder="Enter ID.."
        style={{padding:"3%",margin:"5%"}}
        value={id}
        onChange={e=>setId(e.target.value)}
         />

        <input required type="text" placeholder="Enter name"
         style={{padding:"3%",margin:"5%"}}
        value={name}
        onChange={e=> setName(e.target.value)}/>

        <input required type="text" placeholder="role"
         style={{padding:"3%",margin:"5%"}}
        value={role}        
        onChange={e=>setRole(e.target.value)}/>

        <button style={{padding:"1%",margin:"3%"}} onClick={AddEmployee}>Add</button>

        <button style={{padding:"1%",margin:"3%"}}onClick={DeleteAll}>Delete ALL</button>
        </div>

        <div className="result">


        {employee.map((emp, i) => {
        return(
            <div className="" key={i}>


<table>
                    <tr>
                        <td>{emp.id}</td>
                        <td>{emp.name} </td>
                        <td>{emp.role}</td>

                        <td>
                        <button className="delete" onClick={() =>{deleteIndividual(emp.id) }}>delete</button>
                        </td>

                    </tr>
                    </table>
 
            </div>
        ) 

        })}
 
        </div>

        </div>


    );

}

