const mongoose = require("mongoose");
const connectToDB = () => {
    mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('Database connected successfully')
    })
    .catch((err) => {
        console.log('Database connection failed');
        console.log(err.message);
        process.exit(1);
    })
}

module.exports = connectToDB;