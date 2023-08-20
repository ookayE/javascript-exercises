const books = [
    {
          title: 'Book',
          author: 'Name'
        },
    {
          title: 'Book2',
          author: 'Name2'
        }
]


const getTheTitles = function() {
    const titles = books.map(value => value.title) //map all titles found in books array to new array called titles
    return titles //titles array is returned
}

getTheTitles()

// Do not edit below this line
module.exports = getTheTitles;
