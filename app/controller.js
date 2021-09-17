import config from "./config.js";
import createClient from "./loader.js";

const localClient = createClient(config.dbLocal);
const atlasClient = createClient(config.dbAtlas);

export default {
  async init() {
    // Open local client connection
    let conn = await localClient.connect();
    const localData = await conn
      .db("workoutDB")
      .collection("workouts")
      .find({})
      .toArray();

    // Close local client connection
    conn.close();

    // Open atlas client connection
    conn = await atlasClient.connect();

    // Insert local data into atlas
    await conn.db("workoutDB").collection("workouts").insertMany(localData);

    // Close atlas client connection
    conn.close();

    return true;
  },
};
