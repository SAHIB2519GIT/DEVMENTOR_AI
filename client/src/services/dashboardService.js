import API from "./api";

export async function getDashboard() {

  const { data } = await API.get("/dashboard");

  return data;

}