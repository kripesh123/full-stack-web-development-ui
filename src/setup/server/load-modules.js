import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import Express from 'express'
import path from 'path'
import { NODE_ENV } from "../config/env"
import morgan from "morgan"

export default function(app) {
    console.info('SETUP - Loading modules...')

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: false}))

    app.use(cookieParser())

    app.use(Express.static(path.join(__dirname, '..', '..', '..', 'public')))

    if(NODE_ENV === 'development') {
        app.use(morgan('tiny'))
    }
}