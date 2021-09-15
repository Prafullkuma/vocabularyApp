import React from 'react'
import {getOrigin,getSensesAndExample} from '../Helper'
import SensesAndExamples from './SensesAndExamples'

const PartOfSpeechAndOrigin=(props)=>{

    const result=getOrigin(props.origin)
    const senses=getSensesAndExample(props.origin)
    
    return(
        <div>
            <p>{props.speech}</p>  
             {Number(result) === 0 ? "" : 
                <p>Origin -{result}</p> 
             }
             <SensesAndExamples senses={senses}/>
        </div>
    )
}
export default PartOfSpeechAndOrigin