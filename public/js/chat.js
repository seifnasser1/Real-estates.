
// //import io from "socket.io-client";

function openForm() {
  console.log("hi here")
  if (document.getElementById("myForm").style.display == "none")
    document.getElementById("myForm").style.display = "block";
  else
  document.getElementById("myForm").style.display = "none";
 
}

function sendMsg(){
    
    let msg=document.getElementById("chatInput").value;
   // console.log(msg)
    var b=document.getElementById("chatBody");
    var a = document.createElement("p");
    a.innerHTML = msg; 
    a.className = "messagez user_message";
    b.appendChild(a);

  //   $.ajax({
  //     url: '/user/send-message',
  //     method: 'POST',
  //     contentType: 'application/json',
  //     data: JSON.stringify({ user: "kjgu",content: msg, receiver:"jh" }),
  //     success: function (response) {
         
  //     },
  //     error:function(err){

  //     }
  // });


    return false;
    
}


  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";

  }
 
  

// /////////////////////////////////////////////////////////////////////////////

// //const Endpoint="http://localhost:3000";//this sets the endpoint for the Socket.io connection to "http://localhost:3000",
// // which is likely only correct if your Node.js server is running on the same machine as your client code. 
// //If your server is running elsewhere, you'll need to update this value to reflect the correct URL.

// //   var socket, slectedchatcompare;
// // const chat=({fetchAgain, setFetchAgain})=>{
// //   const[mess, setMessages]=useState([]);
// //   const[loading, setLoading]=useState(false);
// //   const[newmes, setNewMessage]=useState();
// //   const[socketconnected, setSocketConnected]=useState(false);

// // const toast=useToast();
// // const {user, selectedChat, setSelectedChat}=chatState();

// // }



// // useEffect(()=>{
// //   socket=io(Endpoint);
// //   socket.emit("setup",user);
// //   socket.on('connection',()=>setSocketConnected(true));

// // },[]);  

//chat gpt
// function openForm() {
//   console.log("hi here")
//   if (document.getElementById("myForm").style.display == "none")
//     document.getElementById("myForm").style.display = "block";
//   else
//     document.getElementById("myForm").style.display = "none";
// }

// // Send a message when the user submits the chat form
// function sendMsg(event) {
//   event.preventDefault(); // Prevent the default form submission behavior

//   // Get the user's message from the input field
//   const messageInput = document.querySelector('#chatInput');
//   const messageText = messageInput.value.trim();

//   if (messageText) {
//     // Add the user's message to the chat body
//     const chatBody = document.querySelector('#chatBody');
//     const messageEl = document.createElement('p');
//     messageEl.className = 'messagez user_message';
//     messageEl.innerText = messageText;
//     chatBody.appendChild(messageEl);

//     // Clear the input field
//     messageInput.value = '';

//     // Replace with your code for sending the message to the server
//     // For example:
//     // $.ajax({
//     //   url: '/send-message',
//     //   method: 'POST',
//     //   contentType: 'application/json',
//     //   data: JSON.stringify({ content: messageText }),
//     //   success: function (response) {
//     //     console.log('Message sent:', messageText);
//     //   },
//     //   error:function(err){
//     //     console.error('Error sending message:', err);
//     //   }
//     // });
//   }
// }

// function closeForm() {
//   document.getElementById("myForm").style.display = "none";
// }
