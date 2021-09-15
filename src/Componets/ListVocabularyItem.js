import React ,{useState} from 'react'
import ListVocabularyItemContent from'./Entries/ListVocabularyItemContent'
import ViewModal  from './Modal/ViewModal'

import {Dialog,
       DialogTitle,
       DialogContent,
       Button,
       DialogActions
} from '@material-ui/core'

const ListVocabularyItem=({data})=>{

    const [open, setOpen] = useState(false);
    const [basicDetails,setBasicDetails]=useState({})

    const handleClickOpen = (_id,word) => {
        setOpen(true);
        const detail={
            _id:_id,
            word:word
        }
        setBasicDetails(detail)
    };
    
    const handleClose = () => {
        setOpen(false);
    };
   
    return(
        <div>
            {data.map((ele)=>{
                return (
                    <div key={ele._id} onClick={()=>handleClickOpen(ele._id,ele.name)}> 
                        <h1 >{ele.name}</h1>
                             <ListVocabularyItemContent lexicalEntries={ele.lexicalEntries}/>   
                    </div>     
                  )
            })}

         <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                         {Object.keys(basicDetails).length !==0 && basicDetails.word.toUpperCase()}
                </DialogTitle>
                
                <DialogContent dividers>
                        <ViewModal _id={basicDetails._id} data={data} />
                </DialogContent>
                
                <DialogActions>
                   
                    <Button autoFocus variant="contained" onClick={handleClose} color="secondary">
                            Close
                    </Button>
            </DialogActions>
         </Dialog>
        </div>
    )
}
export default ListVocabularyItem