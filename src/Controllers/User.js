import { firebaseDB } from "../Config/FirebaseConfig";
import { toast } from "react-toastify";

const response = firebaseDB.collection("user");

async function searchUser(id) {
  try {
    const data = await response.doc(id).get();
    return { ...data.data(), id: id };
  } catch (err) {
    console.log(err);
    toast.error("Não foi possível ler os dados.");
  }
}

export { searchUser };
