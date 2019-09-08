const Twit = require('twit');
const config = require('./src/config');
// gettig my Boot and using the Twit account
const Bot = new Twit(config);

// setting my time interval
const hourly = 3600000000;

function tweet(txt) {
  Bot.post(
    'statuses/update',
    {
      status: txt,
    },
    (err, data, response) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`${data.text} tweeted!`);
      }
    }
  );
}

// for I can post a random tweet
function tweetRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 3600000000);
  tweet(randomNumber);
}

setInterval(tweetRandomNumber, hourly);
