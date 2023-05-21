const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const postRoutes = require('./routes/posts');
const admincatRoutes = require('./routes/admincat')

app.use(bodyParser.json());
app.use(cors());

app.use(postRoutes);
app.use(admincatRoutes);

const PORT =8000;

//const DB_URL ='mongodb+srv://twg:twg123@mernapp.zc2p7.mongodb.net/mernCrud?retryWrites=true&w=majority';
const DB_URL='mongodb+srv://sliit:sliit123@itpcluster.fpcc4.mongodb.net/furnitureDB?retryWrites=true&w=majority';

mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology:  true
})
.then(()=>{
    console.log('DB is connected');
})
.catch((err)=>console.log('DB connection err',err));


app.listen(PORT, ()=>{
    console.log(`App is running on ${PORT}`);
});

