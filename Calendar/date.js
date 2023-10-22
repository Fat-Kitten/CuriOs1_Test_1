var month_en = {
    0:"January",
    1:"February",
    2:"March",
    3:"April" ,
    4:"May" ,
    5:"June" ,
    6:"July" ,
    7:"August", 
    8:"September", 
    9:"October" ,
    10:"November" ,
    11:"December" ,
}
var week_en = {
    0:"Monday" ,
    1:"Tuesday" ,
    2:"Wednessday" ,
    3:"Thursday" ,
    4:"Friday" ,
    5:"Saturday" ,
    6:"Sunday" ,
}

var _month_en = {
    January:0,
    February:1,
    March:2,
    April:3 ,
    May:4 ,
    June:5,
    July:6 ,
    August:7, 
    September:8, 
    October:9 ,
    November:10 ,
    December:11 ,
}
var _week_en = {
    Monday:0 ,
    Tuesday:1 ,
    Wednessday:2 ,
    Thursday:3 ,
    Friday:4 ,
    Saturday:5 ,
    Sunday:6 ,
}

var description = {
    start_week_year : "",
    end_date : " ",
    start_week_month:"",
}

var initial_year = 2020;
var intial_start_week = "Wednessday";

var start_week_feb;
var start_week_mar;



function month_year_des(month, year){
    description.start_week_year = week_en[(_week_en["Wednessday"] + (year - 2020) + noLeapYears(year)) % 7];   
    start_week_feb = ((2 + (year - 2020) + noLeapYears(year)) % 7) + 3;


    if (isLeap(year)){
        start_week_mar = start_week_feb+1;
    }else{
        start_week_mar = start_week_feb;
    }
description.start_week_month = week_en[getStartWeek(month)];  

switch(month){
case 0: case 2: case 4: case 6: case 7: case 11: case 9: 
    description.end_date = 31;
    break;

case 3: case 5: case 8: case 10:
    description.end_date = 30;
    break;

case 1: if(isLeap(year)){description.end_date=29}else{description.end_date=28}}
}

function getStartWeek(__month){ 
    let start_week_apr_aug = 0; 
    let start_week_sept_dec = 0;
    switch(__month){
        case 0 : return _week_en[description.start_week_year]%7;
        break;
        case 1 : return start_week_feb%7;
        break;
        case 2 : return start_week_mar%7;
        break;
    
        case 3 : case 4: case 5: case 6: case 7:
            
            
                for(let itr = 3; itr<=__month; itr++){
                    if(itr%2 == 1){
                        if(itr==3){
                    start_week_apr_aug = start_week_apr_aug + start_week_mar + 3;}
                    else{
                        start_week_apr_aug = start_week_apr_aug + 3;}
                    }
                    
                    if(itr%2==0){
                        start_week_apr_aug = start_week_apr_aug + 2;  
                         
                    }}
                console.log(start_week_apr_aug);
                return start_week_apr_aug%7;
                break;
    
        case 8: case 9: case 10: case 11:
            
            for(let itr = 8; itr<=__month; itr++){
                if(itr%2 == 0 && itr == 8){
                start_week_sept_dec = start_week_sept_dec + getStartWeek(7) + 3;
                }
                else if(itr%2 ==0){
                    start_week_sept_dec = start_week_sept_dec + 3;  
                }
                else if(itr%2== 1){
                    start_week_sept_dec = start_week_sept_dec + 2;    
                }
            }
            console.log(start_week_sept_dec);
        return start_week_sept_dec%7; 
    }

}
    function isLeap(_year){
        if ( _year%400 == 0 || (_year%4==0 && _year%100 !=0)){
            return true;
        }
        else return false
    }

    function noLeapYears(_year){
        let count =1;
        for(let y = _year-1; y > 2020; y--){
            if(isLeap(y)){
                count=count+1;
            }
        }
        return count;
        }