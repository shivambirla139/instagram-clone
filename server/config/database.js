const mongoose = require("mongoose");
//'mongodb://localhost:27017/test'
//'mongodb+srv://shivambirla139:password108@cluster0.qvaixgn.mongodb.net/'
exports.connectDatabase = async () => {
  try {
    const con = await mongoose.connect(
      process.env.MONGOURI
      ,{
          useNewUrlParser: true,
          useUnifiedTopology: true,
          })
    console.log(`Database Connected: ${con.connection.host}`);
  }catch (e){
    console.log(e);
  }
};
