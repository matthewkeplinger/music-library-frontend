import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import MusicViewer from './MusicViewer/MusicViewer';

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


    render() { 
        return (
            <div class = 'center'>
                <h1>Music Library</h1>
                <MusicViewer songs = {this.state.songs} delete = {this.deleteSong} />
            </div>
         );
    }
}
 
export default App ;