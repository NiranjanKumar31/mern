function Dashboard(){
    const location=useLocation();
    const[userdata,setuserdata]=usestate("");
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