import API from "./api";

export async function generateInterview(payload) {
  const { data } = await API.post("/interview", payload);
  return data;
}