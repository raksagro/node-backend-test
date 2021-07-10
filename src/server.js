const express  = require("express");
const routes = require('./routes');

const app = express();
const port = 3000;

app.use(express.json());
app.use(routes);

// app.post("/users", (request, response) => {
//     return response.json({
//         message: "Isto é um post",
//     });
// });


app.listen(port, () => console.log("Server is running on port ", + port));