import { db } from "./firebaseConfig";
import {
  collection,
  updateDoc,
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
    const {task, done, timestamp} = doc.data().task;
    list.push({ id: doc.id, task, done, timestamp });
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

export const updateTaskInDB = async (id, checkedValue) =>{
  try{
    const taskRef = doc(db, "task", id)
    await updateDoc( taskRef , {'task.done': checkedValue});
    return id;
  }catch(err){
    return console.log ("An Error Ocurrs", err)
  }
}
