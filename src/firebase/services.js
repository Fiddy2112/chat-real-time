import { db } from "./config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export const addDocument = async (colect, data) => {
  return addDoc(collection(db, colect), {
    ...data,
    createdAt: serverTimestamp(),
  });
};
