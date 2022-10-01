const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://moronesia:SaY1huwI0oltewAq@cluster0.pvgkrjj.mongodb.net/?retryWrites=true&w=majority');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => console.log('server database terhubung'));

