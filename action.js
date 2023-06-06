
let random_no1 = Math.floor(Math.random() * 6)+1;
let randomdice_image = "dice" +random_no1 +".png";
let random_source = "images/" +randomdice_image;

let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",random_source);

let random_no2 = Math.floor(Math.random() * 6)+1;
let randomdice_image2 = "dice" +random_no2 +".png";
let random_source2 = "images/" +randomdice_image2;

let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",random_source2);

if(random_no1 > random_no2)
{
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins";
}
else if(random_no1 === random_no2)
{
    document.querySelector("h1").innerHTML="Draw";
}
else
{
    document.querySelector("h1").innerHTML="🚩 Player 2 wins";
}
