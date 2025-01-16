import { NextFunction, Request, Response } from "express";
import { User } from "../models/user.model.js";
import { NewuserrequestBody } from "../types/types.js";

export const newUser = async (
  req: Request<{}, {}, NewuserrequestBody>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, photo, gender, _id, dob } = req.body;
    const user = await User.create({
      name,
      email,
      photo,
      gender,
      _id,
      dob: new Date(dob),
    });
    res.status(201).json({
      status: true,
      message: `welcome, ${user.name}`,
    });
  } catch (error) {
    console.log(error);
  }
};
