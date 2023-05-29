import { useNavigate, useParams } from "react-router-dom";

function Employee(){
    const navigate = useNavigate();
    const employeesList = [
        {
            id: 1,
            name: "Hoa",
            age: 20
        },
        {
            id: 2,
            name: "Khánh",
            age: 25
        },
        {
            id: 3,
            name: "Tú",
            age: 22
        },
    ]
    function detail(item){
        navigate("/details",{ state: { employeedetail : item } });
    }
    return(
        <>
            <table>
                <tr>
                    <th>Employees List</th>
                </tr>
            
                {employeesList.map((item,index)=>
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td><button onClick={()=>detail(item)}>Details</button></td>
                    </tr>
                )}
               
              
            </table>
        </>
    )
}
export  default Employee;