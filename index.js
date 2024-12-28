// index.js

class AutoTotem {
    constructor(bot) {
      this.bot = bot;
      this.lowHealthThreshold = 10;  // Health threshold to trigger totem usage
      this.offhandSlot = 45;         // Offhand slot index
      this.totemType = 1163;         // Correct item type for Totem of Undying (change this if needed)
    }
  
    start() {
      // Listen for health changes and equip the totem if needed
      this.bot.on('health', () => {
        this.handleAutoTotem();
      });
  
      // Listen for changes to the offhand slot to detect when the totem pops
      this.bot.on('heldItemChanged', () => {
        this.checkTotemPop();
      });
  
      // Start the auto-totem loop to check every 100ms
      setInterval(() => {
        this.handleAutoTotem();
      }, 100);
    }
  
    handleAutoTotem() {
      // If the bot's health is dangerously low, equip a totem
      if (this.bot.health < this.lowHealthThreshold) {
        this.equipTotem();
      }
    }
  
    equipTotem() {
      const totemSlot = this.findTotemInInventory();
  
      if (totemSlot !== -1) {
        // The totem was found, now equip it to the offhand
        const item = this.bot.inventory.slots[totemSlot];
  
        // Check if the totem is already in the offhand (slot 45)
        if (this.bot.heldItemSlot !== this.offhandSlot) {
          this.bot.equip(item, 'off-hand', (err) => {
            if (err) {
            } else {
            }
          });
        }
      } else {
      }
    }
  
    checkTotemPop() {
      const currentItem = this.bot.heldItem;
  
      // If the bot’s current item is not a Totem of Undying and it's in the offhand (slot 45), 
      // it means the totem has popped and the bot needs to equip another one
      if (this.bot.heldItemSlot === this.offhandSlot && currentItem && currentItem.type !== this.totemType) {
        this.equipTotem();
      }
    }
  
    findTotemInInventory() {
      // Loop through the inventory slots and find the totem
      for (let i = 0; i < this.bot.inventory.slots.length; i++) {
        const item = this.bot.inventory.slots[i];
  
        // Log the item types to check what the bot is seeing
        if (item) {
        }
  
        // Check if the item type matches the Totem of Undying
        if (item && item.type === this.totemType) {
          return i;  // Return the index of the totem
        }
      }
      return -1;  // Return -1 if no totem is found
    }
  }
  
  module.exports = AutoTotem;  // Export the class for use in other files
  