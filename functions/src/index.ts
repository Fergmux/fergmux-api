/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import {onRequest} from "firebase-functions/v2/https";
// import * as logger from "firebase-functions/logger";
import express from "express"
// const express = require("express");

const ex = express();
ex.get("/timestamp", (req, res) => {
  res.send(`${Date.now()}`);
});

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

export const app = onRequest(ex);
// logger.info("Hello logs!", {structuredData: true});
// response.send("Hello from Firebase!");
