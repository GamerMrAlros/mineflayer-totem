Having problems
```
open a ticket in pull requiests
```
how to install:
```
npm i mineflayer-totem
```

example code:
```
const mineflayer = require('mineflayer');
const mineflayerTotem = require('mineflayer-totem');  // Import the mineflayer-totem package

// Create a bot instance with a valid username
const bot = mineflayer.createBot({
  host: 'localhost', // Replace with your server's address if necessary
  port: 25565,       // Replace with your server's port if necessary
  username: 'util_bot', // Ensure this is a valid username without spaces
  auth: 'microsoft'
});

// Event listener when the bot spawns successfully
bot.once('spawn', () => {
  
  // Initialize Food module
  const autoTotem = new mineflayerTotem(bot);  // Create a new instance of AutoTotem
  autoTotem.start();  // Start the auto-totem functionality

  // Initialize AutoTotem module and start it

});

// Handle connection errors or other issues
bot.on('error', (err) => {
});

bot.on('kicked', (reason) => {
});

bot.on('end', () => {
});

```

my npm
```
https://www.npmjs.com/package/mineflayer-totem
```
