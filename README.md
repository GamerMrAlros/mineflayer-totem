Hawing problems
```
open a ticket in pull requiests
```
how to install:
```
npm i mineflayer-totem
```

example code:
```
// Import Mineflayer and the mineflayer-totem package
const mineflayer = require('mineflayer');
const mineflayerTotem = require('mineflayer-totem');  // Import the mineflayer-totem package

// Create the bot
const bot = mineflayer.createBot({
  host: 'localhost', // or your server address
  port: 25565,       // server port
  username: 'TotemBot', // replace with your bot's name
});

// Once the bot spawns, initialize the auto-totem functionality
bot.on('spawn', () => {
  // You need to instantiate mineflayerTotem with 'new'
  const autoTotem = new mineflayerTotem(bot);  // Create a new instance of AutoTotem
  autoTotem.start();  // Start the auto-totem functionality

  console.log("AutoTotem is active!");
});
```
