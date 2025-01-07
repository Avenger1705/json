import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";

const git = simpleGit();
const path = "./data.json";

// Commit date: January 1, 2025
const commitDate = moment("2025-01-07T12:00:00").format();
const data = { date: commitDate };

console.log("📅 Committing on:", commitDate);

jsonfile.writeFile(path, data, () => {
  git.add([path])
    .commit(`Commit on ${commitDate}`, { "--date": commitDate })
    .then(() => git.push())
    .then(() => console.log("✅ Commit pushed!"))
    .catch((err) => console.error("🚨 Git error:", err));
});
