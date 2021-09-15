
export const GetData=(words)=>{

        const result=words.map((ele)=>{
            return {_id:ele._id,name:ele.word,lexicalEntries:ele['results'][0].lexicalEntries}
        })    
        console.log("Words",result)
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