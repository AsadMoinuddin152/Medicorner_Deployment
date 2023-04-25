const mongoose = require('mongoose');
const color = require('colors');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log(
            `MongoDB Connected: ${mongoose.connection.host}`.cyan.underline.bold
        );
    } catch (err) {
        console.error(`Error: ${err.message}`.red);
        process.exit(1);
    }
};

module.exports = connectDB;
