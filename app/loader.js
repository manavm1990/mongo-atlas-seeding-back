// Loads a reusable Mongo client for the application.
import { MongoClient } from "mongodb";

export default (conn) => ({
  client: new MongoClient(conn),
  connect() {
    return this.client.connect();
  },
  close() {
    this.client.close().then(() => {
      console.info("MongoDB Client disconnected");
      process.exit(0);
    });
  },
});
