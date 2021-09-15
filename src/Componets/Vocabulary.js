import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {getAllWords} from '../Actions/wordsAction'
import ListVocabulary from './ListVocabulary'

import AddVocabulary from './AddVocabulary.js'
import { Input,Paper, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

  
const Vocabulary=()=>{
    const [mainWord,setMainWords]=useState([])
    const [searchTerm,setSearchTerm]=useState('')
    const classes = useStyles();
    const dispatch=useDispatch() 
    
    useEffect(()=>{
       dispatch(getAllWords())
    },[dispatch])

    const { words }=useSelector((state)=>{
        return state
    })
    
    useEffect(()=>{
         if(typeof words !==undefined){ 
            setMainWords([...words])
         }
         
    },[words])

    const handleSearchTerm=(e)=>{
        const query=e.target.value
        setSearchTerm(query)
        searchValues(query) 
    }

    const searchValues=(query)=>{
       const result=words.filter((ele)=>{
            return ele.id.toLowerCase().includes(query.toLowerCase())
       })
       setMainWords(result)
    }

    return(
         <div style={{margin:'20px'}}>
            <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper}>
                        
                            <AddVocabulary  mainWord={mainWord} />  
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper}>
                            <Input 
                            type="text"
                            placeholder="Enter Search term"
                            value={searchTerm}
                            onChange={handleSearchTerm}
                            />  
                            </Paper>
                     </Grid>
            </Grid>

            {mainWord.length===0 ?
                   <p>...loading </p>
                    :<ListVocabulary words={mainWord} />
             }     
         </div>
     )
}
export default Vocabulary