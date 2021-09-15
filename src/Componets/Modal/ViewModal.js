import React from 'react'

import { getSpeechAndOrigin } from '../Helper'

import PartOfSpeechAndOrigin from './PartOfSpeechAndOrigin'

const ViewModal=({_id,data})=>{

    const result=getSpeechAndOrigin(_id,data)

    
    return(
        <div>
            {
              result.map((ele,i)=>{
                return <PartOfSpeechAndOrigin key={i} {...ele}/>
              })
            }
      </div>
    )
}
export default ViewModal