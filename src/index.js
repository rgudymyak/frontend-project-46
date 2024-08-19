import { readFile } from "./utils.js";
import _ from "lodash";

export const genDiff = (filepath1, filepath2, format) => {
  const dataFile1 = readFile(filepath1);
  const dataFile2 = readFile(filepath2);
  let result = "";
  const obj1Keys = Object.keys(dataFile1);
  const obj2Keys = Object.keys(dataFile2);
  const ollUniqueKeys = [...new Set([...obj1Keys, ...obj2Keys])].sort();

  if (ollUniqueKeys.length === 0) {
    return "{}";
  }

  ollUniqueKeys.forEach((key) => {
    if (Object.hasOwn(dataFile1, key) && Object.hasOwn(dataFile2, key)) {
      if (_.isEqual(dataFile1[key], dataFile2[key])) {
        result = `${result}\n    ${key}: ${dataFile1[key]}`;
      } else {
        result = `${result}\n  - ${key}: ${dataFile1[key]}\n  + ${key}: ${dataFile2[key]}`;
      }
    } else if (Object.hasOwn(dataFile1, key)) {
      result = `${result}\n  - ${key}: ${dataFile1[key]}`;
    } else {
      result = `${result}\n  + ${key}: ${dataFile2[key]}`;
    }
  });

  result = `{${result}\n}`;

  return result;
};

export const showDiff = (firstObjPath, secondObjPath) => {
  console.log(genDiff(firstObjPath, secondObjPath));
};
