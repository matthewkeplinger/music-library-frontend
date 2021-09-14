import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Header from './Header/Header';
import MusicViewer from './MusicViewer/MusicViewer';
import AddSong from './AddSong/AddSong';
import SearchBar from './SearchBar/SearchBar';
import Footer from './Footer/Footer';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            songs : [],
            filteredSongs : []
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
            songs: response.data,
            filteredSongs: response.data
        });
    }

    //Delete a song from the DB
    async deleteSong(ID){
        let response = await axios.delete(`http://127.0.0.1:8000/music/${ID}/`);
        console.log(response)
        window.location.reload();
    }

    filterSong2 = (searchTerm) =>{
        if(searchTerm == ''){
            this.setState({
                filteredSongs : this.state.songs
            })
        }
        else{
            let filteredResults = this.state.songs.filter(song => {
                //Allow user to search by partial title
                let songString =song.title.toLowerCase()
                let userSongSearch = searchTerm.toLowerCase()
                if (songString.includes(userSongSearch)){
                    return song
                }
                //allow user to search by partial artist name
                let songArtist = song.artist.toLowerCase()
                let userArtistSearch = searchTerm.toLowerCase()
                if (songArtist.includes(userArtistSearch)){
                    return song
                }
                //allow user to search by partial album title
                let songAlbum = song.album.toLowerCase()
                let userAlbumSearch = searchTerm.toLowerCase()
                if (songAlbum.includes(userAlbumSearch)){
                    return song
                }
                //Search by family of genres (ex. death metal, hair metal, heavy metal all can be found with metal)
                let songGenre = song.genre.toLowerCase()
                let userGenreSearch = searchTerm.toLowerCase()
                if (songGenre.includes(userGenreSearch)){
                    return song
                }
                //Allow user to search for a release_date by any part of the date string
                let dateString = song.release_date
                let userSearch = searchTerm.toLowerCase()
                if (dateString.includes(userSearch)){
                    return song
                }
            });
            this.setState({
                filteredSongs : filteredResults
            })
        }
      
    }
    filterSongs = (arrayOfSongs) => {
        console.log(arrayOfSongs)
        this.setState({
            songs: arrayOfSongs
        })
    }

    render() { 
        return (
            <div className = "center">
                <Header />
                <SearchBar newFilter={this.filterSong2} search={this.state.songs} filterTrigger= {this.filterSongs}/>        
                <MusicViewer songs = {this.state.filteredSongs} delete = {this.deleteSong} />
                <AddSong />
                <Footer />
            </div>
         );
    }
}
 
export default App ;