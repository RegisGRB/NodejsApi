const express =  require('express');
const config = require('../configs/server.config');
const bodyParser = require('body-parser');
const apiRouter = require('../routes');
const cors  = require('cors');
//demarrer express
const app = express();
//middleware
app.use(bodyParser.json());     
app.use(cors());
app.use('/api/golf',apiRouter);

exports.start = () => {
    let port = config.port;
    app.listen(port,(err) =>{
        if(err){
            console.log(`Error:${err}`);
            process.exit(-1);
        }
        console.group(`app is running on port ${port}`);
    });
}