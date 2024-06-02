import { Response } from "express";

const handleHttp = (res: Response, error: string, errorRaw?: any, status?: number) => {
  console.log(errorRaw);
  res.status(status || 500).send({ error, error_type: errorRaw });
};

export default handleHttp;
