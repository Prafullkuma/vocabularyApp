import React from 'react'
import ListVocabularyItem from './ListVocabularyItem'
import {GetData} from './Helper'

const ListVocabulary=({words})=>{   

      const data=GetData(words)

     return(
        <div>
            <ListVocabularyItem  data={data}/>
        </div>
    )
}
export default ListVocabulary