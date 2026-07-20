import API from "./api";

export const analyzeResume = async (formData) => {
  const { data } = await API.post(
    "/resume/upload",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return data;
};