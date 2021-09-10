import React, { Component } from 'react';
import '../App.css';

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
        this.props.addSong(this.state)
    }

    render() { 
        return (
            <div>                
                <h2>Add Song:</h2>
                <form onSubmit = {this.handleSubmit}>
                    <table class = "table2">
                            <tr>
                                <td>Title: </td><td><input type = "text" name = "title" value={this.state.title} onChange= {this.handleChange}/></td>
                            </tr>
                            <tr>
                                <td>Artist: </td><td><input type = "text" name = "artist" value={this.state.artist} onChange= {this.handleChange}/></td>
                            </tr>
                            <tr>
                                <td>Album: </td><td><input type = "text" name = "album" value={this.state.album} onChange= {this.handleChange}/></td>
                            </tr> 
                            <tr>
                                <td>Genre: </td><td><input type = "text" name = "genre" value={this.state.genre} onChange= {this.handleChange}/></td>
                            </tr>
                            <tr>
                                <td>Release Date: </td><td><input type = "datetime-local" name = "release_date" value={this.state.release_date} onChange= {this.handleChange}/></td>
                            </tr>                
                    </table>
                    <input type = "submit" value = "Add Song"/>
                </form>
            </div>









         );
    }
}
 
export default AddSong;