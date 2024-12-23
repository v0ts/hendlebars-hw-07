const Handlebars = require("handlebars");

const data = {
  title: "amazing list",
  image:
    "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
};

const source = ' <h2>{{title}}</h2><ul><li><img src="{{image}}" alt="" /></li></ul>';

let template = Handlebars.compile(source); 
let output = template(data)

document.querySelector('.output').innerHTML = output; 