
import { useEffect, useState } from 'react'
import './App.css'
import Courses from './componant/Courses'
import Admition from './componant/Admition';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const totalCredits = 15

function App() {
  const [courses,setCourses] = useState([]);
  useEffect(()=>{
    fetch('courses.json')
    .then((respons) => respons.json())
    .then(data => setCourses(data))
  },[])
    
  const [cours,setCours] = useState([])
    


  

  const handelSelectItem = (item) => {
      const addCours = [...cours,item]
      const allReadyAccses = cours.find((c) => c.id == item.id)

      const credits = cours.reduce((p, c) => p + c.credit, 0);
      
      if (credits + item.credit > totalCredits)
      return toast.error(`only ${totalCredits} credits allowed`);

      if(allReadyAccses){
        toast.warn("Course already Selected");
      }else{
        toast.success(` Success To ${item.name}`);
        setCours(addCours)
      }
     
  }

  return (
    <>
     <div className='container mx-auto p-2 font-mono'>
      <h1 className=' text-4xl text-purple-400 text-center p-5 font-mono'>Register Form </h1>

    <div className=' md:flex gap-4'>
    <div className='grid  lg:grid-cols-3 gap-3 w-2/3'>
        {
          courses.map((cours,idx) => <Courses 
          key={idx}
          cours={cours}
          handelSelectItem={handelSelectItem}
          ></Courses>)
        }
    </div>

    <div className='bg-gray-400 w-1/3 text-black p-5 text-2xl rounded-xl'>
      <Admition cours={cours} ></Admition>
    </div>
    </div>
     </div>
     <ToastContainer />
    </>
  )
}

export default App
