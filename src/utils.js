import { parse } from "../parse.js";
import { cwd } from "process";
import path from "path";
import fs from "fs";

export const readFile = (filepath) => {
  const fullPath = path.resolve(cwd(filepath), filepath);
  const json = JSON.parse(fs.readFileSync(fullPath, "utf-8"));

  return json;
};
