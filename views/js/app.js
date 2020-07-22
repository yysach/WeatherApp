
console.log("here is the client side script");

const weatherForm=document.querySelector('form');
const search = document.querySelector('input');
const output1 = document.querySelector('#message1');
const output2 = document.querySelector('#message2');


weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const location = search.value;
    output1.textContent="Loading....";
    output2.textContent=''
    fetch('/home?address='+location).then((response)=>{

        response.json().then((data)=>{
            if(data.error==''){
                output1.textContent=location;
                output2.textContent='here is the weather report';
            }
            else{
              
                
            }
        })
        .catch((error)=>{
            output1.textContent='';
            output2.textContent=data.error;
        })
    })
})

