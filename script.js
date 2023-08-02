

let toastBox = document.getElementById("toastBox");

let successMsg = 'Successfully Submitted';
let errorMsg = 'Please fix the error and try again!';
let invalidMsg = 'Invalid input, pls check again';

function showToast(msg){
    let toast = document.createElement('div');
    toast.classList.add("toast");
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if(msg.includes('error')){
        toast.classList.add('error');
    }
    if(msg.includes('Invalid')){
        toast.classList.add('invalid')
    }
    if (msg === successMsg){
        toast.classList.add('valid')
    }

    setTimeout(()=>{
        toast.remove();
    }, 6000);
} 

