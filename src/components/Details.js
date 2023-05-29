import { useLocation } from "react-router-dom";

function Details(){
    const {state} = useLocation();
    return(
        <>
            <h2>ID: {state.employeedetail.id}</h2>
            <h2>Name: {state.employeedetail.name}</h2>
            <h2>Age: {state.employeedetail.age}</h2>
        </>
    )
}
export default Details;