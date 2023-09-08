var textNombre = document.querySelector('#nombre')
var deleteUser = document.querySelector('#delete')
var textLikes = document.querySelector('#numLikes')
var textProfile = document.querySelector('#numProfile')



function editProfile(){
    textNombre.innerText = "Frontend Developer"

}


function deleteProfile(){
    deleteUser.remove();

    var deleteConnection = textLikes.innerText;
    deleteConnection = parseInt(deleteConnection) - 1;
    textLikes.innerText = deleteConnection;
}


function sumarProfile(){
   var valorLikes = textProfile.innerText;
   console.log(valorLikes)

    var sumarConnection = textProfile.innerText;
    sumarConnection = parseInt(sumarConnection) +1;
    textProfile.innerText = sumarConnection; 
}