function openForm() {
  console.log("hi here")
  if(document.getElementById("myForm").style.display=="none")
  document.getElementById("myForm").style.display = "block";
  else
  document.getElementById("myForm").style.display = "none";
 
}

function sendMsg(){
    
    let msg=document.getElementById('chatInput').value;
    console.log(msg)
    var b=document.getElementById('chatBody');
    var a = document.createElement("p");
    a.innerHTML = msg; 
    a.className = "messagez user_message";
    b.appendChild(a);
    return false;
    
}


  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";

  }
 
  
  