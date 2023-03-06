import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import fs from 'fs';
import admin from 'firebase-admin';

//dotenv configuration
dotenv.config();

//firebase configuration
const credentials = JSON.parse(
    fs.readFileSync('./anyatutors_credentials.json')
);
admin.initializeApp({
    credential: admin.credential.cert(credentials),
});

//express configuration
const app = express();
app.use(express.json());

//mongoDB configuration
mongoose.set('strictQuery', true)
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(console.log("database connected"))

//mongoDB Schemas
const Schema = mongoose.Schema
const UserSchema = new Schema({
    name: String
})

//MongoDB models
const User = mongoose.model('User', UserSchema)

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ CRUD

app.listen(8000, () => {
    console.log('server listening at port 8000');
})

app.post('/users', (req, res) => {
    const user = new User(req.body)
    user.save((err, user) => {
        if (err) return res.status(500).send(err)
        return res.status(200).send(user)
    })
})

