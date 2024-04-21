import express from 'express'; 
import connectToMongoDB from "./db/connectToMongoDB.js";
import dotenv from 'dotenv'; 
const PORT = process.env.PORT || 3000;

dotenv.config();
await connectToMongoDB();

const app = express();
app.use(express.json());



app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});