const https = require("https");
const path = require("path");
const fs = require("fs");

const dataRoad = path.join(__dirname, "downloads");

https
  .get("https://www.reddit.com/r/popular.json", (res) => {
    let saver = "";

    res.on("data", (peg) => {
      const end = path.extname("peg");
      if (end === ".jpg" || "gif" || "png") saver += peg;
    });
    res.on("end", () => {
      JSON.parse(saver).data.children.forEach((item) => {
        const final = `${item.data.id}.json` + "\n";
        fs.appendFileSync(dataRoad, final);
      });
    });
  })
  .on("error", (error) => {
    console.log(error);
  });
