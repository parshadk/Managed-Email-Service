import express from "express";
import routes from "./routes/index.js";
import {dirname} from "path";
import {fileURLToPath} from "url";


const __dirname=dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(express.json());

app.use(express.static(__dirname +'/public'));

app.use(express.urlencoded({ extended: true }));

app.use('/', routes);
app.get('/', (req, res) => {
  res.sendFile(__dirname+ 'public/index.html');
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
