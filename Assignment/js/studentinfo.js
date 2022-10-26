const form = document.getElementById('form');
const hscnamech = document.getElementById('hscnamech');
const hscboardch = document.getElementById('hscboardch');
const scorehscch = document.getElementById('scorehscch');
const sscinstich = document.getElementById('sscinstich');
const sscboardch = document.getElementById('sscboardch');
const scoresscch = document.getElementById('scoresscch');
const currperch = document.getElementById('currperch');
const currenteduch = document.getElementById('currenteduch');
const overallperch = document.getElementById('overallperch');
const currentbackch = document.getElementById('currentbackch');

const errorElement = document.getElementById('error_msg');

const hsccheck = /^[A-z.&() ]+$/;
const scorehsccheck =  /^[0-9]*$/;
const sscinsticheck = /^[A-z.&() ]+$/;
const sscboardcheck = /^[a-zA-Z\\s]*$/;
const scoressccheck = /^[0-9]*$/;
const curpercheck = /^[a-zA-Z\\s]*$/;
const currenteducheck = /^[A-z.&() ]+$/;
const overallpercheck = /^[0-9]*$/;
const currentbackcheck = /^[a-zA-Z\\s]*$/;


form.addEventListener('submit', (e) => {
  let message = [];
  if (hscnamech.value === '' || !hsccheck.test(hscnamech.value)) {
    message.push('Fill HSC institute name');
  }
  if (hscboardch.value === '' || !hsccheck.test(hscboardch.value)) {
    message.push('Fill HSC board name');
  }
  if (scorehscch.value === '' || scorehsccheck.test(scorehscch)) {
    message.push('Fill HSC percentage');
  }
  if (sscinstich.value === '' || !sscinsticheck.test(sscinstich.value)) {
    message.push('Fill SSC institute name');
  }
  if (sscboardch.value === '' || !sscboardcheck.test(sscboardch.value)) {
    message.push('Fill SSC board name');
  }
  if (scoresscch.value === '' || !scoressccheck.test(scoresscch.value)) {
    message.push('Fill SSC percentage');
  }
  if (currperch.value === '' || !curpercheck.test(currperch.value)) {
    message.push('Fill current academic status i.e Yes/No');
  }
  if (currenteduch.value === '' || !currenteducheck.test(currenteduch.value)) {
    message.push('Fill current educational institute name ');
  }
  if (overallperch.value === '' || !overallpercheck.test(overallperch.value)) {
    message.push('Fill overall percentage');
  }
  if (currentbackch.value === '' || !currentbackcheck.test(currentbackch.value)) {
    message.push('Fill current backlogs');
  }
 
  if (message.length > 0) {
    errorElement.style.display = 'block';
    setTimeout(() => {
      errorElement.style.display = 'none';
    }, 5000);
    errorElement.innerText = message.join(', ');
  }else{
    window.location.href='upload.html';
  }
  e.preventDefault();
});