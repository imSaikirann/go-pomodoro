const https = require("https");
const fs = require("fs");
const os = require("os");
const path = require("path");
const { execSync } = require("child_process");

const platform = os.platform();
const binDir = path.join(__dirname, "..", "bin");

if (!fs.existsSync(binDir)) fs.mkdirSync(binDir, { recursive: true });

function download(url, dest, cb) {
  https.get(url, (res) => {
    if (res.statusCode === 302 || res.statusCode === 301) {
      return download(res.headers.location, dest, cb);
    }

    const file = fs.createWriteStream(dest);
    res.pipe(file);

    file.on("finish", () => {
      file.close(cb);
    });
  });
}

if (platform === "win32") {
  const zipUrl =
    "https://github.com/imSaikirann/go-pomodoro/releases/latest/download/pomodoro-windows-amd64.zip";
  const zipPath = path.join(binDir, "pomodoro.zip");

  console.log("Downloading Windows binary...");

  download(zipUrl, zipPath, () => {
    console.log("Extracting...");

    execSync(
      `powershell -command "Expand-Archive -Path '${zipPath}' -DestinationPath '${binDir}' -Force"`
    );

    // move exe to root bin folder if inside subfolder
    const extractedExe = path.join(
      binDir,
      "pomodoro-windows-amd64",
      "pomodoro.exe"
    );
    const finalExe = path.join(binDir, "pomodoro.exe");

    if (fs.existsSync(extractedExe)) {
      fs.renameSync(extractedExe, finalExe);
    }

    fs.unlinkSync(zipPath);

    console.log("Pomodoro installed");
  });
} else {
  // linux / mac raw binary download
  const url =
    platform === "darwin"
      ? "https://github.com/imSaikirann/go-pomodoro/releases/latest/download/pomodoro-darwin-amd64.tar.gz"
      : "https://github.com/imSaikirann/go-pomodoro/releases/latest/download/pomodoro-linux-amd64.tar.gz";

  const archive = path.join(binDir, "pomodoro.tar.gz");

  console.log("Downloading binary...");

  download(url, archive, () => {
    execSync(`tar -xzf ${archive} -C ${binDir}`);
    fs.unlinkSync(archive);

    console.log("Pomodoro installed");
  });
}
