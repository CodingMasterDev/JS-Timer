// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');


//implement timer
setTimeout(()=>{
    let date = new Date();
    appDiv.innerHTML = date;
},1000);