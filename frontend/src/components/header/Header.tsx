import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from '@mui/icons-material/Apps'; 
import Avatar from '@mui/material/Avatar';

const Header = () => {
  return (
    <div className='Header'>
      <div className="header_info">
      <IconButton aria-label="menu">
          <MenuIcon />
        </IconButton>
        <img
          src="https://www.gstatic.com/images/branding/product/1x/forms_2020q4_48dp.png"
          alt="Google Forms"
          
          style={{ width:"40px",height:"40px" }} // Add styling as needed
        />
        <div className='info'>
          Forms
        </div>
      </div>
      <div className="header_search">
      <IconButton aria-label="search">
          <SearchIcon />
        </IconButton>
        <input type="text" placeholder='Search' name='search' />
      </div>
      <div className="header_right">
       <IconButton aria-label="apps">
          <AppsIcon />
        </IconButton>
        <Avatar
          alt="Letter A"
          style={{ backgroundColor: '#1976D2', color: '#ffffff' }}
        >
          A
        </Avatar>
      </div>
    </div>
  )
}

export default Header
