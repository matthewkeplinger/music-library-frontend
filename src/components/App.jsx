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

    async getSongs(){
        let response = await axios.get('http://127.0.0.1:8000/music/');
        console.log(response);
        this.setState({
            songs: response.data
        });
    }

    render() { 
        return (
            <div class = 'center'>
                <h1>Music Library</h1>
                <MusicViewer songs = {this.state.songs} />
            </div>
         );
    }
}
 
export default App ;