import React from 'react';

const MusicViewer  = (props) => {
    return (
        <div className = "center">
            <br/><br/>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Genre</th>
                        <th>Release Date</th>
                    </tr>
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