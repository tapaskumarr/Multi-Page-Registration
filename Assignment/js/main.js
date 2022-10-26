const form = document.getElementById('form');
const fnamech = document.getElementById('fnamech');
const lnamech = document.getElementById('lnamech');
const emailch = document.getElementById('emailch');
const ffnamech = document.getElementById('ffnamech');
const flnamech = document.getElementById('flnamech');
const mfnamech = document.getElementById('mfnamech');
const mlnamech = document.getElementById('mlnamech');
const nationalitych = document.getElementById('nationalitych');
const streetaddressch = document.getElementById('streetaddressch');
const cityaddressch = document.getElementById('cityaddressch');
const countryaddressch = document.getElementById('countryaddressch');
const telhomech = document.getElementById('telhomech');
const telmobilech = document.getElementById('telmobilech');
const errorElement = document.getElementById('error_msg');

const nameCheck = /^[A-z.&() ]+$/;
let emailcheck =  /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;
const ffnamecheck = /^[A-z.&() ]+$/;
const flnamecheck = /^[A-z.&() ]+$/;
const mfnamecheck = /^[A-z.&() ]+$/;
const mlnamecheck = /^[A-z.&() ]+$/;
const nationalitycheck = /^[a-zA-Z\\s]*$/;
const streetaddresscheck = /^[#.0-9a-zA-Z\s,-]+$/;
const cityaddresscheck = /^[A-z.&() ]+$/;
const countryaddresscheck = /^[A-z.&() ]+$/;
const telhomecheck = /^[0]?[6789]\d{9}$/;
const telmobilecheck = /^[0]?[6789]\d{9}$/;



form.addEventListener('submit', (e) => {
  let message = [];
  if (fnamech.value === '' || !nameCheck.test(fnamech.value)) {
    message.push('First name is invalid');
  }
  if (lnamech.value === '' || !nameCheck.test(lnamech.value)) {
    message.push('Last name is invalid');
  }
  if (emailch.value === '' || emailcheck.test(emailch)) {
    message.push('Email is invalid');
  }
  if (ffnamech.value === '' || !ffnamecheck.test(ffnamech.value)) {
    message.push('Father first name is invalid');
  }
  if (flnamech.value === '' || !flnamecheck.test(flnamech.value)) {
    message.push('Father last name is invalid ');
  }
  if (mfnamech.value === '' || !mfnamecheck.test(mfnamech.value)) {
    message.push('Mother first name is invalid');
  }
  if (mlnamech.value === '' || !mlnamecheck.test(mlnamech.value)) {
    message.push('Mother last name is invalid ');
  }
  if (nationalitych.value === '' || !nationalitycheck.test(nationalitych.value)) {
    message.push('Nationality invalid ');
  }
  if (streetaddressch.value === '' || !streetaddresscheck.test(streetaddressch.value)) {
    message.push('Street address is invalid ');
  }
  if (cityaddressch.value === '' || !cityaddresscheck.test(cityaddressch.value)) {
    message.push('City address is invalid ');
  }
  if (countryaddressch.value === '' || !countryaddresscheck.test(countryaddressch.value)) {
    message.push('City address is invalid ');
  }
  if (telhomech.value === '' || !telhomecheck.test(telhomech.value)) {
    message.push('Home no. invalid ');
  }
  if (telmobilech.value === '' || !telmobilecheck.test(telmobilech.value)) {
    message.push('Mobile no. invaild ');
  }
  if (message.length > 0) {
    errorElement.style.display = 'block';
    setTimeout(() => {
      errorElement.style.display = 'none';
    }, 5000);
    errorElement.innerText = message.join(', ');
  }else{
    window.location.href='schoolinfo.html';
  }
  e.preventDefault();
});

//   if (fnamecheck.test(fnamech)) {
//     document.getElementById('fnameerror').innerHTML = '';
//   } else {
//     document.getElementById('fnameerror').innerHTML = 'Fast name invalid';
//   }
//   // if (lnamecheck.test(lnamech)) {
//   //     document.getElementById('lnameerror').innerHTML = '';
//   // } else {
//   //     document.getElementById('lnameerror').innerHTML = 'Last name invalid';
//   // }
//   // if (emailcheck.test(emailch)) {
//   //     document.getElementById('emailerror').innerHTML = '';
//   // } else {
//   //     document.getElementById('emailerror').innerHTML = 'Email invalid';
//   // }
//   // if (ffnamecheck.test(ffnamech)) {
//   //     document.getElementById('ffnameerror').innerHTML = '';
//   // } else {
//   //     document.getElementById('ffnameerror').innerHTML =
//   //         "Father's first name invalid";
//   // }
//   // if (flnamecheck.test(flnamech)) {
//   //     document.getElementById('flnameerror').innerHTML = '';
//   // } else {
//   //     document.getElementById('flnameerror').innerHTML =
//   //         "Father's last name invalid";
//   //     return false;
//   // }
//   // if (mfnamecheck.test(mfnamech)) {
//   //     document.getElementById('mfnameerror').innerHTML = '';
//   // } else {
//   //     document.getElementById('mfnameerror').innerHTML =
//   //         "Mother's first name invalid";
//   //     return false;
//   // }
//   // if (mlnamecheck.test(mlnamech)) {
//   //     document.getElementById('mlnameerror').innerHTML = '';
//   // } else {
//   //     document.getElementById('mlnameerror').innerHTML =
//   //         "Mother's last name invalid";
//   //     return false;
//   // }
//   // if (nationalitycheck.test(nationalitych)) {
//   //     document.getElementById('nationalityerror').innerHTML = '';
//   // } else {
//   //     document.getElementById('nationalityerror').innerHTML =
//   //         'Nationality invalid';
//   //     return false;
//   // }
//   // if (streetaddresscheck.test(streetaddressch)) {
//   //     document.getElementById('streetaddresserror').innerHTML = '';
//   // } else {
//   //     document.getElementById('streetaddresserror').innerHTML =
//   //         'Street address invalid';
//   //     return false;
//   // }
//   // if (cityaddresscheck.test(cityaddressch)) {
//   //     document.getElementById('cityaddresserror').innerHTML = '';
//   // } else {
//   //     document.getElementById('cityaddresserror').innerHTML =
//   //         'City address invalid';
//   //     return false;
//   // }
//   // if (countryaddresscheck.test(countryaddressch)) {
//   //     document.getElementById('countryaddresserror').innerHTML = '';
//   // } else {
//   //     document.getElementById('countryaddresserror').innerHTML =
//   //         'Country address invalid';
//   //     return false;
//   // }
//   // if (telhomecheck.test(telhomech)) {
//   //     document.getElementById('telhomeerror').innerHTML = '';
//   // } else {
//   //     document.getElementById('telhomeerror').innerHTML = 'Telephone No. invalid';
//   //     return false;
//   // }
//   // if (telmobilecheck.test(telmobilech)) {
//   //     document.getElementById('telmobileerror').innerHTML = '';
//   // } else {
//   //     document.getElementById('telmobileerror').innerHTML = 'Mobile No. invalid';
//   //     return false;
//   // }
// }

// const fnamech = document.getElementById('fnamech').value;
// console.log('fnamech: ', fnamech);
// const main = document.getElementById('main');
// console.log('main: ', main);
// const form = document.getElementById('htmlform');
// const lnamech = document.getElementById('lnamech');
// const emailch = document.getElementById('emailch');
// const ffnamech = document.getElementById('ffnamech');
// const flnamech = document.getElementById('flnamech');
// const mfnamech = document.getElementById('mfnamech');
// const mlnamech = document.getElementById('mlnamech');
// const nationalitych = document.getElementById('nationalitych');
// const streetaddressch = document.getElementById('streetaddressch');
// const cityaddressch = document.getElementById('cityaddressch');
// const countryaddressch = document.getElementById('countryaddressch');
// const telhomech = document.getElementById('telhomech');
// const telmobilech = document.getElementById('telmobilech');

// form.addEventListener('submit', (e) => {
//   console.log('baklol', fnamech);
// });
