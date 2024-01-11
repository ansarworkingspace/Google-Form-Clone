import {FC,useState,useEffect} from 'react'
import './questionForm.css'
import CropOriginalIcon from '@mui/icons-material/CropOriginal'
import {
  Select,
  Switch,
  Checkbox,
  Radio,
  
  FormControlLabel,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  
} from '@mui/material';
import { BsTrash, BsFileText } from 'react-icons/bs';

import FilterNoneIcon from '@mui/icons-material/FilterNone'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo'
import CloseIcon from '@mui/icons-material/Close'
import {FcRightUp} from 'react-icons/fc'





const QuestionForm : FC = () => {


const [questions,setQuestions]=useState([

{questionText:"whitch is the capital of the karnadaka ?",
 questionType:"radio",
 options: [
  {optionText:"Bangaluru"},
  {optionText:"kochi"},
  {optionText:"kannur"},
  {optionText:"Goa"},
 ],
 open:true,
 required:true

}
])

function questionsUI(){
  return questions.map((ques,i)=>{
    <Accordion expanded={ques.open}>

      
    </Accordion>
  })
}







  return (
    <div>
         <div className="questionForm">
          <br></br>
          <div className="section">
            <div className="questionTitleSection">
              <div className="questionFormTop">
                    <input type="text" className='questionFormTopName' placeholder='UntitledDocument' style={{color:'balck'}}/>
                    <input type="text" placeholder='Form Description' className='questionFormTopNameDec' />
              </div>
            </div>

    {questionsUI()}

          </div>
         </div>
    </div>
  )
}

export default QuestionForm
