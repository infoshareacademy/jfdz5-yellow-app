import React from 'react';
import './App.css';


import MainMenu from './MainMenu'
import SearchBar from './SearchBar'
import Footer from './Footer'


const App = () => (
    <div>
        <MainMenu/>
        <div>
            <SearchBar/>
            <h1>lista eventów</h1>
        </div>
        <Footer/>
    </div>
)

export default App;
