let books =
  '{ "books" : [' +
  '{ "Title":"Bluets" , "Author":"Maggie Nelson", "Price":"$20.00", "Description": "A meditation on love and grief; an exploration of loss; a reverie of blue; a syncopated arrangement of 240 prose poems. Bluets is a lyrical, philosophical, and often explicit exploration of personal suffering and the limitations of vision and love, as refracted through the colour blue. Maggie Nelson beautifully utilises the colour as a medium through which she can reflect on shame in women’s writing, particularly as it relates to love, loss, depression, and physical pain.", "Image": "List1.jpg" },' +
  '{ "Title":"The Secret History" , "Author":"Donna Tartt", "Price":"$40.00", "Description": "The pioneer of dark academia books, Donna Tartt’s cult favourite bestseller is a classic about a group of six clever, eccentric misfits at an elite New England college. Under the influence of a charismatic classic professor, they discover a way of thinking and living that is a world away from the humdrum existence of their contemporaries. However, their lives are changed forever when they go beyond the boundaries of normal morality and discover how hard it can be to truly live and how easy it is to kill.", "Image": "List2.jpg" },' +
  '{ "Title":"The Stranger" , "Author":"Albert Camus", "Price":"$15.00", "Description": "Mamman died today. Or maybe yesterday, I don’t know.’ With an exceptionally intriguing opening, The Stranger is centred around the story of a man named Meursault who leads an unremarkable bachelor life in Algiers before he was persecuted for a murder. In this one of many foundation literature for Absurdism, Camus explores what he termed “the nakedness of man faced with the absurd.", "Image": "List3.jpg" } ]}';

const bookJson = JSON.parse(books);

for (let index = 0; index < bookJson.books.length; index++) {
    document.getElementById("booksDisplay").innerHTML += '<div class="col-md-4">' +
    '<div class="card mb-3">' +
    '<img class="card-img-top" src='+ bookJson.books[index].Image +' />' +
    '<div class="card-body">' +
        '<a href="bookdetails.html?index='+ index +'"><h5 class="card-title">' + bookJson.books[index].Title + '</h5></a>' +
        '<p>Author: ' + bookJson.books[index].Author + '</p>' +
        '<p>Price: ' + bookJson.books[index].Price + '</p>' +
        '<p>Description: ' + bookJson.books[index].Description + '</p>' +
        '<a href="#" class="btn btn-primary">Add To Cart</a>' +
    '</div>' +
    '</div>'+
    '</div>';
}


