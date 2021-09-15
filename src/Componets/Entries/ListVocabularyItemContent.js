import React from 'react'
import {getDefination } from '../Helper'

const ListVocabularyItemContent=({lexicalEntries})=>{
      
    return(
        <div>
           {lexicalEntries.map((ele,i)=>{
               return(
                   <div key={i}>
                       <p>({ele.lexicalCategory.text}) 
                           {getDefination(ele.entries)}    
                      </p>  
                  </div>
               )
           })} 
           <hr/>
        </div>
    )
}
export default ListVocabularyItemContent