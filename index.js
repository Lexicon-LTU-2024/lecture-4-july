// ########## getComputedStyle ##########
const p = document.querySelector(".paragraph");
const styles = window.getComputedStyle(p);
console.log(styles.color);
console.log(styles.backgroundColor);

console.log("window: ", window);

// ########## removeChild, replaceChild, children ##########
// const todoList = document.querySelector(".todo-list");
// const children = todoList.children;
// console.log(children);

// todoList.removeChild(children[1]);

// // Let's use replace
// const newTodoToInsert = document.createElement("p");
// newTodoToInsert.innerText = "donate 100k dollars to an italian refugee in Sweden";

// const todoToReplace = children[0]; // Earn a millon dollars

// todoList.replaceChild(newTodoToInsert, todoToReplace);

// ########## inserAdjacentHTML ##########
// const newTodo = `<p>Become CEO</p>`;

// const todoList = document.querySelector(".todo-list");
// todoList.insertAdjacentHTML("afterbegin", newTodo);
// todoList.insertAdjacentHTML("beforeend", newTodo);

// ########## innerHTML ##########
// const innerHtmlOfDiv = `<p class="paragraph">This is a p tag inserted with innerHTML</p>`;
// const div = document.querySelector(".content");
// div.innerHTML = innerHtmlOfDiv;

// const p = document.querySelector(".paragraph");
// console.log(p);

// ########## getElementById ##########
// const mainContainer = document.getElementById("main-container");
// console.log(mainContainer);

// ########## getElementByClassname ##########
// const pTags = document.getElementsByClassName("content");
// console.log(pTags);

// ########## querySelector ##########
// The argument is just a css selector, exactly the same as you use in a stylesheet
// const item = document.querySelector(".item");
// console.log(item);

// const mainSection = document.querySelector("#main-section");
// console.log(mainSection);

// // alternative 1 ( searching from the top )
// const nestedItem = document.querySelector("#main-section .item");
// console.log(nestedItem);

// // alternative 2 ( searching from parent element )
// const nestedItem2 = mainSection.querySelector(".item");
// console.log(nestedItem2);

// ########## querySelectorAll ##########

// const paragraphs = document.querySelectorAll(".para");
// console.log(paragraphs);

// const firstParagraph = paragraphs[0];
// console.log(firstParagraph);

// ########## createElement, appendChild, classList ##########
// const article = document.createElement("article");

// // Let's add a text
// article.innerText = "This is an article";

// // Let's add a class
// article.classList.add("green-bg", "show");

// // It was overkill with the class show, let's remove it
// article.classList.remove("show");

// console.log(article);
// console.log(article.classList);

// const section = document.querySelector(".section");
// section.appendChild(article);

// ########## insertAdjacentElement ##########

// const div = document.createElement("div");
// div.innerText = "This is the inner text of the div";
// div.classList.add("div-content");

// const main = document.querySelector(".main-content");

// main.insertAdjacentElement("afterbegin", div);
// main.insertAdjacentElement("beforeend", div);
// main.insertAdjacentElement("beforebegin", div);
// main.insertAdjacentElement("afterend", div);

// ########## insertAdjecentHTML ##########

// ########## innerText ##########

// const article = document.querySelector(".article");

// console.log(article);
// console.log(article.innerText);

// article.innerText = "This is the modified version of the article";
// console.log(article.innerText);

// const anotherArticle = document.querySelector(".another-article");
// console.log(anotherArticle);
// console.log(anotherArticle.innerText);
// console.log(anotherArticle.textContent);

// ########## removeChild ##########

// ########## replaceChild ##########

// ########## children ##########

// ########## firstElementChild ##########

// ########## lastElementChild ##########

// ########## getComputedStyle, style ##########
// const paragraph = document.querySelector(".paragraph");
// console.log(paragraph);

// // set color to red
// paragraph.style.color = "red";

// console.log("color of p tag is: ", paragraph.style.color);

// // set font-size to 2rem
// paragraph.style.fontSize = "2rem";

// console.log(paragraph.style);

// ########## classList ##########

// ########## getAttribute, setAttribute, removeAttribute ##########
// const image = document.querySelector(".image");
// console.log(image.getAttribute("src"));
// console.log(image.getAttribute("alt"));

// image.setAttribute("src", "assets/backgroundDessert.jpg");
// image.setAttribute("alt", "Desser");

// console.log(image.getAttribute("src"));
// console.log(image.getAttribute("alt"));

// image.setAttribute("width", "400px");

// image.removeAttribute("alt");
// console.log(image.getAttribute("alt"));

// ########## tagName ##########

// ########## parentElement, nextElementSibling, previousElementSibling ##########
