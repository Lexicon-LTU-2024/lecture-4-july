# JavaScript DOM Manipulation

<details>
<summary>Table of Contents</summary>

- [DOM](#dom)

  - [Key concepts of the DOM](#key-concepts-of-the-dom)

- [Nodes and Elements](#nodes-and-elements)

  - [Nodes](#nodes)
  - [Element](#element)
  - [Key Differences between Nodes and Elements](#key-differences-between-nodes-and-elements)
  - [HTMLCollection](#htmlcollection)
  - [NodeList](#nodelist)
  - [Key Differences between HTML Collections and NodeLists](#key-differences-between-htmlcollection-and-nodelist)

- [Get elements and nodes](#get-elements-and-nodes)

  - [getElementById](#getelementbyid--elementid---html-element--null)
  - [getElementByClassName](#getelementbyclassname--classname---htmlcollection)
  - [getElementsByName](#getelementsbyname--name---nodelist)
  - [getElementsByTagname](#getelementsbytagname--tagname---htmlcollection)
  - [querySelector](#queryselector--query---html-element)
  - [querySelectorAll](#queryselectorall--query---nodelist)
  - [window.getComputedStylel](#windowgetcomputedstyle--element---cssstyledeclaration)

- [Create elements and nodes](#create-elements-and-nodes)

  - [createElement](#createelement--tagasstring---html-element)
  - [appendChild](#appendchild--childnode---the-appended-node)
  - [append](#append--node1-node2-node3---void)
  - [insertAdjacentElement](#insertadjacentelement--position-element--void)
  - [insertAdjacentHTML](#insertadjacenthtml--position-html---void)

- [Modifying elements and nodes](#modifying-elements-and-nodes)
  - [InnerHTML](#innerhtml)
  - [innerText](#innertext)
  - [textContent](#textcontent)
  - [getAttribute](#getattribute--name---string--null)
  - [setAttribute](#setattribute--name-value---void)
  - [removeAttribute](#removeattribute--name---void)
  - [removeChild](#removechild--node---removed-node--null)
  - [replaceChild](#replacechild--newnode-oldnode---replaced-node)
  - [classList](#classlist)
  - [style](#style)
  - [tagName](#tagName)
- [Traversing the DOM](#traversing-the-dom)
  - [children](#children)
  - [firstElementChild](#firstelementchild)
  - [lastElementChild](#lastelementchild)
  - [parentElement](#parentelement)

</details>

## DOM

The DOM is an abbreviation of `Document Object Model` and it represents the structure and content of a HTML document as a tree of objects, where each object corresponds to a part of the document. These parts can be elements, attributes, text content, comments and more. The DOM acts as an interface that programs can interact with and manipulate the content, re-structure the styles and many more things. Everyting inside the HTML document can be manipulate via this interface that is the `Document Object Model`.

All properties and methods are available on these webpages:

- [w3schools Elements](https://www.w3schools.com/jsref/dom_obj_all.asp)

- [w3schools Documents](https://www.w3schools.com/jsref/dom_obj_document.asp)

[Back to Top](#javascript-dom-manipulation)

### Key concepts of the DOM

1. **Document**

   - The top level object that represents the entire HTML document.
   - Accessed using `document` in JavaScript.

2. **Node**

   - The basic building block of the DOM tree.
   - Represents different parts of the document, such as elements, attributes and texts.
   - Common types of nodes include `Element`, `Text`, `Comment` and `Attribute`.

3. **Elements**

   - Represents an HTML element.
   - Examples include: `<div>`, `<p>` and `<span>`.

4. **Attribute**

   - Represents an attribute of an element.
   - In `<div id="example">`, the `id` is an attribute node.

5. **Text**

   - Represent the text content of an element.
   - In `<p>Hello world</p>`, "Hello world" is a text node in an element. Any text content within the start and end tag are text nodes.

6. **Node tree**

   - The hierarchical structure of nodes in a documnet.
   - Each node has a parent, zero or more children and may have many siblings.

[Back to Top](#javascript-dom-manipulation)

## Nodes and Elements

In the context of the DOM in JavaScript, "node" and "element" are terms that refer to different types of entities within the structure of a HTML document.

[Back to Top](#javascript-dom-manipulation)

### Nodes

A "node" is a generic term for any type of object in the DOM hierarchy. It is the base class for various types of object, and all elements, attributes, text contents and more in a document are nodes.

There are several types of nodes in the DOM:

1. Element nodes: represents HTML elements in the document.
2. Attribute nodes: represents attribute on elements.
3. Text nodes: represents the actual text content within an element
4. Comment nodes: represents comments in the document.
5. Document node: represents the entire document.

[Back to Top](#javascript-dom-manipulation)

### Element

An "element" is a specific type of node that represents an HTML element in the document. Elements are a subset of nodes, and they are the building blocks of the DOM structure. Element have attributes, can contain text or other nested elements, and define the structure and content the document.

```html
<div id="myDiv">Hello <strong>world</strong>!</div>
```

- The entire document is a **document node**.
- The `<div>` is an **element node**.
- The id attribute of the `<div>` is an **attribute node**
- The text content "Hello" is a **Text node**.
- The `<strong>` is another **element node**.
- The text content "world" and "!" are alse **text nodes**.

[Back to Top](#javascript-dom-manipulation)

### Key differences between Nodes and Elements

1. Scope & Type

   - "Node" is a broader term encompassing elements, attribute, text, etc.
   - "Element" specifically refers to HTML elements.

2. Hierarchy
   - Elements are nodes, but not all nodes are elements.

[Back to Top](#javascript-dom-manipulation)

### HTMLCollection

An `HTMLCollection` is a collection of HTML elements. It's live collection, meaning it is automatically updated when the underlying document changes. HTML Collections are typically returned by certain DOM methods, such as `getElementsByClassName`, `getElementsByTagName` and `getElementsByName`.

How does a HTML collection works? It's an array-like object and shares some characteristics with arrays.

It's index based and starts at index 0. The elements can be accessed by index of course, with square brackets like a normal array.

#### Properties and Methods

- `length`: returns the number of elements in an HTMLCollection.
- `item()`: returns the element at a specified index. Using square brackets works almost in the same way.
- `namedItem()`: Returns the element with the specified id.

You can also use regular `for..of loops` on a HTML collection, given you tools to execute specific code for each element.

[Back to Top](#javascript-dom-manipulation)

### NodeList

A `NodeList` is a collection of nodes, which can include elements, text nodes and other types of nodes. Like HTMLCollection, NodeLists are returned by various DOM methods. Examples include: `querySelectorAll` and `childNodes`.

NodeList are also an array-like object but it offers more functionality than a HTMLCollection, more methods and properties are available for your.

#### Properties and Methods

- `entries()`: returnes an iterator with the key/value pairs from the list.
- `forEach()`: Executes a callback function for each node in the list.
- `item()`: returns the node at a specified index.
- `keys()`: returns an iterator with the keys from the list.
- `length`: returns the number no nodes in a NodeList.
- `values()`: returns an iterator with teh values from the list.

[Back to Top](#javascript-dom-manipulation)

### Key differences between HTMLCollection and NodeList

1. Origin

   - `HTMLCollection` is typically returned by methods that retrieve elements by tag name, class, name or name attributes.
   - `NodeList` can be return by a various of different methods.

2. Content

   - `HTML Collection` specifically contains HTML elements.
   - `NodeList` can contain various types of nodes include elements and more.

3. Use cases

   - Use `HTMLCollection` when dealing specifically with HTML elements.
   - Use `NodeList` when you neew to work with a broader range of node types.

In practice, both `HTMLCollection` and `NodeList` are often used interchangeably, especially when dealing with a list of elements in the DOM. Understanding the differences can be important when choosing the appropriate method for specific use cases.

[Back to Top](#javascript-dom-manipulation)

## Get elements and nodes

In most cases the search area for these methods are the entire document, and if that's the case, you use the `document` object when applying these methods. But if you what to narrow down the seard area you could apply these methods to any element really, and then the search area is contained to that specific element. All you need is then just the reference to the specific element on which you want to start you search from.

### getElementById ( elementId ) => [HTML Element](#element) | null

This method returns an element with the specified Id value. It will return null if the element doesn't exists, and if more elements with the same Id exsits in the DOM, the first match will be returned. **Note**, Id should always be unique.

```html
<div id="main-container">This is the content</div>
```

```js
const mainContainer = document.getElementById("main-container");

console.log(mainContainer); // The element will be written out in the console.
```

[Back to Top](#javascript-dom-manipulation)

### getElementByClassName ( className ) => [HTMLCollection](#htmlcollection)

[Back to Top](#javascript-dom-manipulation)

### getElementsByName ( name ) => [NodeList](#nodelist)

[Back to Top](#javascript-dom-manipulation)

### getElementsByTagname ( tagName ) => [HTMLCollection](#htmlcollection)

[Back to Top](#javascript-dom-manipulation)

### querySelector ( CSSSelector ) => [HTML Element](#element)

This method returns the first element that matches your given CSS selector. This selector can be as simple or complex as a normal css selector inside you stylesheet.

If no match is found, this method will throw an error _(SYNTAX_ERROR)_. Or rather if the selector is invalid.

```html
<div class="item">This is a text item</div>
<section id="main-section">
  <p class="para">Lorem Ipsum</p>
  <p class="para">Lorem Ipsum Lorem Ipsum</p>
  <p class="para">Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
  <span class="item">This is a span item inside the section</span>
</section>
```

```js
const item = document.querySelector(".item"); // Search for class name
const mainSection = document.querySelector("#main-section"); // Search for id
const p = document.querySelector("p"); // Search for element tag

const nestedItem = mainSection.querySelector(".item"); // This will find the .item inside the section because we have narrowd the search area down the the section itself.

console.log(item);
console.log(mainSection);
console.log(p);
console.log(nestedItem);
```

[Back to Top](#javascript-dom-manipulation)

### querySelectorAll ( CSSSelector ) => [NodeList](#nodelist)

This method returns all matches of the specific css selector, and it collects them inside a `NodeList` and returns that `NodeList`.

```js
const paragraphs = document.querySelectorAll("p"); // Search for the tag
const paragraphsFromClass = document.querySelectorAll(".para"); // Search for the class

console.log(paragraphs);
console.log(paragraphsFromClass);
```

If you want to access a specific p-tag in this list you can always choose it by the index.

```js
const secondP = paragraphs[1];
console.log(secondP);
```

[Back to Top](#javascript-dom-manipulation)

### window.getComputedStyle ( element ) => CSSStyleDeclaration

This method takes in an argument that is a HTML element and returns a special CSS object, containing all the styles that have been applied to the specific element. This includes, external and internal stylesheets, browser default styles, inherited styles and styles that have been applied on the style attribute.

```js
const p = document.querySelector(".child");
const css = window.getComputedStyle(p);

console.log(css.color); // will display the applied color in the console.
```

[Back to Top](#javascript-dom-manipulation)

## Create Elements and nodes.

### createElement ( tagAsString ) => [HTML Element](#element)

This method creates an element node. This method is often used with the `document` since we are create an element to the DOM.

```js
const article = document.createElement("article"); // Creates an article element
console.log(article);
```

[Back to Top](#javascript-dom-manipulation)

### appendChild ( childNode ) => The appended [node](#nodes)

This method appends a node as the last child of an element.

```js
const section = document.querySelector("#main-section");
section.appendChild(article);
```

[Back to Top](#javascript-dom-manipulation)

### append ( node1, node2, node3... ) => void

[Back to Top](#javascript-dom-manipulation)

### insertAdjacentElement ( position, element) => void

This method inserts an element into a specified position. The first argument is the position in which we will insert the element and this postition comes in four alternatives. The second argument is the element that we want to insert.

The available positions are:

- `afterbegin`: insert after the beginning of the element (first child)
- `afterend`: After the element
- `beforebegin`: Before the element
- `beforeend`: Before the end of the element (last child)

The element can be created from scratch befor insertion, or we could grap an existing element.

```js
// Created element
const div = document.createElement("div");
div.innerText = "This is a created div";

// The element on which to apply the insertAdjecentElement
const section = document.querySelector("#main-section");

// The insertion
section.insertAdjacentElement("afterend", div);
section.insertAdjacentElement("beforebegin", div);
section.insertAdjacentElement("afterbegin", div);
section.insertAdjacentElement("beforeend", div);
```

An unexpected behaviour happens when we do these two operations after each other. After the first invokation, _("afterend")_, the element is inserted after the section element, which is as expected. But when we do the second invokation with _"beforebegin"_ the element, as expected, is inserted before the section element, but the "previous" element disappears. That is because there is no previous element, it's the same element. Every element in the DOM is unique and if we do several operations on one element it will always move.

### insertAdjacentHTML ( position, html ) => void

This method works exactly the same as `insetAdjacentElement` but with the difference that it accepts a html element as a string instead of some data of the type element.

```js
// The html on which to apply the insertAdjecentHTML
const section = document.querySelector("#main-section");

const html = "<p>This is a p tag created from string</p>";

section.insertAdjacentHTML("beforebegin", html);
section.insertAdjacentHTML("afterend", html);
```

In this case the string is not an actual DOM object, so it's not unique in the same was as in the previos example with `insertAdjacentElement`. So by executing these two lines of code, two insertions will be made and both will be visible in the DOM.

## Modifying elements and nodes

### innerHTML

This property sets or gets the `innerHTML` of an element. When we get the innerHTML the actual HTML-tags and its content _(classes, attribute etc)_ is included.

When you set `innerHTML` it will replace all the previous HTML.

```html
<div class="inner-html-div"></div>
```

```js
const innerHTMLDiv = document.querySelector(".inner-html-div");
innerHTMLDiv.innerHTML = "<p>This is a p-tag inserted with innerHTML</p>";
```

### innerText

This property is used to either set or get the text content of an element. If you want to set a value with this property, be careful, because it will replace all innerText with the new value that you give it.

When getting the `innerText` all specific HTML will we ignored.

```html
<article></article>
```

```js
const article = document.querySelector("article");
article.innerText = "This is an article";

console.log(article); // <article>This is an article</article>
```

[Back to Top](#javascript-dom-manipulation)

### textContent

Basically this attribute works in the same was as innerText but there are some differences between the two.

#### Differences between innerText and textContent

`innerText`

1. Ignores elements with `display: none` or other styles that make them not visible.
2. Takes into account the current style of the element.
3. Only provides the visible text content as it appears in the screen.

`textContent`

1. Returns all text content within an element, regardless of styling or visibility.
2. Includes text content within element that are hidden _(e.g. `display: none`)_
3. Does not consider the current style of the element.

Most of the times these are used interchangeably but the usage should be based on the specific requirements. If you need to consider the styling, use `innerText`, otherwise you can use `textContent`.

[Back to Top](#javascript-dom-manipulation)

### getAttribute ( name ) => string | null

This method will return the given value on a specific attribute on an element.

```html
<img class="image" width="200px" src="assets/background1.jpg" />
```

```js
const img = document.querySelector(".image");
console.log(img.getAttribute("src"));
```

[Back to Top](#javascript-dom-manipulation)

### setAttribute ( name, value ) => void

This method sets the value of the given attribute. It takes two arguments, the name of the attribute and the value that we want to give it. Let's try it with the src attribute.

```js
const newSrc = "assets/backgroundDessert.jpg";
img.setAttribute("src", newSrc);
```

You can of course get or set any attribute that exist on the given element.

[Back to Top](#javascript-dom-manipulation)

### removeAttribute ( name ) => void

This method removes the given attribute from the element.

```html
<button disabled>Click me</button>
```

This button has been disabled in the HTML document. With this method we could remove this attribute with JavaScript.

```js
const btn = document.querySelector("button");
btn.removeAttribute("disabled");
```

[Back to Top](#javascript-dom-manipulation)

### removeChild ( node ) => removed [node](#nodes) | null

This method will remove an element's child. The argument is the node that should be removed, and it will return the node that was removed or null if it didn't work.

```html
<div class="to-be-removed">I will be removed.</div>
```

This element is located within the body and to get a reference to the body we can use `document.body`.

```js
const elementToRemove = document.querySelector(".to-be-removed");
const removedElement = document.body.removeChild(elementToRemove);

console.log(removedElement);
```

The child to be removed must be a direct child of the element in question. Otherwise it won't work.

[Back to Top](#javascript-dom-manipulation)

### replaceChild ( newNode, oldNode ) => replaced [node](#nodes)

This method replaces a child node of an element with a new node. It must be a direct child.

```html
<div class="to-be-replaced">I will be replaced</div>
```

```js
const oldElement = document.querySelector(".to-be-replaced");
const newElement = document.createElement("p");
newElement.innerText = "I am the replacement";
document.body.replaceChild(newElement, oldElement);
```

[Back to Top](#javascript-dom-manipulation)

### classList

`classList` is a array-like list _(DOMTokenList)_ of all the classes that have been applied to any given element. This list is read-only but there exists methods that you can use to manipulate this list.

```html
<article class="article bold main-color">This is an article</article>
```

```js
const article = document.querySelector(".article.bold.main-color");
console.log(article);

const classes = article.classList;
console.log(classes); // [article, bold, main-color]; + some extra stuff related to the DOMTokenList
```

This `DOMTokenList` has 13 available methods, we will look into four of them since they are most useful of them all.

#### Methods

- `add(token, token...) => void`: Adds one or more tokens to the `DOMTokenList`. A token here means a class basically.

- `remove(token, token...) => void`: Removes one or more tokens from the `DOMTokenList`.

- `contains(token) => boolean`: Returns true or false if a token _(class)_ is present in the `DOMTokenList`.

- `toggle(token) => void`: Toggles a token inside the `DOMTokenList`.

More methods exists, see the documentation - [DOMTokenList](https://www.w3schools.com/jsref/dom_obj_html_domtokenlist.asp)

```js
article.classList.add("warning"); // This will add 'warning' to the DOMTokenList

article.classList.remove("warning"); // This will remove the 'warning' from the DOMTokenList IF the token exists.
```

If we want to check if an element has a specific class, we just the `contains()` method.

```js
const boldExists = article.classList.contains("bold");
console.log(boldExists);

const errorExists = article.classList.contains("error");
console.log(errorExists);
```

[Back to Top](#javascript-dom-manipulation)

### style

The style attribute is used to either get or set the inline styling of a HTML element. This styling has the highest specificity which means it will override basically any other styling except when styling is used together with `!important`.

```html
<p class="child2" style="color: red">child2</p>
```

This element has a `color` styling applied via the style tag. It will override any other `color` that has been set in a stylesheet.

If you want to look at the style tag with JavaScript you just use dot-notation.

```js
const p = document.querySelector(".child2");
console.log(p.style.color); // red
```

If you just want to look at the style object you can just do like this:

```js
console.log(p.style): //CSSStyleDeclaration Object
```

To change it with JavaScript we just use dot-notaion again together with the assignment operator `=` and pick the style and value that we want to change.

```js
p.style.textAlign = "end";
```

Changing styles like this works very well when working with dynamic code and you want to update the styling depending on the interaction from the user. Although you can also just add or remove classes to the elements as well if you want to change the styling dynamically.

[Back to Top](#javascript-dom-manipulation)

### tagName

This property returns the name of the tag on the element, and it returns it in UPPERCASE.

```html
<button disabled>Click me</button>
```

```js
const btn = document.querySelector("button");
console.log(btn.tagName);
```

[Back to Top](#javascript-dom-manipulation)

## Traversing the DOM

### children

The property returns a HTMLCollection of an element's child elements.

```html
<section class="parent">
  <p class="child">child1</p>
  <p class="child">child2</p>
  <p class="child">child3</p>
</section>
```

```js
const section = document.querySelector(".parent");
console.log(section.children);
```

[Back to Top](#javascript-dom-manipulation)

### firstElementChild

This property returns the first node that is of type element.

```js
const section = document.querySelector(".parent");
console.log(section.firstElementChild);
```

[Back to Top](#javascript-dom-manipulation)

### lastElementChild

This property returns the last node that is of type element.

```js
const section = document.querySelector(".parent");
console.log(section.lastElementChild);
```

[Back to Top](#javascript-dom-manipulation)

### parentElement

Returns the element that is the direct parent of the given element. It the element doesn't have a parent, then null will be returned.

```html
<section class="parent">
  <article class="child">First element</article>
  <article class="child">Second element</article>
  <article class="child">Last element</article>
</section>
```

```js
const section = document.querySelector(".parent");
children = section.children;

const firstElement = children[0];
console.log(firstElement); // <article class="child">First element</article>

console.log(firstElement.parentElement); // <section class="parent">
```

[Back to Top](#javascript-dom-manipulation)

### nextElementSibling

Returns the element that comes directly after the given element on the same level in the DOM tree. If none exists, then null will be returned.

```js
const nextElementSibling = firstElement.nextElementSibling;
console.log(nextElementSibling); // <article class="child">Second element</article>
```

[Back to Top](#javascript-dom-manipulation)

### previousElementSibling

Return the element that comes directly before the given element on the same level in the DOM tree. If none exisist, then null will be returned.

```js
const secondElement = children[1];

const previousElementSibling = secondElement.previousElementSibling;
console.log(previousElementSibling); // <article class="child">First element</article>
```

[Back to Top](#javascript-dom-manipulation)
