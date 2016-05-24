/*make a progress bar for completion*/
/*disable option for things which are relevant*/


function nameEntered(name) {
    if (name.value != "") {
        document.memberForm.nameTick.src = "images/tick.png";
        document.memberForm.nameTick.alt = "tick";
        document.getElementById("nameErrMsg").innerHTML = "Perfect";
         
    }
    else {
        document.memberForm.nameTick.src = "images/cross.png";
        document.memberForm.nameTick.alt = "cross";
        document.getElementById("nameErrMsg").innerHTML = "Please enter your first and last name."
        document.getElementById("submit").disabled = true;
         return;
    }
}


function emailEntered(Email) {
    var x = document.forms["memberForm"]["Email"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        document.memberForm.emailTick.src = "images/cross.png";
        document.memberForm.emailTick.alt = "cross";
        document.getElementById("emailErrMsg") = "Not a valid e-mail address"
         return;
    }
    else{
        document.memberForm.emailTick.src = "images/tick.png";
        document.memberForm.emailTick.alt = "tick";
        document.getElementById("emailErrMsg") = "Perfect"
         
    }
}

function phoneEntered(Phone) {  
  var phoneno = /^\d{10}$/;
  if(Phone.value.match(phoneno)){  
      document.memberForm.phoneTick.src = "images/tick.png";
      document.memberForm.phoneTick.alt = "tick";
      document.getElementById("phoneErrMsg").innerHTML = "Perfect";
       
  }  
  else{  
      document.memberForm.phoneTick.src = "images/cross.png";
      document.memberForm.phoneTick.alt = "cross";
      document.getElementById("phoneErrMsg").innerHTML = "Please enter only 10 digits without spacing or other special characters";
      return;
  }  
} 

function mobileEntered(mobile) {  
  var mobileno = /^\d{10}$/;
  if(Mobile.value.match(phoneno)){  
      document.memberForm.mobileTick.src = "images/tick.png";
      document.memberForm.mobileTick.alt = "tick";
      document.getElementById("mobileErrMsg").innerHTML = "Perfect";
       
  }  
  else{  
      document.memberForm.mobileTick.src = "images/cross.png";
      document.memberForm.mobileTick.alt = "cross";
      document.getElementById("mobileErrMsg").innerHTML = "Please enter only 10 digits without spacing or other special characters";
      return;
}   

  }  


function anon(anonymous) {
  document.getElementById("recognition").disabled = true;
  recognition.value = null;
}
function anonUnDisable(anonymous) {
  document.getElementById("recognition").disabled = false;
}

function familyTicket(){
  document.getElementById("type").disabled =true;
}
function notfamily(){
  document.getElementById("kidname1").disabled =true;
  document.getElementById("kidname2").disabled =true;
  document.getElementById("kidname3").disabled =true;
  document.getElementById("kidDate1").disabled=true;
  document.getElementById("kidDate2").disabled=true;
  document.getElementById("kidDate3").disabled=true;
  document.getElementById("kidname1").innerHTML ="";
  document.getElementById("kidname2").innerHTML ="";
  document.getElementById("kidname3").innerHTML ="";
  document.getElementById("kidDate1").innerHTML="";
  document.getElementById("kidDate2").innerHTML="";
  document.getElementById("kidDate3").innerHTML="";
}
function disablePlayReg(){
  document.getElementById("instrument").disabled=true;
  document.getElementById("qualification").disabled=true;
  document.getElementById("experience").disabled=true;
  document.getElementById("instrument").disabled="";
  document.getElementById("qualification").disabled="";
  document.getElementById("experience").disabled="";

}

function validate(){
  if(memberForm.name.value == ''){
            return
        }
  if(memberForm.Donation.value ==''){
    return
  }
  if(isNaN(memberForm.Donation.value)){
    return
  }
  if(memberForm.Email.value=''){
    return
  }
  if(memberForm.Phone.value=''){
    return
  }
  if(isNaN(memberForm.Phone.value)){
    return
  }
  if(memberForm.Phone.length!= 10){
    return
  }
   if(memberForm.mobile.value=''){
    return
  }
  if(isNaN(memberForm.mobile.value)){
    return
  }
  if(memberForm.mobile.length!=10){
    return
  }
  if(memberForm.instrument.value=''){
    return
  }
  if(memberForm.qualification.value=''){
    return
  }
  if(memberForm.experience.value=''){
    return
  }
  memberForm.submit()
  }


function reset(){
  memberForm.reset()
}

