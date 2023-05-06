import { UseCase } from "./inerface";
import { Request, Response } from "express";

export const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Credentials": true,
};


export enum AccessLevel {
  PUBLIC = 1,
  PRIVATE,
  RESTRICTED,
}

export function controllerExpress(
  useCase: UseCase<any, any, any, any>,
  isPublic: AccessLevel = AccessLevel.RESTRICTED
) {
  return async (req: Request, res: Response) => {
    let dataToken = null;
    try {
      if (isPublic === AccessLevel.RESTRICTED)
        console.log("req...", req.body, req.params, req.query);
      console.log(
        "req type...",
        typeof req.body,
        typeof req.params,
        typeof req.query
      );

      const response = await useCase.execute({
        body: req.body,
        params: req.params,
        query: req.query,
      });
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      return res.status(response.status).json(response.body);
    } catch (error: any) {
      console.log("error...", error);
      return res.status(500).json({ message: error.message });
    }
  };
}
