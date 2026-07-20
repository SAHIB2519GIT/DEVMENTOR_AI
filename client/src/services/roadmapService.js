import API from "./api";

export async function generateRoadmap(payload) {

  const { data } = await API.post(
    "/roadmap",
    payload
  );

  return data;

}