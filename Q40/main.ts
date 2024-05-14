//Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

function make_album(artistName:string, albumTitle:string, numberOfTracks?:number) {
    let album: {artist:string, title:string, tracks?:number} = {
        artist: artistName,
        title: albumTitle,
    };
    if(numberOfTracks !== undefined) {
        album.tracks = numberOfTracks;
    }

    return album;
}

//calling function with album#1
let album1 = make_album("atifAslam", "doorie");
console.log(album1);

//calling function with album#2
let album2 = make_album("Sandal Ghani", "chaltyPhity", 1)
console.log(album2);


//calling function with album#3
let album3 = make_album("akon", "Turn down for what", 4)
console.log(album3);