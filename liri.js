	//NPM Requests
	var request = require("request");
	var spotify = require("spotify");
	var Twitter = require("twitter");
	var fs = require("fs");
	//twitter key requests
	//console.log(twitter);

	

	var TwitterKeys = require("./keys.js");
	var sim = TwitterKeys.twitterKeys;
	//console.log(sim);
	//console.log(TwitterKeys);
	 var client = new Twitter(sim);
	//console.log(client);
	//console.log("%s, %s, %s, %s,", ckey, cskey, ATK, ATS);
	var input = process.argv[2];
	//console.log(process.argv.length);
	//Check for secondary input and store
	if(process.argv.length === 4){
		var input2 = process.argv[3];
		//console.log("this ran");
	}
	else{}
	//console.log(input);
	//USER INPUT POSSIBILITIES
	var resArray = ["my-tweets","spotify-this-song","movie-this","do-what-it-says"];
	//check for correct user input
	if(input === resArray[0] ||input === resArray[1] ||input === resArray[2] ||input === resArray[3]){
			//console.log("inside if statement");
			//picks user input	
			 switch(input){
			 	case resArray[0]:
			 	//my-tweets
			 	//This will show your last 20 tweets and when they were created at in your terminal/bash window.
			 	TwitPull();
			 // 	client.post('statuses/update', {status: 'I Love Twitter'},  function(error, tweet, response) {
				// 	  if(error) throw error;
				// 	  	console.log(tweet);  // Tweet body.
				// 	  	console.log(response);  // Raw response object.
				// });
			 	break;

			 	case resArray[1]:
			 	//spotify this song
			 	//This will show the following information about the song in your terminal/bash window Artist(s) The song's name A preview link of the song from Spotify The album that the song is from if no song is provided then your program will default to "The Sign" by Ace of Base
			 	//console.log(resArray[1]);
			 	var song; 
			 	if (typeof input2 !== 'undefined') { 
	    				song = input2;
				}
				else{ 
					song = "The Sign"
				}
				SpotCall(song);
			 	break;

			 	case resArray[2]:
			 	//movie this
			 	//This will output the following information to your terminal/bash window: * Title of the movie.   * Year the movie came out.   * IMDB Rating of the movie.   * Country where the movie was produced.   * Language of the movie.   * Plot of the movie.   * Actors in the movie.   * Rotten Tomatoes Rating. If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
			 	IMDBCALL();
		 		// console.log(resArray[2]);
			 	break;

			 	case resArray[3]:
			 	//do what it says
			 	//Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt. Feel free to change the text in that document to test out the feature for other commands.
		 		fs.readFile("random.txt", "utf8", function(error, data) {
		 			//console.log(data.split(",")[1]);
		 			var song = data.split(",")[1]; 
		 			SpotCall(song);
		 		});
		 		//console.log(resArray[3]);
			 	break;

			 }
	

	}

	//incase of mistype or user not knowing what app does
	else{
		console.log( "please input one of the following statements: my-tweets, spotify-this-song, movie-this, or do-what-it-says");
	
	}

	function IMDBCALL(){
		var movie;
		if (process.argv.length > 4 ){
			console.log("Please Reenter your movie using - instead of spaces ");
		}
		else{
			 	if (typeof input2 !== 'undefined') { 
	    				movie = input2;
				}
				else{ 
					movie = "Mr. Nobody"
				}
			 	 
			 	console.log(movie);
			 	request("http://www.omdbapi.com/?t="+movie.trim()+"&y=&plot=short&r=json", function(error, response, body) {
 					 if (!error && response.statusCode === 200) {
 					 		// console.log(response);
 					 		// console.log(JSON.parse(body));
					 	//Title
 					 		console.log("¤ " + JSON.parse(body).Title);
					 	//Year
 					 		console.log("¤ Year of release: " + JSON.parse(body).Year);
					 	//IMBD rating
					   	 	console.log("¤ IMDB rating is: " + JSON.parse(body).imdbRating);
				   	 	//Country produced
					   	 	console.log("¤ Country of origin: "+ JSON.parse(body).Country);
				   	 	//language of movie
					   	 	console.log("¤ Language of movie: "+ JSON.parse(body).Language);
				   	 	//Plot
					   	 	console.log("¤ Plot of movie: "+ JSON.parse(body).Plot);
				   	 	//Actors 
					   	 	console.log("¤ Actors: "+JSON.parse(body).Actors); 
				   	 	//Rottentomatoes rating
					   	 	console.log("¤ Rotten Tomatoes rating "+JSON.parse(body).Ratings[2].Value);

					  }

					});
			 }
	}

	function SpotCall(){

			 	if (process.argv.length > 4 ){
			console.log("Please Reenter your song using - instead of spaces ");
			}
			else{
			 	
			 	spotify.search({ type: 'track', query: song }, function(err, data) {
	   				 if ( err ) {
	        		console.log('Error occurred: ' + err);
	        		return;
	   				 }
 	
					    console.log(data.tracks.items[0].album.artists[0].name); 
					    console.log(data.tracks.items[0].name);
					    console.log(data.tracks.items[0].album.artists[0].external_urls.spotify);
					   console.log(data.tracks.items[0].album.name);
				});
			 }
	}
	function TwitPull(){
		var params = {screen_name: 'Zach Todd'};
			client.get('statuses/user_timeline', params, function(error, tweets, response) {
			  if (!error) {
			    //console.log(tweets);
			  }
			  
			for (var i = 0; i <= 19; i++) {
			  	
			console.log(tweets[i].created_at);
			console.log(tweets[i].text);
			 }

});

	}