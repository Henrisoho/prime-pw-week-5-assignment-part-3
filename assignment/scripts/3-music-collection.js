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


addToCollection('Smooth', 'Henri', 1999);
addToCollection('new wave', 'Henri', 2007);

addToCollection('blue jeans', 
'lana del ray', 2012)
addToCollection('Dream GHirl', 
'Kolohe Kai', 2009)
addToCollection('Move your body', 
'Own Boss', 2021)
addToCollection('Call me', 
'blonde', 1980)
addToCollection('cocaine model', 
'ZHU', 2014)
console.log(collection)

