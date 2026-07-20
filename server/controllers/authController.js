import {
  registerUser,
  loginUser,
  getProfile,
} from "../services/authService.js";

export const register = async (req, res) => {
  try {
    const data = await registerUser(req.body);
    res.status(201).json(data);
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const data = await loginUser(req.body);
    res.json(data);
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

export const profile = async (req, res) => {
  try {
    const user = await getProfile(req.user._id);

    res.json({
      success: true,
      user,
    });

  } catch (error) {

    res.status(404).json({
      success: false,
      message: error.message,
    });

  }
};