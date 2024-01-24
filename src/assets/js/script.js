window.onload = selectTitles;

function selectTitles(){
    const questions = document.getElementsByClassName("faq__question");
 
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener("click", 
            ()=>{
                questions[i].classList.toggle("selected");
            });
    }
}