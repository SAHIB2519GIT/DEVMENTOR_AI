import UserActivity from "../models/UserActivity.js";

export const logActivity = async (
  user,
  type,
  description
) => {
  await UserActivity.create({
    user,
    type,
    description,
  });
};