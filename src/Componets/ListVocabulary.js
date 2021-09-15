import React from 'react'
import ListVocabularyItem from './ListVocabularyItem'
import {GetData} from './Helper'

const ListVocabulary=({words})=>{   

      const data=GetData(words)

     return(
        <div>
            <h1>ListVocabulary</h1>
            <ListVocabularyItem  data={data}/>
        </div>
    )
}
export default ListVocabulary