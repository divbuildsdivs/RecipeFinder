import { useState } from 'react';
import SearchComponent from '../components/SearchComponent';
import '../styles/main.css'
import SearchTermContext from '../utils/SearchTermContext';
import { use } from 'react';
import SearchBar from '../components/SearchBar';

const Main = () => {
    const [searchDone, setSearchDone ] = useState(false);
    const [searchTerm, setSearchTerm] = useState([]);
    return( <div id="main" className="main">
       <SearchTermContext.Provider value = {{searchTerm, setSearchTerm}}>
                    <SearchBar setSearchDone = {setSearchDone} />
                    <SearchComponent/>
        </SearchTermContext.Provider>
    </div>);
    
};

export default Main; 