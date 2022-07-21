"use strict"

import { promisify } from "node:util"
import { exec } from "node:child_process"
import glob from "tiny-glob"

const cmd = "html-beautify -r -s 2 -E [] --no-preserve-newlines"

const e = promisify(exec)
await glob("build/**/*.html", { filesOnly: "true" })
  .then(files => files.map(path => e(`${cmd} ${path}`)))
  .then(jobs => Promise.all(jobs))
