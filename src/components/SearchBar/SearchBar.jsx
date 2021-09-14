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
            //Allow user to search by partial title
            let songString =song.title.toLowerCase()
            let userSongSearch = this.state.searchTerm.toLowerCase()
            if (songString.includes(userSongSearch)){
                return song
            }
            //allow user to search by partial artist name
            let songArtist = song.artist.toLowerCase()
            let userArtistSearch = this.state.searchTerm.toLowerCase()
            if (songArtist.includes(userArtistSearch)){
                return song
            }
            //allow user to search by partial album title
            let songAlbum = song.album.toLowerCase()
            let userAlbumSearch = this.state.searchTerm.toLowerCase()
            if (songAlbum.includes(userAlbumSearch)){
                return song
            }
            //Search by family of genres (ex. death metal, hair metal, heavy metal all can be found with metal)
            let songGenre = song.genre.toLowerCase()
            let userGenreSearch = this.state.searchTerm.toLowerCase()
            if (songGenre.includes(userGenreSearch)){
                return song
            }
            //Allow user to search for a release_date by any part of the date string
            let dateString = song.release_date
            let userSearch = this.state.searchTerm
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
            <div class = "center">
                <br/><br/>
                <form onSubmit = {this.handleSubmit}>
                    <table>
                        <tr>
                            <td><label><b>Search</b> by Any Column Header (title, artist, album, genre, release date)</label></td>
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