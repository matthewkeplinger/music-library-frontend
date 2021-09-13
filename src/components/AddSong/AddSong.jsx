import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';

class AddSong extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            artist:'',
            album:'',
            genre:'',
            release_date:''
          }
    }

    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.addSong(this.state)
    }
    //Add a song to DB
    async addSong(){
        const song = {
            title: this.state.title,
            artist: this.state.artist,
            album: this.state.album,
            release_date: this.state.release_date,
            genre: this.state.genre,
            likes: 0
        }
        try{
            let response = await axios.post('http://127.0.0.1:8000/music/', song);
            console.log(response)
            window.location.reload();
        }
        catch{
            console.log("Unsuccessful Attempt to Add Song");
        }
    }
    render() { 
        return (
            <div>                
                <h2>Add Song:</h2>
                <form onSubmit = {this.handleSubmit}>
                    <table>
                            <thead>
                                <th>Title</th>
                                <th>Artist</th>
                                <th>Album</th>
                                <th>Genre</th>
                                <th>Release Date</th>
                            </thead>
                            <tr>
                                <td><input type = "text" name = "title" value={this.state.title} onChange= {this.handleChange}/></td>                          
                                <td><input type = "text" name = "artist" value={this.state.artist} onChange= {this.handleChange}/></td>                         
                                <td><input type = "text" name = "album" value={this.state.album} onChange= {this.handleChange}/></td>                          
                                <td><input type = "text" name = "genre" value={this.state.genre} onChange= {this.handleChange}/></td>                  
                                <td><input type = "date" name = "release_date" min = '1750-01-01' max='2021-09-21' value={this.state.release_date} onChange= {this.handleChange}/></td>
                                <td><input type = "submit" value = "Add Song"/></td>
                            </tr>                
                    </table>
                   
                </form>
            </div>
         );
    }
}
 
export default AddSong;