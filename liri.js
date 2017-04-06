	//NPM Requests
	var Request = require("request");
	var Twitter = require("twitter");
	var Spotify = require("spotify");
	//twitter key requests
	var TwitterKeys= require("./keys.js");
	console.log(TwitterKeys);
	var ckey= TwitterKeys.twitterKeys.consumer_key;
	var cskey= TwitterKeys.twitterKeys.consumer_secret;
	var ATK = TwitterKeys.twitterKeys.access_token_key;
	var ATS = TwitterKeys.twitterKeys.access_token_secret;
	console.log("%s, %s, %s, %s,", ckey, cskey, ATK, ATS);