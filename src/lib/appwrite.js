import { Client, Databases, Account } from "appwrite";

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("<653307c1a2aeaaf13773>");  // Replace with your project ID

export const account = new Account(client);
export const databases = new Databases(client);