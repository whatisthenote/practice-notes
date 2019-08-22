// const Node2 = require("./Node2")
// console.log(Node2.a)

// const http = require("http")
// const server = http.createServer(() => {
//   console.log("hello")
// })
// server.listen(3000)

// const http = require("http");
// const server = http.createServer((request, response) => {
// 	console.log("headers",request.headers)
// 	console.log("moethod", request.method)
// 	console.log("url", request.url)
// 	response.setHeader("content-type", "text/html");
// 	response.end("<h1>hello</h1>");
// });
// server.listen(3000);

// const http = require("http");
// const user = {
// 	name:"NAME",
// 	age:23
// }
// const server = http.createServer((request, response) => {
// 	response.setHeader("content-type", "application/json");
// 	response.end(JSON.stringify(user));
// });
// server.listen(3000);

// const express = require("express");
// const app = express();
// app.listen(3000);
// app.use((req, rep, next) => {
// 	console.log("<h1>Hello</h1>");
// 	next();
// });
// app.get("/", (req, res) => {
// 	res.send("test");
// });
// app.post("/profile", (req, res) => {
// 	const user = {
// 		name: "NAME",
// 		age: 23
// 	};
// 	res.send(user);
// });

// const express = require("express");
// const app = express();
// const bodyParser = require("body-parser");
// app.listen(3000);
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json())
// app.get("/", (req, res) => {
// 	res.send("test");
// });
// app.get("/profile", (req, res) => {
// 	res.send("profile");
// });
// app.post("/profile", (req, res) => {
// 	console.log(req.body);
// 	const user = {
// 		name: "NAME",
// 		age: 23
// 	};
// 	res.send("sucess");
// });

// const express = require("express");
// const app = express();
// const bodyParser = require("body-parser");
// app.listen(3000);
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json())
// app.get("/:id", (req, res) => {
// 	// console.log(req.query)
// 	//req.body
// 	// console.log(req.header)
// 	console.log(req.params)
// 	res.send("test");
// });

// const express = require("express");
// const app = express();
// const bodyParser = require("body-parser");
// app.listen(3000);
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.get("/:id", (req, res) => {
// 	console.log(req.params);
// 	res.status(404).send("not found");
// });

// const express = require("express");
// const app = express();
// const bodyParser = require("body-parser");
// app.listen(3000);
// app.use(express.static(__dirname + "/public"))

// const fs = require("fs")
// fs.readFile("./hello.txt", (err, data) => {
//   console.time("start")
//   if (err) {
//     console.log(err)
//   }
//   console.log(data.toString())
//   console.timeEnd("start")
// })
// const file = fs.readFileSync("./hello.txt")
// console.log(file)
// fs.appendFile("./hello.txt", "abc", err => {
//   if (err) {
//     console.log(err)
//   }
// })
// fs.writeFile("bye.txt", "bye", err => {
//   if (err) {
//     console.log(err)
//   }
// })
// fs.unlink("./bye.txt", err => {
//   if (err) {
//     console.log(err)
//   }
// })

// const fs = require("fs");
// fs.readFile("./santa.txt", (err, data) => {
//   console.time("time")
// 	const txt = data.toString();
// 	const up = txt.split("(").length - 1;
// 	const down = txt.split(")").length - 1;
//   console.log(up - down);
//   console.timeEnd("time")
// });

// const fs = require("fs");
// fs.readFile("./santa.txt", (err, data) => {
// 	const txt = data.toString();
// 	const split = txt.split("");
// 	const answer = split.reduce((acc, val) => {
// 		if (val === "(") {
// 			return ++acc;
// 		} else if (val === ")") {
// 			return --acc;
// 		}
// 	}, 0);
// 	console.log(answer);
// });

// const fs = require("fs");
// fs.readFile("./santa.txt", (err, data) => {
// 	const txt = data.toString();
// 	const split = txt.split("");
// 	let acc = 0;
// 	let counter = 0;
// 	split.some(val => {
// 		if (val === "(") {
// 			++acc;
// 		} else if (val === ")") {
// 			--acc;
// 		}
// 		counter++;
// 		return acc < 0;
// 	});
// 	console.log(counter);
// });
