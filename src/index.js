import { parse } from "../parse.js";

const genDiff = (filepath1, filepath2) => {
  const filePath1 = parse(filepath1);
  const filePath2 = parse(filepath2);
  console.log(filePath1, filePath2);
};

// genDiff("../file1.json", "../file2.json");
