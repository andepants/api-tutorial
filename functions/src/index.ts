/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import {onCall} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = onCall({
  secrets: ["SECRET_API_KEY"],
}, async () => {
  const secretKey = process.env.SECRET_API_KEY;
  logger.info("Hello logs!", {structuredData: true});
  return `Hello from Firebase! Secret: ${secretKey}`;
});
