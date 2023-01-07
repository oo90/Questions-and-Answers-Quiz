function check() {
  let c=0;
 let q1=document.quiz.question1.value;
 let q2=document.quiz.question2.value;
 let q3=document.quiz.question3.value;
 let q4 = document.quiz.question4.value;
 let result = document.getElementById("result");

 /*This is a comment
 // let quiz = document.getElementById("quiz");
 use the above code to get your result on the next page
 */
 if (q1=="Elephant") { c++ }
 if (q2=="Jerusalem") { c++ }
 if (q3=="Motor Racing") { c++ }
 if (q4 == "Tennessee") { c++ }

 /*This is a comment
 // quiz.style.display="none"
 use the above code to get your result on the next page
 */
 
 if (c <= 3) {
  result.textContent=`Your final result is ${c}. Please try again`
 } else {
  result.textContent=`Your result result is ${c}. Well done `
 }
}
