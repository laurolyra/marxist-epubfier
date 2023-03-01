import { Request, Response } from "express";

// app.get('/book-page/:name', (req, res) => {
//   const { name } = req.params;
//   res.status(200).send(name.toUpperCase());
// });

export const bookName = async (req: Request, res: Response) => {
  const { name } = req.params;
  res.status(200).send(name.toUpperCase())
}
