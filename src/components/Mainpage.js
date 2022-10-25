const { useState } = require("react")




const Mainpage=({vehicles,setVehicles})=>{
    var current=new Date()
    
    
    const[vehicleDetails,setVehicalDetails]=useState({
        vehicleNumber:'',
        vehicleType:'',
        checkInTime:'',
        checkOutTime:'',
        id:''
    })

    const register=(detail)=>{
        const value = detail.target.value
        const name = detail.target.name
        setVehicalDetails((prevState)=>{
            switch (name) {
                case 'vNumber':
                    return { vehicleNumber:value,
                    vehicleType:prevState.vehicleType,
                    checkInTime:current.toLocaleTimeString(),
                    checkOutTime:prevState.checkOutTime,
                    id:value
                }
                case 'vType':
                    return { vehicleNumber:prevState.vehicleNumber,
                    vehicleType:value,
                    checkInTime:current.toLocaleTimeString(),
                    checkOutTime:prevState.checkOutTime,
                    id:prevState.id
                }
               
                default:
                    return { vehicleNumber:prevState.vehicleNumber,
                    vehicleType:prevState.vehicleType,
                    checkInTime:prevState.checkInTime,
                    checkOutTime:prevState.checkOutTime,
                    id:prevState.id
                }
             }
        })
    }
    const submit=()=>{
        if(vehicleDetails.vehicleNumber===''){alert('please enter a vehicle number')}
        else if(vehicleDetails.vehicleType===''){alert('please enter a vehicle type')}
        else{const alreadyParked=vehicles.findIndex((vehicle)=>{return vehicle.id === vehicleDetails.id })
        if (alreadyParked !== -1) {
            alert(`${vehicleDetails.vehicleNumber} is already parked`)
        } else {
            setVehicles([...vehicles,vehicleDetails])
            
        }}
       
        
        
    }
 

    return(<>
    <div className="mainpage">
        <div className="car-entry-form">
            <div style={{display:'flex',flexDirection:'row',marginLeft:"11vw",fontWeight:"bold"}}><div>Parking Entry Register</div><div style={{fontSize:'small',marginTop:"1vh",marginLeft:'3vw'}}>Date:{current.toLocaleDateString()}</div></div>
            <ul>
            <div>Vehicle Number:<input style={{marginTop:'5vh',fontSize:'medium',textAlign:"center",width:'18vw',backgroundColor:'#d9d9d9ac',border:'none',textTransform:'uppercase'}} placeholder='please enter vehicle number here' type='text' name="vNumber" value={vehicleDetails.vNumber} onChange={register}/></div>
            {/* <input placeholder='please enter the type of vehicle here' type='text' name="vType" value={vehicleDetails.vType} onChange={register} /> */}
            <div style={{marginTop:'1vh'}}>Vehicle Type:<select name="vType" style={{display:'inline',width:'18vw',marginLeft:'2.5vw',backgroundColor:'#d9d9d9ac'}}  value={vehicleDetails.vType} onChange={register} className="form-select" >
                <option defaultValue={''}>please select a vehicle type</option>
                <option value="4 wheeler">4 wheeler</option>
                <option value="2 wheeler">2 wheeler</option>
                <option value="3 wheeler">3 wheeler</option>
                
            </select></div></ul>
            <button onClick={submit} type="button" className="btn btn-dark">Submit</button>
            
        </div>
    </div>
    </>)
};
export default Mainpage;