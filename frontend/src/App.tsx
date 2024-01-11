import {FC} from 'react'
import Header from './components/header/Header'
import './App.css'
import Template from './components/template/Template'
import MainBody from './components/mainBody/MainBody'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormHeader from './components/formPage/formHeader/FormHeader'
import CenteredTabs from './components/formPage/tabs/Tabs'
import QuestionForm from './components/formPage/questionForm/QuestionForm'


const App : FC = () => {
  return (
    <div className='app'>

    <Router>
       
       <Routes>

       <Route path='/' element={
            <>
              <Header />
              <Template />
              <MainBody />
              
            </>
          } />
          <Route path='/form/:id' element={
          <>
          <FormHeader />
          <CenteredTabs/>
          <QuestionForm/>
          </>
          
          
          
          } />
     
       </Routes>

    </Router>



    </div>
  )
}

export default App
