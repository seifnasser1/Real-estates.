import { Result } from 'express-validator';
import Message from '../models/message.model.js';


const sendMes = async (req, res, next) => {
    
    const content =req.body.content;
    
        if(!content){
            console.log("Invalid data passed into request");
            return res.sendStatues(400);
        }
    console.log(req.body);
      const message = new Message({
       user: req.body.user,
       content: req.body.content,
       receiver: req.body.receiver,
      //req.session.user.id
      });
      message.save()

    
        .catch(err => {
          console.log(err);
        });
   };
 
   export { sendMes};
//module.exports={sendMes};
