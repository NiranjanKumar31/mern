import { useState } from "react";
import { useLocation } from "react-router-dom";
function Dashboard(){
    const location=useLocation();
    const[userdata,setuserdata]=useState("");
    function displaydata(){
        setuserdata(location.state);
        console.log(userdata)
    }
    return(
        
        <div>
            <button on onClick={displaydata}>button</button>
        </div>
        
    );
}
export default Dashboard;