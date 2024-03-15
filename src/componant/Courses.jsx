import { CiDollar } from "react-icons/ci";
import { FaBookOpen } from "react-icons/fa";
import PropTypes from 'prop-types';
function Courses({cours,handelSelectItem}) {
    const {name,description,photo,price,credit} = cours
  return (
    <div className="card shadow-xl">
  <figure><img className="w-full" src={photo} alt="Shoes" /></figure>
  <div className=" p-4 space-y-3">
    <h2 className="card-title   lg:text-2xl text-white">{name}</h2>
    <p>{description}</p>
    <div className="flex items-center space-x-2 text-xs   text-purple-600">
         <span><CiDollar/></span>
         <span>Price:{price}</span>
        <span><FaBookOpen /></span>
         <span>credit:{credit} dev </span>
    </div>
    <div className="card-actions justify-center">
      <button onClick={()=>handelSelectItem(cours)} className="btn text-xl btn-primary">Select</button>
    </div>
  </div>
 </div>
  )
}

Courses.propTypes = {
    cours:PropTypes.object,
    handelSelectItem:PropTypes.func
}

export default Courses
