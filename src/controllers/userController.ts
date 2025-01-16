import { NextFunction, Request, Response } from "express";
import { User } from "../models/user.model.js";
import { NewuserrequestBody } from "../types/types.js";
import { Trycatch } from "../middlewares/error.js";
import ErrorHandler from "../utils/utility-class.js";

export const newUser = Trycatch(
  async (req: Request<{}, {}, NewuserrequestBody>, res: Response, next: NextFunction) => {
    const { name, email, photo, gender, _id, dob } = req.body;
    let user = await User.findById(_id);
   
    if (user) {
      return res.status(201).json({
        status: true,
        message: `welcome, ${user.name}`,
      });
    }

    if (!_id || !name || !email || !photo || !gender || !dob) {
      return next(new ErrorHandler("Please add all fields", 400));
    }

    user = await User.create({
      name,
      email,
      photo,
      gender,
      _id,
      dob: new Date(dob),
    });
    return res.status(201).json({
      status: true,
      message: `welcome, ${user.name}`,
    });
  }
);
