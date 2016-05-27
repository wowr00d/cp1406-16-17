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
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
    if(Email.value.match(mailformat)){
      document.memberForm.emailTick.src = "images/tick.png";
      document.memberForm.emailTick.alt = "tick";
      document.getElementById("emailErrMsg").innerHTML = "Perfect"  
      return;
    }
    else{
      document.memberForm.emailTick.src = "images/cross.png";
      document.memberForm.emailTick.alt = "cross";
      document.getElementById("emailErrMsg").innerHTML = "Not a valid e-mail address"
         
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
  if(mobile.value.match(mobileno)){  
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
function concessionEntered(typeValidation){
  if(isNaN(typeValidation.value)){
    document.memberForm.typeValidation.src = "images/cross.png";
    document.memberForm.typeValidation.alt = "cross";
    document.getElementById("typeValidationErrMsg").innerHTML = "Please enter only digits";
  }
  else if(typeValidation.value ==''){
    document.memberForm.typeValidation.src = "images/cross.png";
    document.memberForm.typeValidation.alt = "cross";
    document.getElementById("typeValidationErrMsg").innerHTML = "Please enter only digits";
  }
  else{
    document.memberForm.typeValidation.src = "images/tick.png";
    document.memberForm.typeValidation.alt = "tick";
    document.getElementById("typeValidationErrMsg").innerHTML = " Perfect";
  }
}


function familyTicket(){
   if(memberForm.Family.checked==true){
    document.getElementById("kidname1").disabled =false;
    document.getElementById("kidname2").disabled =false;
    document.getElementById("kidname3").disabled =false;
    document.getElementById("kidDate1").disabled=false;
    document.getElementById("kidDate2").disabled=false;
    document.getElementById("kidDate3").disabled=false;
    document.getElementById("kidname1").innerHTML ="";
    document.getElementById("kidname2").innerHTML ="";
    document.getElementById("kidname3").innerHTML ="";
    document.getElementById("kidDate1").innerHTML="";
    document.getElementById("kidDate2").innerHTML="";
    document.getElementById("kidDate3").innerHTML="";
    document.getElementById("type").disabled =true;
  }
}
function notfamily(){
  if(memberForm.Adult.checked==true || memberForm.Student.checked==true || memberForm.Concession.checked ==true){
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
    document.getElementById("type").disabled =false;
    return
  }
  else if(memberForm.Concession.checked==true){
    document.getElementById("type").disabled=false
  }
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
  var BenefactorForm = document.getElementById('BenefactorForm');
  var PhoneCheck = document.getElementById('Phone');
  var PhoneLength = PhoneCheck.toString('PhoneCheck');
  var MobileCheck = document.getElementById('mobile');
  var MobileLength = MobileCheck.toString('MobileCheck');
  if(memberForm.name.value == ''){
    return
  }
  else if(memberForm.Renewal.checked == false && memberForm.New.checked == false){
    return
  }
  else if(memberForm.cash.checked == false && memberForm.cheque.checked ==false && memberForm.debit.checked ==false){
    return
  }
  else if(PhoneCheck.value != "" && isNaN(PhoneCheck.value)){ //doesnt validate for 0 digits, since its not a required field. only validates if there is somethign in there incorrect.
      alert('phone nan');
      return
    }
  else if(PhoneLength.length >= 1 && PhoneLength.length < 10){
    alert('phone not right size');
    return
  }
  else if(MobileCheck.value != "" && isNaN(MobileCheck.value)){ //doesnt validate for 0 digits, since its not a required field. only validates if there is somethign in there incorrect.
    alert('mobile nan');
    return
  }
  else if(MobileLength.length >= 1 && MobileLength.length < 10){
    alert('mobile not right size');
    return
  }
  memberForm.submit()
  }


function reset(){
  document.getElementById('BenefactorForm').reset()
  document.getElementById("nameErrMsg").innerHTML = "";
  document.getElementById("DonationMsg").innerHTML = "";
  document.getElementById("emailErrMsg").innerHTML = "";
  document.getElementById("phoneErrMsg").innerHTML = "";
  document.getElementById("mobileErrMsg").innerHTML = ""; 
}

