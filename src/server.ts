import express from "express";
import bodyParser from "body-parser";
import routes from "./routes";

export const app = express();

app.use(bodyParser.json());

//route
app.use('/api', routes);
app.use((request, response, next) => {
    response.status(404).send('IS NOT FOUND');
});

app.listen(3001, () => {
    console.log(`App listen on : "0.0.0.3001`);
});
