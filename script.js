// https://codepen.io/mobifreaks/pen/LIbca
//https://www.w3schools.com/howto/howto_js_remove_class.asp
//import {bot1} from './files/bot1.js';
// 
$(document).ready(()=>{
    /* Show Uploaded image Preview */
    uploadImg = async(input) =>{
        if(input.files && input.files[0]){
            let reader = new FileReader();
            let imgTitle = document.getElementById("imgName");
            let predictions = document.getElementById("predictions");
            reader.onload = async function(e){
                $.ajax({
                    type:"POST",
                    processData : false,
                    contentType : false,
                    url:"getPrediction",
                    data: ('photo',input.files[0]),
                    succes:(data) => {
                        console.log(data);
                    }
                });
                predictions.innerHTML = `Labels are: `;
                document.getElementById('imgPreview').setAttribute('src', e.target.result);
                imgTitle.innerHTML =  `Current image is: <em>${input.files[0].name}</em>`;
                imgTitle.removeAttribute('hidden');
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
});
