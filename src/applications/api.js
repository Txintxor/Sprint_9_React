import { collection, getDocs, query, getDoc,  addDoc, deleteDoc } from "firebase/firestore";
import { db } from "./firebase";

export const saveRecipe = async (recipe) => {
  await addDoc(collection(db, "recetas"), recipe);
}

// export const deleteRecipe = async (recipe) => {
//   await  deleteDoc(collection(db, "recetas"), recipe);
// }

// export const getRecipe = async (recipe) => {
//   const data = await getDoc(collection(db, "recetas"), recipe);
//   return data;
// }

export const getRecipes = async () => {
  const data = await getDocs(query(collection(db, "recetas")));
  
  return data;
}

// export const updateRecipe = async (recipe , key, value) => {

//   await updateDoc(doc(db,"recetas", recipe), {key : value})
// }

