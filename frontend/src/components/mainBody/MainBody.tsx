import React from 'react'
import './mainBody.css'
import IconButton from '@mui/material/IconButton';
import StorageIcon from '@mui/icons-material/Storage';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const MainBody = () => {
  return (
    <div className='main_body'>
      <div className="mainBody_top">
          <div className="mainBody_top_left">
            Recent Forms
          </div>
          <div className="mainBody_top_right">
               <div className="main_top_center">Owned by anyone<ArrowDropDownIcon/></div>

               <IconButton aria-label="storage">
            <StorageIcon style={{fontSize:"16px",color:"black"}}/>
          </IconButton>

          <IconButton aria-label="folder-open">
            <FolderOpenIcon style={{fontSize:"16px",color:"black"}}/>
          </IconButton>

           
          </div>
      </div>
      <div className="mainBody_docs">
        <div className="doc_card">
            <img className='doc_img' src="https://ssl.gstatic.com/docs/templates/thumbnails/134dbGrMBrHFEfdPk5UpsZWEBZb7xJrOKRdESE58Fvcg_400_1.png" alt="" />
            <div className="doc_card_content">
                
                <div className="doc_content">
                    <div className="content_left">
                          <StorageIcon className='storageIconInDoc' style={{fontSize:"1rem"}} />
                    </div>
                    <h5>Opened 10 Jan</h5>
                    <MoreVertIcon className='morvertIconInDoc'/>
                </div>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default MainBody
