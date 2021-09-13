import React from 'react';

const MusicViewer  = (props) => {
    return (
        <div>
            <br/>
            <h2>Song Library: </h2>
        <table>
            <thead>
                <th>Title</th>
                <th>Artist</th>
                <th>Album</th>
                <th>Genre</th>
                <th>Release Date</th>
            </thead>
            <tbody>
            {props.songs.map((song) => {
                return(
                        <tr key = {song.id}>
                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                            <td>{song.album}</td>
                            <td>{song.genre}</td>
                            <td>{song.release_date}</td>
                            <td><button onClick = {()=> props.delete(song.id)}>Delete Song</button></td>
                        </tr>
                );
            })}
            </tbody>
        </table>
        </div>
    );
}
 
export default MusicViewer;