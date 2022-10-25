import {Link} from 'react-router-dom'
const Parkedvehicle=({vehicles,setVehicles,checkedOut,setCheckedOut})=>{
    const current = new Date()
   
    return(
        <>
        
        <div className="parked-body">
            <div style={{paddingLeft:'3vw',fontSize:'small',marginBottom:'2vh'}}>note: Clicking on brand name redirects you to home page.</div>
            <div style={{paddingLeft:'3vw',fontSize:'large'}}> Number of Vehicles parked:  {vehicles.length}<Link to={'/checkedoutvehicles'} style={{textDecoration:'none',color:'#ee6c4d',cursor:'pointer',marginLeft:'60vw',backgroundColor:'#98c1d9',padding:'0.5vh 0.5vw',border:'0.1vh solid black',borderRadius:'0.8vh',width:'fit-content'}}>Checked out vehicles</Link></div>
            {vehicles.map((vehicle)=>{
                const checked ={
                    vehicleNumber:vehicle.vehicleNumber,
                    vehicleType:vehicle.vehicleType,
                    checkInTime:vehicle.checkInTime,
                    checkOutTime:current.toLocaleTimeString(),
                    id:vehicle.id
                    }
                return(
            <ul key={vehicle.id} style={{display:'flex',backgroundColor:'#98c1d9',width:'55vw',padding:'3vh 3vw',justifyContent:'center',alignItems:'center',borderRadius:'2vh',marginLeft:'4vh'}}>
                <div style={{textTransform:'uppercase'}}>
                    <div>vehicle number:  {vehicle.vehicleNumber}</div>
                    <div>vehicle type:  {vehicle.vehicleType}</div>
                </div>
                <div style={{display:'flex',flexDirection:'column',marginLeft:'2vh',marginRight:'2vh'}}>check in time: {vehicle.checkInTime}</div>
                <button type="button" className="btn btn-secondary"onClick={()=>{return(setCheckedOut([...checkedOut,checked]),setVehicles(vehicles.filter(cars=>cars.id!==vehicle.id)),console.log(checkedOut))}} style={{marginReft:'2vw'}}>Mark as checked out</button>

            </ul>)})}
        </div>
        </>
    )
}
export default Parkedvehicle;