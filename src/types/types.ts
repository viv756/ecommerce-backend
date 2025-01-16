import { NextFunction, Request, Response } from "express";

export interface NewuserrequestBody {
  name: string;
  email: string;
  photo: string;
  gender: string;
  role: string;
  _id: string;
  dob: Date;
}

export interface NewProductrequestBody {
  name: string;
  category: string;
  price: number;
  stock:number
}

export type ControllerType = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void | Response<any, Record<string, any>>>;
