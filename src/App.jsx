import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import AdmissionsPage from './pages/AdmissionPage';
import HomePage from './pages/Homepage';
import ChatbotComponent from './components/Chatbot/ChatbotComponent';
import ContactPage from './pages/ContactPage';
const App = () => {

  return (
  <div>
   < BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path='/courses' element={<CoursesPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/Admission' element={<AdmissionsPage/>}/>
      </Routes>
      <ChatbotComponent/>
       
    </BrowserRouter>
  </div>
)
}

export default App;