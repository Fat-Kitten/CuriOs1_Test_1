const formElem = document.querySelector("form");
formElem.addEventListener("submit", (e) => { // on form submission, prevent default
    e.preventDefault(); 
    let form_dataObj = {
        commencement_date : formElem.querySelector('input[name="commencement_date"]').value,
        course_name : formElem.querySelector('input[name="course_name"]').value,
        instructor_name : formElem.querySelector('input[class="form_inp_in"]').value, 
        course_description : formElem.querySelector('textarea[class="form_inp_cd"]').value, 
        thumbnail_link : formElem.querySelector('input[type="file"]').files[0].name,
    }; 
    formsubmitted(form_dataObj); 
});
