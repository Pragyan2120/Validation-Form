function firstName() {
  let letters = /^[a-zA-z]+$/;
  let firstname = document.getElementById('naam').value;
  if (firstname.length == 0) {
    document.getElementById('err1').innerHTML = "*It can't be Empty";
  } else if (firstname.length > 15) {
    document.getElementById('err1').innerHTML = "*Too long Name";
  } else if (!firstname.match(letters)) {
    document.getElementById('err1').innerHTML = "*Enter in correct format";
  } else {
    document.getElementById('err1').innerHTML = " ";
  }
}

function lastName() {
  let lastname = document.getElementById('lnaam').value;
  if (lastname.length == 0) {
    // console.log("*It can't be Empty");
    document.getElementById('err2').innerHTML = "*It can't be Empty";
  } else if (lastname.length > 10) {
    document.getElementById('err2').innerHTML = "*Too long Name";
  } else {
    document.getElementById('err2').innerHTML = " ";
  }
}

function email() {
  let mailid = document.getElementById("mail").value;
  if (mailid.length == 0) {
    document.getElementById('err3').innerHTML = "*It can't be Empty"
  } else if (!mailid.match(/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/)) {
    document.getElementById("err3").innerHTML = "*Enter in correct format"
  } else {
    document.getElementById('err3').innerHTML = " ";
  }
}

function phnno() {
  let phonenum = document.getElementById('phn').value;
  if (phonenum.length == 0) {
    document.getElementById('err4').innerHTML = "*It can't be Empty"
  } else if (!phonenum.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)) {
    document.getElementById("err4").innerHTML = "*Enter in correct format"
  } else {
    document.getElementById('err4').innerHTML = " ";
  }
}

function messagecontent() {
  let message = document.getElementById("msg").value;
  if (message.length < 10) {
    document.getElementById("err5").innerHTML = "*Enter atleast 10 characters"
  } else {
    document.getElementById('err5').innerHTML = " ";
  }
}

function Validation() {
  let firstname = document.getElementById('naam').value;
  let lastname = document.getElementById('lnaam').value;
  let mailid = document.getElementById("mail").value;
  let phonenum = document.getElementById('phn').value;
  let message = document.getElementById("msg").value;
  if (firstname.length == 0) {
    document.getElementById('err1').innerHTML = "*It can't be Empty";
  }
  if (lastname.length == 0) {
    document.getElementById('err2').innerHTML = "*It can't be Empty";
  }
  if (mailid.length == 0) {
    document.getElementById('err3').innerHTML = "*It can't be Empty";
  }
  if (phonenum.length == 0) {
    document.getElementById('err4').innerHTML = "*It can't be Empty";
  }
  if (message.length < 10) {
    document.getElementById("err5").innerHTML = "*Enter atleast 10 characters";
  }

  let arr = [firstname, lastname, mailid, phonenum, message];
  console.log(arr);
}
