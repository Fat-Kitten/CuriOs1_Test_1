var imgLocation="";
const myWorker = new Worker("script/OPFSA.js");
const fcButton = document.getElementById("navbarCourse");
const varPage = document.getElementById("course_main");

document.addEventListener("DOMContentLoaded", () => {
            varPage.innerHTML ="";
            courseFetch();
  });

function courseFetch() {
  fun_name = "readFromFile";
  var myArray=[];
  let messsage_frame = {    
                          fileName : file_name,
                          funName  : fun_name,
                          dataObj  : "",
                       };            
  myWorker.postMessage(messsage_frame);
  myWorker.onmessage = (e) => {
      myArray = e.data.split("\n");
        const courseArray =myArray;
        console.log(courseArray);
        let jsonArray = [];
        for (let i = 0; i < courseArray.length; i++) {
          jsonArray[i] = JSON.parse(courseArray[i]);
          console.log(jsonArray[i].thumbnail_link);
          varPage.innerHTML+=`<div id="${jsonArray[i].course_name}${i}" class ="courseSpecific">
          <div class ="img">
          <img src ="/Users/bakednoodle2/Desktop/${jsonArray[i].thumbnail_link}" width="360" height="300" style="border-radius:10px;"> 
          </div>
          <div class = "courseInfo">
              <p id = "courseName1_courseName">${jsonArray[i].course_name}</p>
              <p id = "courseName1_commDate">${jsonArray[i].commencement_date}</p>
              <p id = "courseName1_insName">${jsonArray[i].instructor_name}</p>
              <p id = "courseName1_des">${jsonArray[i].course_description}</p>
          </div>    
      </div>`; 
        }    
  }
}
