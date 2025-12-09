const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../Models/listing.js");

const MONGO_URL = process.env.MONGO_URL;

main()
  .then(() => {
    console.log("Atlas DB connected for seeding");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(initData.data);
  console.log("Data was initialized into Atlas DB");
};

initDB();
