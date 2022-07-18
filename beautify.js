"use strict"

import { promisify } from "node:util"
import { exec } from "node:child_process"
import glob from "tiny-glob"

const e = promisify(exec)

await glob("build/**/*.html", { filesOnly: "true" })
  .then(files =>
    files.map(path =>
      e(`html-beautify -r -s 2 --no-preserve-newlines ${path}`)))
  .then(jobs => Promise.all(jobs))
