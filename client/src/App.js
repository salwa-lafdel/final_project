
import './App.css';
import Favorites from './components/Favorites';
import Meals from './components/Meals';
import Modal from './components/Modal';
import Search from './components/Search';
import { useGlobalContext } from './context';
import FavoriteIndicator from './components/FavoriteIndicator';
import Hero from './components/Hero';
import Authentification from './components/Authentifiacation';
import { useCookies } from 'react-cookie'







function App() {

  const { showModal, favorites, showFavorite } = useGlobalContext();
  const [cookies, setCookie, removeCookie] = useCookies(null)
  const authToken = cookies.AuthToken

  const signOut = () => {
    console.log('signout')
    removeCookie('Email')
    removeCookie('AuthToken')
    window.location.reload()

  }
  
  
  return (
    <div>
      <div  >
      {!authToken && <Authentification/>}
      </div>
    
      {authToken &&  

    
      
      <main>
      <header>
      
        <FavoriteIndicator />
        <Search />
        <button className="btn btn-hipster" id='signout' onClick={signOut}>SIGN OUT</button>
        {(showFavorite && favorites.length >= 1)&& <Favorites />}
      </header>
      
      <Hero />
      
      <Meals />
      { showModal && <Modal /> }

        
    </main>}
    </div>
    
  );
}

export default App;