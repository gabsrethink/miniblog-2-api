const mongoose = require("mongoose");

// connection
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

const conn = async () => {
  try {
    const dbConn = await mongoose.connect(
      `mongodb+srv://${dbUser}:${dbPassword}@cluster0.sbfd2.mongodb.net/?retryWrites=true&w=majority`
    );
    console.log("Connected");
    return dbConn;

  } catch (error) {
    console.error(error, "Error connecting");
  }
};

conn()
module.exports = conn;
