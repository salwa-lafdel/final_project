import { useGlobalContext } from "../context";
import { BsBookmarkHeart } from 'react-icons/bs';

const FavoriteIndicator = () => {
    const {favorites, toggleShowFavorite} = useGlobalContext();
    return (
        <div className="header-favorite fixed-top">
            <h1 className="header-logo" >Restaurant_Finder</h1>
            
            <div className="indicator-container">
                
                <BsBookmarkHeart className="favorite-indicator" onClick={toggleShowFavorite}/>
                <div className="favorites-num">
                    {favorites.length}
                </div>
            </div>
            
        </div>
        
    )
    
}

export default FavoriteIndicator;