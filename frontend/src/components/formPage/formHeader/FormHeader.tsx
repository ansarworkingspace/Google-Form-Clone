import {FC} from 'react'
import './formHeader.css'
import {FiStar,FiSettings}  from 'react-icons/fi'
import {AiOutlineEye}  from 'react-icons/ai'
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {IoMdFolderOpen}  from 'react-icons/io'
import Button from '@mui/material/Button';
import ColorLensIcon from '@mui/icons-material/ColorLens';


const FormHeader : FC = () => {
  return (
    <div className='formHeader'>
        <div className="formHeaderLeft">
            <img src="https://www.gstatic.com/images/branding/product/1x/forms_2020q4_48dp.png" alt="" />
            <input type="text" placeholder='Untitled Form' className='formName'/>
            <IoMdFolderOpen className="formHeaderIcon"></IoMdFolderOpen>
            <FiStar  className="formHeaderIcon"/>
            <span>All changes saved in drive</span>
        </div>

        <div className="fromHeaderRight">
            <IconButton>
              <ColorLensIcon fontSize='small' className='formHeaderIcon'/>
            </IconButton>

             <IconButton>
                 <AiOutlineEye className='formHeaderIcon'/>
            </IconButton>

            <IconButton>
              < FiSettings className='formHeaderIcon'/>
           </IconButton>

           <Button variant='contained' color='primary' href='#contained-Button'>Send</Button>


           <IconButton>
              <MoreVertIcon className='formHeaderIcon'/>
            </IconButton>

            <IconButton>
              <Avatar
                alt="Letter A"
                style={{ width:"30px",height:"30px", backgroundColor: '#1976D2', color: '#ffffff' }}
                 >
                 A
                </Avatar>
            </IconButton>
        </div>
      
    </div>
  )
}

export default FormHeader
