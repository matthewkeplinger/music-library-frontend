import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import MusicViewer from './MusicViewer/MusicViewer';
import AddSong from './AddSong/AddSong';
import SearchBar from './SearchBar/SearchBar';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            songs : []
        }
    }

    componentDidMount(){
        this.getSongs();
    }
    //Get Songs from API (MySQL backend)
    async getSongs(){
        let response = await axios.get('http://127.0.0.1:8000/music/');
        console.log(response);
        this.setState({
            songs: response.data
        });
    }

    //Delete a song from the DB
    async deleteSong(ID){
        let response = await axios.delete(`http://127.0.0.1:8000/music/${ID}/`);
        console.log(response)
        window.location.reload();
    }

    filterSongs = (arrayOfSongs) => {
        console.log(arrayOfSongs)
        this.setState({
            songs: arrayOfSongs
        })
    }

    render() { 
        return (
            <div class = 'center'>
                <h1>React Music Library</h1>
                <SearchBar search={this.state.songs} filterTrigger= {this.filterSongs}/>        
                <MusicViewer songs = {this.state.songs} delete = {this.deleteSong} />
                <AddSong />
            </div>
         );
    }
}
 
export default App ;