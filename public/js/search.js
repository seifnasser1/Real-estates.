var MongoClient = require('mongodb').MongoClient;
var url = "";

const searchButton = document.querySelector('.search-box button');
const searchInput = document.querySelector('.search-box input');

searchButton.addEventListener('click', function () {
    const searchTerm = searchInput.value;
    console.log(searchTerm);
    // Do something with the search term here, such as sending it to a server or filtering results on the page.
});
/////////////////////////////////////////
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.name);
    db.close();
  });
});
