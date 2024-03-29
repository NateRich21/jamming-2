import React from 'react';

import './App.css';

import SearchResults from './Components/SearchResults/SearchResults';
import SearchBar  from './Components/SearchBar/SearchBar';
import Playlist from './Components/Playlist/Playlist';

class App extends React.Component {
  render() {
    return(
      <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults />
          <Playlist />
          </div>
        </div>
      </div>
    )
  }
};


export default App;
