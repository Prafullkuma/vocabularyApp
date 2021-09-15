import React,{ useState } from 'react'
import { Button,
         TextField,
         Dialog,
         DialogActions ,
         DialogContent ,
         DialogContentText ,
         DialogTitle
        }from '@material-ui/core';

const AddVocabualaryForm=({forSubmission})=>{
    const [open, setOpen] = useState(false);
    const [word,setWord]=useState('')
    const [errorObj,setErrorObj]=useState({})
    let error={}

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleChange=(e)=>{
        const result=e.target.value
        setWord(result)
    }
    const runValidator=()=>{
        if(word.trim().length===0){
            error.word="Word is can't be blank"
        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault()

        runValidator()
        
        if(Object.keys(error).length===0){
             setErrorObj({})
                const formData={
                    word_id:word
                }
                forSubmission(formData)
                setWord('')
                
         }else{
             setErrorObj(error)
         }
    }
    return(
        <div>
            <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
                Open form dialog
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add Word</DialogTitle>
                <form onSubmit={handleSubmit}>

                    <DialogContent>
                    <DialogContentText>
                        Here you can add new words,This is built on the material ui and 
                        Oxferd API for developer
                    </DialogContentText>
                    
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        value={word}
                        onChange={handleChange}
                        label="Enter Word"
                        type="text"
                        fullWidth
                    />
                     <span>{errorObj.word && <span style={{color:'red'}}>{errorObj.word}</span>}</span>   
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose} color="secondary" variant="contained" >
                        Cancel
                    </Button>
                    <Button onClick={handleClose} type="submit" variant="contained" color="primary">
                        Add Word
                    </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    )
}
export default AddVocabualaryForm