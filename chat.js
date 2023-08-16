//selecting all required elements
const dropArea = document.querySelector(".drag-area"),
input = dropArea.querySelector("input");
let file; //this is a global variable and we'll use it inside multiple functions
var fileobj;


function browseFile(){
  input.click(); //if user click on the button then the input also clicked
  file_browse();
}

input.addEventListener("change", function(){
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file = this.files[0];
  dropArea.classList.add("active");
  showFile(); //calling function
});


//If user Drag File Over DropArea
dropArea.addEventListener("dragover", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  dropArea.classList.add("active");
  dragText.textContent = "(Release to upload file)";
});

//If user leave dragged File from DropArea
dropArea.addEventListener("dragleave", ()=>{
  dropArea.classList.remove("active");
  dragText.textContent = "(Drag and drop your file here)";
});

//If user drop File on DropArea
dropArea.addEventListener("drop", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file = event.dataTransfer.files[0];
  showFile(); //calling function
});

function showFile(){
  let fileType = file.type; //getting selected file type
  let validExtensions = ["text/plain"]; //adding some valid image extensions in array
  if(validExtensions.includes(fileType)){ //if user selected file is an image file
    let fileReader = new FileReader(); //creating new FileReader object
    fileReader.onload = ()=>{
      let fileURL = fileReader.result; //passing user file source in fileURL variable
      let txtTag = `<iframe src="${fileURL}" alt="">`; //creating an tg tag and passing user selected file source inside src attribute
      dropArea.innerHTML = txtTag; //adding that created txt tag inside dropArea container

      /*for(let i = 0; i<) parsing the text file */
    }
    fileReader.readAsDataURL(file);
  }else{
    alert("This is not a text file!");
    dropArea.classList.remove("active");
    dragText.textContent = "(Drag and drop your file here)";
  }
}


function upload_file(e) {
    e.preventDefault();
    fileobj = e.dataTransfer.files[0];
    js_file_upload(fileobj);
}

function file_browse() {
  document.getElementById('file').onchange = function() {
      fileobj = document.getElementById('file').files[0];
      js_file_upload(fileobj);
  };
}


function js_file_upload(file_obj) {
    if(file_obj != undefined) {
        var form_data = new FormData();                  
        form_data.append('file', file_obj);
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", "upload.php", true);
        xhttp.onload = function(event) {
           
            if (xhttp.status == 200) {
                console.log("Uploaded!");
            } else {
               alert(xhttp.status);
            }
        }
 
        xhttp.send(form_data);
    }
}

function findTopKChattyPeople(logs, k){
    
}