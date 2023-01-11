const fs = require("fs");

fs.appendFile("text.txt", "dawdawd \n", (err) => {
  console.log(err);
});

fs.appendFile("text.txt", "ndndndndn \n", "utf8", (err) => {
  console.log(err);
});
