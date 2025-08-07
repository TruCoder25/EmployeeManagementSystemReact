
import React from 'react'
import AcceptTask from '../TaskList/AcceptTask'
import NewTask from '../TaskList/NewTask'
import CompleteTask from '../TaskList/CompleteTask'
import FailedTask from '../TaskList/FailedTask'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='h-[55%] w-full py-5 overflow-x-auto flex items-center justify-start gap-5 flex-nowrap mt-10'>
          {data.tasks.map((elem)=>{
                if(elem.active)
                {
                    return <AcceptTask data={elem}/>
                }
                if(elem.newTask){
                    return <NewTask data={elem}/>
                }
                    
                if(elem.completed)
                {
                    return <CompleteTask data={elem}/>
                }
                if(elem.failed)
                {
                    return <FailedTask data={elem}/>
                }

          })}
      
         {/* <div className=' flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl p-5'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600  text-sm px-3 py-1 rounded '>
                    High
                </h3>
                <h4 className='text-sm'>
                    20 Feb 2024
                </h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube Video</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nam dolore magnam aspernatur delectus, atque nemo vitae? Aspernatur, dolores molestias!</p>
        </div> */}
      
    </div>
  )
}

export default TaskList