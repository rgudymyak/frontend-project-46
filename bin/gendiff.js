#!/usr/bin/env node
import { Command } from "commander";
import { genDiff, showDiff } from "../src/index.js";
const program = new Command();

program
  .version("1.0.0")
  .description("Compares two configuration files and shows a difference.")
  .option("-f, --format [type]", "output format")
  .helpOption("-h, --help", "output usage information")
  .arguments("<filepath1> <filepath2>")
  .action(showDiff);

program.parse();
