import express from "express";
import {App} from "./object";
import morgan from "morgan";
import { routes } from "./routes";
import dotenv from "dotenv";
import session from "express-session";
import bodyParser from "body-parser";

dotenv.config();
const {SECRET_KEY_SESSION} = process.env;


const app = new App(express());

// ----------------- Middlewares --------------------------
app.createMiddleware(morgan('dev'));

app.createMiddleware(express.json());

app.createMiddleware(bodyParser.urlencoded({extended: true}));

app.createMiddleware(session({ 
    secret: SECRET_KEY_SESSION,
    resave: false,
    saveUninitialized: true,
 }));

// app.createMiddleware(flash())


// ------------------- Routes ------------------------------
routes(app)


export default app;
