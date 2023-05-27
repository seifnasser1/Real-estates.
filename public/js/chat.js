function sendMsg(){
    
    let msg=document.getElementById('chatInput').value;
    console.log(msg)
    var b=document.getElementById('chatBody');
    var a = document.createElement("p");
    a.innerHTML = msg; 
    a.className = "message user_message";
    b.appendChild(a);
    return false;
    
}

function openForm() {
    console.log("hi here")
    document.getElementById("myForm").style.display = "block";
    console.log("hi here")
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";

  }
