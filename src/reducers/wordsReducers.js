import {ALL_WORDS} from '../Actions/wordsAction'

const initialState=[]

const wordsReducers=(state=initialState,actions)=>{

    switch(actions.type){
         case ALL_WORDS:{
             return actions.payload
         }default:{
            return  state
         }
     }
}

export default wordsReducers
