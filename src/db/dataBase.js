import { db } from "./firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { async } from "@firebase/util";

export const addNewTask = async (task) => {
  let docRef = {};
  try {
    docRef = await addDoc(collection(db, "task"), {
      task,
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }

  return docRef.id;
};

export const getAllTask = async () => {
  const list = [];
  const querySnapshot = await getDocs(collection(db, "task"));
  querySnapshot.forEach((doc) => {
    list.push({ id: doc.id, task: doc.data().task });
  });
  return list;
};

export const deleteTask =  async (id) => {
  try {
    await deleteDoc(doc(db, "task", id));
    return id;
  } catch (err) {
    return console.log("a error ocurrs", err);
  }
};
