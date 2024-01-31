var prev_selection = null;
const month_init = 9;
var month = month_init;
const year_init = 2023;
var year_main = year_init;
var year;
var date_ele;
var flag = 0;
window.addEventListener("load", (event) => {
    initializeDate(month_init,year_init);
  });

const calender_dates = document.getElementsByTagName("li");
for(let i=0; i<=calender_dates.length; i++){
calender_dates[i].addEventListener("click", displayDate);
}



function displayDate(event){
    if(prev_selection == null){
    prev_selection = event.target;
    prev_selection.style.color = "blue";
    }else{
    event.target.style.color = "blue";
    prev_selection.style.color = "red";
    prev_selection = event.target;
    }
    if(event.target.className=="prev"){
        month=month-1;
    }else if(event.target.className=="next"){
    month=month+1;}
    document.querySelectorAll("div ul li:nth-child(3)")[0].innerText = `${month_en[month%12]}\n${year_main}`;
    date_ele = document.getElementsByClassName("days")[0].children;
    const arr = document.querySelectorAll("div ul li:nth-child(3)")[0].innerText.split("\n") 
    console.log(arr);
    updateDateEle(arr[0],parseInt(arr[1]),date_ele);  
}

function updateDateEle(_monthf,_yearf,date_element){
    for (let count = 0 ; count<40 ; count++){
            date_element[count].innerText = "";
    }
    month_year_des(_month_en[_monthf], _yearf);
    for (let count = 0 ; count<39 ; count++){
        if(count < _week_en[description.start_week_month]){
            date_element[count].innerText = "";
        }else if( count - _week_en[description.start_week_month] < parseInt(description.end_date)){
                date_element[count].innerText = count - _week_en[description.start_week_month] +1 ;  
            } 
        }
    }


function initializeDate(init_month,init_year){
    document.querySelectorAll("div ul li:nth-child(3)")[0].innerText = `${month_en[init_month]}\n${init_year}`;
    let date_ele1 = document.getElementsByClassName("days")[0].children;
    updateDateEle(month_en[init_month],init_year,date_ele1);
}