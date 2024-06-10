async function connectDb() {
    mongoose.connect('mongodb+srv://joanavillaperalta:MJN0Kg1XpppfMm1P@backenddb.mwswxka.mongodb.net/discos?retryWrites=true&w=majority&appName=backendDb')
    .then(() => {
        console.log('Connected to db!');
        app.listen(3001, () => {
            console.log('Server is running on port 3001');
        });
    })
    .catch(() => 
        console.log('Connection failed!'));
};

module.exports = connectDb