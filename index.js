import "./index.css";
import MY_IMAGE from './assets/js.png';

console.log("Hello World!");

const img = document.createElement("img");
img.src = MY_IMAGE;
document.body.append(img);