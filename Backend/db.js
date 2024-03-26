const mongoose = require('mongoose')

const MongoseURI = "mongodb://localhost:27017/?directConnection=true"


const ConnectToMongo = async () => {
    try {
      await mongoose.connect(MongoseURI);
      console.log("Connected To Mongo Successfully");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
    }
  };
  

module.exports = ConnectToMongo;