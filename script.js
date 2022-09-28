/* =================
  TESTS, LOOK AT THESE
  Reading tests will always help you discover your requirements.
  You can make this window bigger. 
   ===================
*/

const {
  core: { test, expect, run },
  prettify
} = window.jestLite;

/* =================
  FIND ELEMENTS
  These are all the elements we will look for.
   ===================
*/
const getHeader = document.querySelectorAll("header"),
  getH1 = document.querySelectorAll("h1"),
  getSiteHeader = document.querySelectorAll(".c-site-header"),
  getAria = document.querySelectorAll('nav[aria-label="Main Site Links."]'),
  getMain = document.querySelectorAll("main"),
  getFooter = document.querySelectorAll("footer"),
  getSiteFooter = document.querySelectorAll(".c-site-footer"),
  getIFrame = document.querySelectorAll("iframe"),
  getImage = document.querySelectorAll("img"),
  getWords = document.body.innerText;

/* =================
   ASSERTIONS 
   These are the things we check are true about your page.
   Read and update your HTML to discover the requirements.
   The tests will run every time you update your code.
   ===================
*/
test("There is at least one header element", () => {
  expect(getHeader.length).toBeGreaterThanOrEqual(1);
});
test("There is at least one h1", () => {
  expect(getH1.length).toBeGreaterThanOrEqual(1);
});
test("There is only one header element with the class c-site-header", () => {
  expect(getSiteHeader.length).toBe(1);
});
test("There is a nav element with an aria-label of Main Site Links.", () => {
  expect(getAria.length).toBeGreaterThanOrEqual(1);
});
test("There is only one main element", () => {
  expect(getMain.length).toBe(1);
});
test("There is at least one footer element", () => {
  expect(getFooter.length).toBeGreaterThanOrEqual(1);
});
test("There is only one footer element with the class c-site-footer", () => {
  expect(getSiteFooter.length).toBe(1);
});
test("There is embedded video", () => {
  expect(getIFrame.length).toBeGreaterThanOrEqual(1);
});
test("There is at least one image", () => {
  expect(getImage.length).toBeGreaterThanOrEqual(1);
});
test("There are at least 500 words on the page", () => {
  expect(getWords.length).toBeGreaterThanOrEqual(500);
});

const console = document.getElementById("tests");
prettify.toHTML(run(), console);
let element_list = document.getElementById('list');
let new_li = document.createElement('li');
let new_a = document.createElement('a');
new_a.setAttribute("href", 'https://www.bbc.co.uk/news');
new_a.innerText = 'BBC News';

new_li.appendChild(new_a);

element_list.appendChild(new_li);
let new_li2 = document.createElement('li');
let new_a2 = document.createElement('a');
new_a2.setAttribute("href", 'https://twitter.com/');
new_a2.innerText = 'Twitter';

new_li2.appendChild(new_a2);

element_list.appendChild(new_li2);
let new_li3 = document.createElement('li');
let new_a3 = document.createElement('a');
new_a3.setAttribute("href", 'https://www.apple.com/uk/');
new_a3.innerText = 'Apple';

new_li3.appendChild(new_a3);

element_list.appendChild(new_li3);
var images;


images = ['https://i.postimg.cc/8CH3b7SC/20180907-142145.jpg', 'https://i.postimg.cc/BQPnw0t3/IMG-20180802-164807.jpg', 'https://i.postimg.cc/kXWwTLgT/IMG-20200823-200041.jpg'];

let element_pictures = document.getElementById('pictures');
images.push(images[0]);
element_pictures.setAttribute("src", images.shift());


document.getElementById('next').addEventListener('click', (event) => {
  let element_pictures2 = document.getElementById('pictures');
  images.push(images[0]);
  element_pictures2.setAttribute("src", images.shift());

});

document.getElementById('previous').addEventListener('click', (event) => {
  let element_pictures3 = document.getElementById('pictures');
  images.push(images[0]);
  element_pictures3.setAttribute("src", images.shift());

});
