const mongoose = require('mongoose');
const { User, Thought } = require('./models');

mongoose.connect('mongodb://127.0.0.1:27017/vibelinkDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const users = [
  { username: 'mahdi', email: 'mahdi@email.com' },
  { username: 'alice', email: 'alice@example.com' },
  { username: 'bob', email: 'bob@example.com' }
];

async function seed() {
  try {
    // Remove existing data
    await User.deleteMany({});
    await Thought.deleteMany({});
    
    // Insert Users
    const insertedUsers = await User.insertMany(users);
    console.log('Seeded Users:');
    insertedUsers.forEach(user => {
      console.log(`Username: ${user.username}, ID: ${user._id}`);
    });
    
    // Find mahdi's user document
    const mahdi = insertedUsers.find(user => user.username === 'mahdi');
    if (!mahdi) throw new Error('Mahdi not found');

    // Create a thought for mahdi with a reaction
    const thoughtData = {
      thoughtText: "This is my first thought!",
      username: "mahdi",
      reactions: [
        {
          reactionBody: "Great thought!",
          username: "alice"
        }
      ]
    };
    const createdThought = await Thought.create(thoughtData);
    
    // Update mahdi to add this thought to his thoughts array
    await User.findByIdAndUpdate(
      mahdi._id,
      { $push: { thoughts: createdThought._id } },
      { new: true }
    );
    
    console.log(`Seeded Thought for mahdi: ID: ${createdThought._id}`);
    if (createdThought.reactions && createdThought.reactions.length > 0) {
      createdThought.reactions.forEach((reaction, index) => {
        console.log(`Seeded Reaction ${index + 1} for thought ${createdThought._id}: ID: ${reaction.reactionId}`);
      });
    }
    
  } catch (err) {
    console.error(err);
  } finally {
    mongoose.connection.close();
  }
}

seed();
