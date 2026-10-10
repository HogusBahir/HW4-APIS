// *********************************************************************
// Homework 4 APIs
// *********************************************************************

function convertMsToMinSec(ms) {
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  const paddedSeconds = String(seconds).padStart(2, '0');
  return `${minutes}:${paddedSeconds}`;
}

// **************** Update code below  **************** 


// IDs and secret token should come from Spotify
localStorage.setItem("artist_id", "0TnOYISbd1XYRBk9myaseg");
localStorage.setItem("access_token", "BQCgKKR1m2pwDjUIMPYdmz3usm850AyymzUd4ySZdECyDBWEcdFx5wg_s-paMdN5LmnnxNHSfwgYHzKZ7limK4Lcgv2ukmon92wb98jm_lcFh22D_8bbAAS3mQkuutixA8d8D71Y7YpU");
localStorage.setItem("track_id_1", "4Y7XAxTANhu3lmnLAzhWJW");
localStorage.setItem("track_id_2", "2bJvI42r8EF3wxjOuDav4r");
localStorage.setItem("track_id_3", "3hm9Df6fGtYVPicuJulXyN");

localStorage.setItem("album_id_1", "4EUf4YyNjuXypWY6W5wEDm");
localStorage.setItem("album_id_2", "2F7tejLHzTqFq2XLol9ZGy");
localStorage.setItem("album_id_3", "4rG0MhkU6UojACJxkMHIXB");
localStorage.setItem("album_id_4", "4Lkkfpt8ZkDmw4viHHi0IM");

//Changed function to an async

function load(){
    
    let artistID = localStorage.getItem("artist_id");
    let accessToken = localStorage.getItem("access_token");
    let trackID1 = localStorage.getItem("track_id_1");
    let trackID2 = localStorage.getItem("track_id_2");
    let trackID3 = localStorage.getItem("track_id_3");

    let albumID1 = localStorage.getItem("album_id_1");
    let albumID2 = localStorage.getItem("album_id_2");
    let albumID3 = localStorage.getItem("album_id_3");
    let albumID4 = localStorage.getItem("album_id_4");
    

  //Repeat for all other Items

   /*
    Change the Artist's name and image //DONE
    In the popular section, change each 3 tracks's
        album artwork
        title
        album name
        track number and duration
    In discography, change each 4 albums's
        artwork
        name
        release date (USING CONVERMSTOMINSEC FUNCTION)
        album type
   */
(async ()=>{
 const response = await fetch( 
    `https://api.spotify.com/v1/artists/${artistID}`, 
    { 
        headers: { 
            Authorization: `Bearer ${accessToken}` 
        } 
    } 
); 

const artist = await response.json();

document.querySelector('#artist-name').textContent = artist.name;
document.querySelector('.artist-image img').src = artist.images[0].url;

})();

//Declaring here tracks in order to grab all classes with the same name
const tracks = document.querySelectorAll('.track');

(async ()=>{
 const response = await fetch( 
    `https://api.spotify.com/v1/tracks/${trackID1}`, 
    { 
        headers: { 
            Authorization: `Bearer ${accessToken}` 
        } 
    } 
); 

const track1 = await response.json();

tracks[0].querySelector('img').src = track1.album.images[0].url;
tracks[0].querySelector('.track-title').textContent = track1.name;
tracks[0].querySelector('.track-album').textContent = track1.album.name;
tracks[0].querySelector('.track-number').textContent = track1.track_number;
tracks[0].querySelector('.track-duration').textContent = convertMsToMinSec(track1.duration_ms);
})();

(async ()=>{
 const response = await fetch( 
    `https://api.spotify.com/v1/tracks/${trackID2}`, 
    { 
        headers: { 
            Authorization: `Bearer ${accessToken}` 
        } 
    } 
); 

const track2 = await response.json();


tracks[1].querySelector('img').src = track2.album.images[0].url;
tracks[1].querySelector('.track-title').textContent = track2.name;
tracks[1].querySelector('.track-album').textContent = track2.album.name;
tracks[1].querySelector('.track-number').textContent = track2.track_number;
tracks[1].querySelector('.track-duration').textContent = convertMsToMinSec(track2.duration_ms);
})();

(async ()=>{
 const response = await fetch( 
    `https://api.spotify.com/v1/tracks/${trackID3}`, 
    { 
        headers: { 
            Authorization: `Bearer ${accessToken}` 
        } 
    } 
); 

const track3 = await response.json();

tracks[2].querySelector('img').src = track3.album.images[0].url;
tracks[2].querySelector('.track-title').textContent = track3.name;
tracks[2].querySelector('.track-album').textContent = track3.album.name;
tracks[2].querySelector('.track-number').textContent = track3.track_number;
tracks[2].querySelector('.track-duration').textContent = convertMsToMinSec(track3.duration_ms);

})();


const albums = document.querySelectorAll('.album-card');



(async ()=>{
 const response = await fetch( 
    `https://api.spotify.com/v1/albums/${albumID1}`, 
    { 
        headers: { 
            Authorization: `Bearer ${accessToken}` 
        } 
    } 
); 

const album1 = await response.json();

albums[0].querySelector('img').src = album1.images[0].url;
albums[0].querySelector('h3').textContent = album1.name;
albums[0].querySelector('p').textContent = `${album1.release_date} * ${album1.album_type}`;
})();

(async ()=>{
 const response = await fetch( 
    `https://api.spotify.com/v1/albums/${albumID2}`, 
    { 
        headers: { 
            Authorization: `Bearer ${accessToken}` 
        } 
    } 
); 

const album2 = await response.json();

albums[1].querySelector('img').src = album2.images[0].url;
albums[1].querySelector('h3').textContent = album2.name;
albums[1].querySelector('p').textContent = `${album2.release_date} * ${album2.album_type}`;

})();

(async ()=>{
 const response = await fetch( 
    `https://api.spotify.com/v1/albums/${albumID3}`, 
    { 
        headers: { 
            Authorization: `Bearer ${accessToken}` 
        } 
    } 
); 

const album3 = await response.json();

albums[2].querySelector('img').src = album3.images[0].url;
albums[2].querySelector('h3').textContent = album3.name;
albums[2].querySelector('p').textContent = `${album3.release_date} * ${album3.album_type}`;


})();

(async ()=>{
 const response = await fetch( 
    `https://api.spotify.com/v1/albums/${albumID4}`, 
    { 
        headers: { 
            Authorization: `Bearer ${accessToken}` 
        } 
    } 
); 

const album4 = await response.json();

albums[3].querySelector('img').src = album4.images[0].url;
albums[3].querySelector('h3').textContent = album4.name;
albums[3].querySelector('p').textContent = `${album4.release_date} * ${album4.album_type}`;

})();

}
load();


