import PropTypes from 'prop-types';
function Item({apply}) {
    const {name,price,credit} = apply
  return (
    <div>
      <div>
       <div className='border-2 p-4 space-y-5 bg-white rounded-xl'>
       <div>
          <h1>Course Name :{name} </h1>
         </div>
         <div>
          <h1>Total Credit Hours: {credit}</h1>
         </div>
         <div>
          <h1>Price : {price}</h1>
         </div>
       </div>
    </div>
    </div>
  )
}

Item.propTypes = {
    apply:PropTypes.object
}

export default Item
