import { Router } from 'express';
import User from '../models/user.model.js';
import Message from '../models/message.model.js';
import { addprop } from "../controllers/propirty.controller.js";
import { getalluser, getallusers, makeAdmin } from "../controllers/user.controller.js";
import { viewprop } from "../controllers/propirty.controller.js";
const router = Router();

// router.use((req, res, next) => {
//   if (req.session.user !== undefined && req.session.user.Type === 'admin') {
//       next();
//   }
//   else {
//       res.render('err', { err: 'You are not an Admin',user: (req.session.user === undefined ? "" : req.session.user) })
//   }
// });

router.get('/', getalluser);

router.get('/deleteuser/:id', (req, res, next) => {
  console.log(req.params.id)
  User.findByIdAndDelete(req.params.id)
    .then(result => {
      res.redirect('/admin/viewusers');
    })
    .catch(err => {
      console.log(err);
    });
});

router.get('/adding', function (req, res, next) {
  console.log('index.js: GET /');
  res.render('pages/addpropirty', { user: (req.session.user === undefined ? "" : req.session.user) });
});

router.get('/viewusers', function (req, res, next) {
  const query={"type":'client'};
  User.find(query).then(result => {
    console.log(result);
    res.render('pages/AdminUsers', { Users: result, user: (req.session.user === undefined ? "" : req.session.user) });
  });
});

router.get('/viewadmins', (req, res) => {
  const query={"type":'admin'};
  User.find(query).then(result=>{
    console.log(result);
    res.render('pages/admins',{ admins : result ,user: (req.session.user === undefined ? "" : req.session.user) })
  })
});


router.post("/makeadmin/:id", makeAdmin);
router.post('/makeuser/:id',(req,res,next)=>{
  User.findByIdAndUpdate(req.params.id, { type: 'client' })
      .then(result => {
          res.redirect('/admin/viewadmins');
      })
      .catch(err => {
          console.log(err);
      });
})

router.get('/getSingleUserChat/:id', async function (req, res, next) {
  const query1={"sender":req.session.user._id,"receiver":req.params.id};
  const query2={"receiver":req.session.user._id,"sender":req.params.id};
  console.log(req.session.user._id)
  console.log(req.params.id)
  const clientmes=await Message.find(query2);
  const adminmes=await Message.find(query1);
  const allMessages =[];
  for(let i=0;i<clientmes.length;i++){
       allMessages.push({message:clientmes[i],type:"user"});
  }
  for(let i=0;i<adminmes.length;i++){
    allMessages.push({message:adminmes[i],type:"admin"});
}
allMessages.sort((a,b)=>{return a.message.createdAt - b.message.createdAt})
console.log(allMessages)
console.log("zizi")
res.render('pages/chatAdmin', { Messages:allMessages ,user: (req.session.user === undefined ? "" : req.session.user)});

});

router.post('/sendMsgFromAdmin/:id', async function(req, res, next) {
  

const content =req.body.content;
  
if(!content){
    console.log("Invalid data passed into request");
    return res.sendStatues(400);
}
console.log(req.body);
const message = new Message({
sender: req.session.user._id,
content: req.body.content,
receiver: req.params.id,
//
});
message.save()


.catch(err => {
  console.log(err);
});

});

router.get('/chats', function (req, res, next) {
  const query={"receiver":req.session.user._id};
  Message.find(query).then(async result => {
    console.log(result);
    const usersChats = [];
    for(let i=0;i<result.length;i++){
      usersChats.push(result[i].sender);
    }
    console.log(usersChats)
    const usersChatsUnique = [];
    usersChats.forEach(element => {
      if (!usersChatsUnique.includes(element)) {
        usersChatsUnique.push(element);
      }
  });
  console.log(usersChatsUnique)
  const Users = [];
  for(let i=0;i<usersChatsUnique.length;i++){
    const query1={"_id":usersChatsUnique[i]};
    const usr=await User.findOne(query1);
    Users.push(usr);
  }
  console.log(Users)
    res.render('pages/adminChat', { Users: Users, user: (req.session.user === undefined ? "" : req.session.user) });
  });
});

router.get('/register', (req, res) => {
  res.redirect('/register');
});
router.get('/Top',(req,res)=>{
  res.render('pages/TopProperties', { user: (req.session.user === undefined ? "" : req.session.user) });
})
router.post('/addpropirty', addprop);
router.get('/prop',viewprop);
router.get('/viewusers', getallusers);

export default router;
