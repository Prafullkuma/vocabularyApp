import React from 'react'
import  MainDefinationCom  from './MainDefinationCom'

const SensesAndExamples=({senses})=>{
    
    return(
        <div>
           {
               senses.map((ele,i)=>{
                   return(
                       <div key={i}>
                           <MainDefinationCom 
                                mainDefination={ele.mainDefination}/>
                       </div>
                   )
               })
           } 

        </div>
    )
}
export default SensesAndExamples