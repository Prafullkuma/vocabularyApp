
export const GetData=(words)=>{

        const result=words.map((ele)=>{
            return {_id:ele._id,name:ele.word,lexicalEntries:ele['results'][0].lexicalEntries}
        })    
     return result
}

export const getDefination=(entries)=>{
    const result=entries.map((ele)=>{
       return ele.senses.map((sence)=>{
           return sence
       })
    })
    const data=[].concat(...result)
    const foundDefination=data.map((ele)=>{
        return ele.definitions
    })
    return foundDefination
}

export const getSpeechAndOrigin=(_id,arr)=>{
    const result=arr.find((ele)=>{
        return ele._id===_id
    }).lexicalEntries.map((ele)=>{
        return ele
    }).map((ele)=>{
         return {origin:ele.entries,speech:ele.lexicalCategory.text}
    })
  return result
}   

export const getOrigin=(arr)=>{
    const result=arr.map((ele)=>{
        return ele.etymologies || 0
    })   
    const data=[].concat(...result)
    return data

}
export const getSensesAndExample=(arr)=>{
    const result=arr.map((ele)=>{
        return ele.senses.map((ele)=>{
            return { mainDefination:[
                        {
                            defination:ele.definitions,
                            example:ele.examples,
                            subsenses:ele.subsenses
                         }
                    ] 
                }
        })
    }) 

    const sensesData=[].concat(...result)
        return sensesData
}