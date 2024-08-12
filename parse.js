import path from "path";
import fs from "fs";

export const parse = (filepath) => {
  const dirName = process.cwd(filepath);
  const filePath = path.resolve(dirName, filepath);
  return fs.readFileSync(filePath, "utf-8");
};
