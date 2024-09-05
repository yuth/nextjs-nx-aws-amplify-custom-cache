const path = require("path");
const fs = require("fs");
debugger;
const requiredServerFilePath = path.join(__dirname, "../../../public/apps/amplify-test/.next/required-server-files.json");
const content = fs.readFileSync(requiredServerFilePath, "utf-8");
const requiredServerFile = JSON.parse(content);

requiredServerFile.config.cacheHandler = "@henrikvolmer/nextjs-cache-handler-s3"; // Todo determine this later

fs.writeFileSync(requiredServerFilePath, JSON.stringify(requiredServerFile));

console.log("Updated the file successfully");
