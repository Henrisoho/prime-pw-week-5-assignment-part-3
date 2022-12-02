console.log('***** Music Collection *****')
let collection = [];

function addToCollection(title, artist, yearPublished){
   let newAlbum = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
   }
    collection.push(newAlbum);
    return newAlbum
}


addToCollection('Smooth', 'Henri', 1999);
addToCollection('Sarah', 'Graves', 2021);
addToCollection('Model', 'Zhu', 2012);
addToCollection('New York', 'Frank Sinatra', 1979);
addToCollection('City', 'Atlas', 2019);
addToCollection('paper moon', 'Nat', 1985);

//console.log(collection)

    function showCollection(Arr){
  console.log(`There are ${Arr.length} Albums`);
  for (let i in Arr){
    console.log(`${Arr[i].title} by ${Arr[i].artist} published in ${Arr[i].yearPublished}`)
  }
    }

console.log(showCollection(collection));



function findByArtist(artist){
  let Result = [];
  for (let i in collection){
    if (artist == collection[i].artist){
    Result.push(collection[i]);
    }
  }
  return Result;
}

console.log(findByArtist('Henri'));