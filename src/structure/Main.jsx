import '../styles/main.css'
import RecipeCatalogue from "../components/RecipeCatalogue";
import SearchBar from '../components/SearchBar';
const Main = () => {
    return (
        <div id="main" className="main">
            <SearchBar/>
            <RecipeCatalogue />
        </div>
    );
};

export default Main; 