

/**
 * Module dependencies.
 */
var http = require('http')
  , twitter = require('ntwitter')
  , path = require('path');


//Create the HTTP server with the express app as an argument
var server = http.createServer();
server.listen(8080);


// Twitter symbols array
// var watchSymbols = ['$msft', '$intc', '$hpq', '$goog', '$nok', '$nvda', '$bac', '$orcl', '$csco', '$aapl', '$ntap', '$emc', '$t', '$ibm', '$vz', '$xom', '$cvx', '$ge', '$ko', '$jnj'];

//This structure will keep the total number of tweets received and a map of all the symbols and how many tweets received of that symbol
var watchList = "$";

//Set the watch symbols to zero.
// _.each(watchSymbols, function(v) { watchList.symbols[v] = 0; });

//Start a Socket.IO listen
// var sockets = io.listen(server);

//Set the sockets.io configuration.
//THIS IS NECESSARY ONLY FOR HEROKU!
// sockets.configure(function() {
//   sockets.set('transports', ['xhr-polling']);
//   sockets.set('polling duration', 10);
// });

//If the client just connected, give them fresh data!
// sockets.sockets.on('connection', function(socket) { 
//     socket.emit('data', watchList);
// });


//Instantiate the twitter component
//You will need to get your own key. Don't worry, it's free. But I cannot provide you one
//since it will instantiate a connection on my behalf and will drop all other streaming connections.
//Check out: https://dev.twitter.com/
var t = new twitter({
    consumer_key: "k8Owe3iZwGMUgD1Dn64lTKN32",          
    consumer_secret: "6HhPFD747pq9iXbHNoqCMclqGa1Ibd4IhvWC7h6bBY8h7hp762",       
    access_token_key: "942399211-7J7mUWuEC1shJHXRnFvKyEFUJVhRh9aFfQd43BzB",      
    access_token_secret: "EPXwymTXCdTWkMzcxlnVYsI0Gexxo4mB1505idQ40jb9k"
});

//Tell the twitter API to filter on the watchSymbols 
t.stream('statuses/filter', { }, function(stream) {

  //We have a connection. Now watch the 'data' event for incoming tweets.
  stream.on('data', function(tweet) {

    //This variable is used to indicate whether a symbol was actually mentioned.
    //Since twitter doesnt why the tweet was forwarded we have to search through the text
    //and determine which symbol it was ment for. Sometimes we can't tell, in which case we don't
    //want to increment the total counter...
   // var claimed = false;

    //Make sure it was a valid tweet
    if (tweet.text !== undefined) {

      //We're gunna do some indexOf comparisons and we want it to be case agnostic.
      var text = tweet.text.toLowerCase();

      //Go through every symbol and see if it was mentioned. If so, increment its counter and
      //set the 'claimed' variable to true to indicate something was mentioned so we can increment
      //the 'total' counter!
      // _.each(watchSymbols, function(v) {
      //     if (text.indexOf(v.toLowerCase()) !== -1) {
      //         watchList.symbols[v]++;
      //         claimed = true;
      //     }
      // });

      //If something was mentioned, increment the total counter and send the update to all the clients
      // if (claimed) {
      //     //Increment total
      //     watchList.total++;

          //Send to all the clients
         // sockets.sockets.emit('data', watchList);
          console.log(text);

  //}
    }
  });
});










