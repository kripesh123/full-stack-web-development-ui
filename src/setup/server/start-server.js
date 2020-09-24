import { func } from "prop-types";
import { PORT, APP_URL, NODE_ENV } from "../config/env";

export default function(server) {
    console.info('SETUP - Start Server...')

    server.listen(PORT, (error) => {
        if(error){
            return console.log(error)
        } else {
            return console.info(`Server is running on ${APP_URL} [${ NODE_ENV}]`)
        }
    })

}