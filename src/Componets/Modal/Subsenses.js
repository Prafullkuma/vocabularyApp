import React from 'react'

const Subsenses=({subsenses})=>{
    
    return(
        <div>
              {subsenses.map((ele,i)=>{
                  return(
                      <div key={i}>
                          <h3>{ele.definitions}</h3>
                          {ele.examples !== undefined &&
                            <ul>
                                {ele.examples.map((le,i)=>{
                                    return <li key={i}> {le.text}</li>
                                })}    
                            </ul>
                           }
                      </div>
                  )
              })}  
        </div>  
    )
}
export default Subsenses