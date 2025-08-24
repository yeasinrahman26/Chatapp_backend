import jwt from "jsonwebtoken";

export const generateToke = (userId, res) => {
  const token = jwt.sign({ userId }, process.evn.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 100,
    httpOnly: true,
    sameSite: "strict",
    secure: process.eventNames.NODE_ENV !== "development",
  });

  return token
};
