import React, { Component } from 'react';
import "../App.css";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            searchTerm: ""
         }
    }


    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let filteredResults = this.props.search.filter(song => {
            if (song.title.toLowerCase()===this.state.searchTerm.toLowerCase()){
                return song
            }
            if (song.artist.toLowerCase()===this.state.searchTerm.toLowerCase()){
                return song
            }
            if (song.album.toLowerCase()===this.state.searchTerm.toLowerCase()){
                return song
            }
            if (song.genre.toLowerCase()===this.state.searchTerm.toLowerCase()){
                return song
            }
            let dateString = song.release_date.toLowerCase()
            let userSearch = this.state.searchTerm.toLowerCase()
            if (dateString.includes(userSearch)){
                return song
            }
        });
        this.setState({
            searchTerm:""
        })
        this.props.filterTrigger(filteredResults)
    }

    render() { 
        return (
            <div>
                <h2> Search by: </h2>
                <form onSubmit = {this.handleSubmit}>
                    <table>
                        <tr>
                            <td><label>Search by Any Column Header (title, artist, album, genre, release date)</label></td>
                            <td><input title = "search" type = 'text' name = 'searchTerm' value = {this.state.searchTerm} onChange= {this.handleChange}/></td>
                            <td><input type = 'submit' value='Search'/></td>
                        </tr>
                    </table>    
                </form>
            </div>
        );
    }
}
export default SearchBar;