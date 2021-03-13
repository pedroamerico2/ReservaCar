import { firebaseDB } from "../Config/FirebaseConfig";
import { toast } from "react-toastify";

const response = firebaseDB.collection("car");

async function addCar(data) {
  try {
    const dataDB = await response.add(data);
    toast.success(
      "Carro de Placa " + data.licencePlate + " foi adicionado!",
      3000
    );
    return dataDB.id;
  } catch (err) {
    console.log(err);
    toast.error("Parece que tem algo errado com seu cadastro!", 3000);
  }
}

async function getCars(id) {
  try {
    const data = await response.where("code3c_id", "==", id).get();
    const allData = [];
    data.docs.forEach((item) => {
      allData.push({ ...item.data(), id: item.id });
    });
    return allData;
  } catch (err) {
    console.log(err);
    toast.error("Não foi possível ler os dados.");
  }
}

async function getAllCars() {
  try {
    const data = await response.get();
    const allData = [];
    data.docs.forEach((item) => {
      allData.push({ ...item.data(), id: item.id });
    });
    return allData;
  } catch (err) {
    console.log(err);
    toast.error("Não foi possível ler os dados.");
  }
}

async function searchCar(id) {
  try {
    const data = await response.doc(id).get();
    return { ...data.data(), id: id };
  } catch (err) {
    console.log(err);
    toast.error("Não foi possível ler os dados.");
  }
}

async function editCar(data, id) {
  try {
    const dataDBExists = await response.doc(id).get();
    if (!dataDBExists) {
      return [];
    } else {
      await response.doc(id).set(data);
      toast.success("Produtor " + data.name + " foi editado!", 3000);
      return true;
    }
  } catch (err) {
    console.log(err);
    toast.error("Parece que tem algo errado com sua edição!", 3000);
  }
}

async function deleteCar(name, id) {
  try {
    await response.doc(id).delete();
    toast.success("Produtor " + name + " foi apagado!", 3000);
    return true;
  } catch (err) {
    console.log(err);
    toast.error("Parece que tem algo errado com sua edição!", 3000);
  }
}

export { addCar, getCars, getAllCars, searchCar, editCar, deleteCar };
