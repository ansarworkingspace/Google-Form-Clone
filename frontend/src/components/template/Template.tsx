import  { FC } from 'react'
import './Template.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import uuid from 'react-uuid'
import { useNavigate,NavigateFunction } from 'react-router-dom';

const Template: FC = () => {

    const navigate:NavigateFunction = useNavigate()

    const createForm = (): void => {
        const id_: string = uuid();
        navigate(`/form/${id_}`)
    };


  return (
    <div className='template_section'>
        <div className="template_top">

            <div className="template_left">
                   <span>Start new form</span>
            </div>
            <div className="template_right">
                <div className="galleryButton"></div>
                          Template gallery
                          <UnfoldMoreIcon fontSize='small'/>
                          <IconButton>
                            <MoreVertIcon  fontSize='small'/>
                          </IconButton>
            
            </div>

        </div>
        <div className="template_body">
            <div className="card" onClick={createForm}>
                <img className='card_image' src="https://ssl.gstatic.com/docs/templates/thumbnails/forms-blank-googlecolors.png" alt="" />
                <p className="card_title">Blank</p>
            </div>

            <div className="card">
                <img className='card_image' src="https://ssl.gstatic.com/docs/templates/thumbnails/1xQF3s6EP0d58H-XJ7R440OpREKo4KqEapa0mkw43RPE_400_1.png" alt="" />
                <p className="card_title">Contact Informations</p>
            </div>

            <div className="card">
                <img className='card_image' src="https://ssl.gstatic.com/docs/templates/thumbnails/1m0UYQl1LSGxl3sGsh9_xjim4hUYQ8BO_zbvcFXv1Qug_400_1.png" alt="" />
                <p className="card_title">Party Invite</p>
            </div>
        </div>
      
    </div>
  )
}

export default Template
