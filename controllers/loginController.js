import bcrypt from "bcryptjs";
import User from "../models/User.js";

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: "User does not exists!" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    // if (!isPasswordValid) {
    //   return res.status(401).json({ error: "Incorrect Password" });
    // }

    res.status(200).json({ success: true, message: "Login successful" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export { loginUser };
