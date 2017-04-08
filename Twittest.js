var Twitter = require("twitter");

var client = new Twitter({
  consumer_key: 'bnYvpwu6SaURqpSZ3cnjQYr0k',
  consumer_secret: 'zWUT4Vo2r6OCrPPdoch6u6IxfXknGbspLPnZyrAgfClss50RRm',
  access_token_key: '2175206131-ptol3iRI5iYU4fPduKEjmbnigenNu6mQ9ddbGYa',
  access_token_secret: 'UDwYJYv7f4v7bHL3BD29a2kv7ZJnklNhB8ZVuM6ty1A0D'
});

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
console.log(client);