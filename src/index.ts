import Express,  {json} from "express";
import cors from "cors";
import dotenv from 'dotenv';
import tasksRouter from "./Routers/tasks.routes";

dotenv.config()

const app = Express();
app.use(cors());
app.use(json());
app.use(tasksRouter);

const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Server running in port: ${port}`))