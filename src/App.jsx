import './App.css'
import NavBar from './Components/NavBar/navbar'
import Article from './Components/Article/Article'
import SecondArticle from './Components/SecondArticle/SecondArticle'

function App(){
    return (
       <div className='HeartOfTheProject'>
           <NavBar />
           <Article />
           <SecondArticle />
       </div>
    )
}

export default App
