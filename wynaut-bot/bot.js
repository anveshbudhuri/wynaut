const express = require('express');
const requests = require('requests');
var bot = express();

const PORT = 3001;



// Handle unknown requests?
// bot.use('*', (req, res) => {
//     res.send("I am sorry, I am not a wobbuffet yet. I am still learning new moves.");
// })

bot.listen(PORT);