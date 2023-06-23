const course_button = document.getElementById("navbarCourse");
const course_button2 = document.getElementById("test");
const file_name = "CuriOs1_Course_Details";
let dataobj ={};
let strfy_dataObj = "";

function formsubmitted(dataObj_) {
    dataobj = dataObj_;
    strfy_dataObj = JSON.stringify(dataobj);
    fun_name = "writeToFile";
    const myWorker = new Worker("script/OPFSA.js");
    let messsage_frame = {    
                            fileName : file_name,
                            funName  : fun_name,
                            dataObj  : strfy_dataObj,
                         };            
    myWorker.postMessage(messsage_frame);
    myWorker.onmessage = async (e) => {
        console.log(e.data);
        if(e.data == strfy_dataObj){
            console.log("course successfully created");
        }
    }
}





