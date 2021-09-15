import React from 'react'
import ListVocabularyItemContent from'./Entries/ListVocabularyItemContent'

const ListVocabularyItem=({data})=>{

    const handleOpen=(_id)=>{
        console.log("ID",_id)
    }
    
    return(
        <div>
            {data.map((ele)=>{
                return (
                    <div key={ele._id} onClick={()=>handleOpen(ele._id)}> 
                        <h1 >{ele.name}</h1>
                             <ListVocabularyItemContent lexicalEntries={ele.lexicalEntries}/>   
                    </div>     
                  )
            })}
        </div>
    )
}
export default ListVocabularyItem