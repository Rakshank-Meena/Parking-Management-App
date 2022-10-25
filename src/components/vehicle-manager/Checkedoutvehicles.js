const Checkedoutvehicles=({checkedOut,setCheckedOut})=>{return(
    <>
    <div className="parked-body" style={{paddingTop:'3vh'}}>
    {checkedOut.map(vehicle=>{return(
        
         <ul key={vehicle.vehicleNumber} style={{display:'flex',backgroundColor:'#98c1d9',width:'55vw',padding:'3vh 3vw',justifyContent:'center',alignItems:'center',borderRadius:'2vh',marginLeft:'4vh'}}>
            <div style={{textTransform:'uppercase'}}>
             <div>vehicle number:{vehicle.vehicleNumber}</div>
              <div>vehicle type:{vehicle.vehicleType}</div>
            </div>
            <div style={{display:'flex',flexDirection:'column',marginLeft:'2vh',marginRight:'2vh'}}>check in time: {vehicle.checkInTime}<br/>
            check out time:{vehicle.checkOutTime}
            </div>
            
            <button type="button" className="btn btn-secondary"onClick={()=>{return(setCheckedOut(checkedOut.filter(cars=>cars.id!==vehicle.id)))}} style={{marginRight:'2vw'}}>Remove Item</button>

        </ul>
        
    )})}
    </div>
    </>
)}
export default Checkedoutvehicles;