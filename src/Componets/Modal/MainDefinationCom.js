import React from 'react'
import Subsenses from './Subsenses'

const MainDefinationCom=({mainDefination})=>{
    return(
        <div>
           {
               mainDefination.map((ele,i)=>{
                 return (
                     <div key={i}>
                        <h3>{ele.defination} </h3>
                            
                        {ele.example !==undefined
                         &&
                          <ul>
                              {ele.example.map((el,i)=>{
                                  return <li key={i}>{el.text}</li>
                              })}
                         </ul>
                         }
                         {ele.subsenses !== undefined &&
                             <Subsenses subsenses={ele.subsenses}/>   
                         }   
                     </div> 
                    )    
               })
           } 

        </div>
    )
}
export default MainDefinationCom