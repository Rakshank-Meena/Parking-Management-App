import {Link} from 'react-router-dom'
const Navbar=()=>{
    return(
        <>
        <div className="Navbar"><Link to={'/'} style={{color:'inherit',textDecoration:'inherit',width:'fit-content'}}>Parking Manager</Link><Link style={{textDecoration:'none'}} to={'/parkedvehicles'}><div style={{marginLeft:'29vw',fontSize:'medium'}} >Parked Vehicles</div></Link></div>

        </>
    )
}
export default Navbar;