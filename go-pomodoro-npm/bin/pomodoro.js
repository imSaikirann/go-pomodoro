#!/usr/bin/env node

const { spawn } = require("child_process");
const path = require("path");

const binaryPath =
  process.platform === "win32"
    ? path.join(__dirname, "pomodoro.exe")
    : path.join(__dirname, "pomodoro");

const child = spawn(binaryPath, process.argv.slice(2), {
  stdio: "inherit",
  shell: true
});

child.on("exit", (code) => {
  process.exit(code);
});
