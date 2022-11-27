console.log('***** Music Collection *****')
let collection = [];
let Album = {

}

function addToCollection(title, artist, yearPublished){
    Album.title = title;
    Album.artist = artist
    Album.yearPublished = yearPublished
    collection.push(Album)
    return collection
}

addToCollection('Smooth', 'Henri', 1999)

console.log(collection)
