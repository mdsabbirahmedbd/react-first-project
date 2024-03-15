import PropTypes from 'prop-types';
import Item from './Item';
import { totalCredits } from './../App';

function Admition({cours}) {
    const credits = cours.reduce((p, c) => p + c.credit, 0);
    const price = cours.reduce((p, c) => p + c.price, 0);
    console.log(credits)
  return (
   <div className="space-y-5">
       <div className='border-2 border-purple-600 rounded-xl p-4'>
        <h1 className='font-bold'>Created Houre Remaing : {totalCredits - credits} </h1>
        <h1 className='font-bold'>All Course Hourse:{credits}</h1>
        <h1 className='font-bold'>All Course Price:{price}</h1>
      </div>

    <div className='space-y-3'>
        {
          cours.map((apply,idx)=> <Item  key={idx} apply={apply}></Item>)
        }

    </div>

   </div>
  )
}
Admition.propTypes = {
    cours:PropTypes.array
}

export default Admition
