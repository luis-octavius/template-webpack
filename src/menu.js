import { divContent } from "./home.js";
import img1 from "./assets/brookelark.jpg";
import img2 from "./assets/brookelark2.jpg";
import img3 from "./assets/odiseocastrejon.jpg";

const imgMenu1 = new Image();
const imgMenu2 = new Image();
const imgMenu3 = new Image();

imgMenu1.src = img1;
imgMenu2.src = img2;
imgMenu3.src = img3;

function createDiv(img, h1, text) {
  const divPlate = document.createElement("div");
  divContent.appendChild(divPlate);
  divPlate.appendChild(img);

  const divText = document.createElement("div");
  divPlate.appendChild(divText);
  divPlate.classList.add("divplate");

  const dishTitle = document.createElement("h1");
  dishTitle.textContent = h1;
  divText.classList.add("divPlateText");
  divText.appendChild(dishTitle);

  const para = document.createElement("p");
  para.textContent = text;
  divText.appendChild(para);
}

export function menuContent() {
  divContent.innerHTML = "";

  createDiv(
    imgMenu1,
    "Delicious Drinks",
    "A collection of seasonal drinks infused with fresh cranberries, pears, and garnished with rosemary and edible flowers. Perfect for celebrations and special moments."
  );
  createDiv(
    imgMenu2,
    "Mediterranean Foods",
    "A vibrant dish featuring creamy hummus topped with pesto, cherry tomatoes, pomegranate seeds, almonds, and edible rose petals for a fresh and artistic presentation."
  );
  createDiv(
    imgMenu3,
    "Chickpea Harvest Salad Bowl",
    "A hearty Mediterranean bowl with crispy chickpeas, fresh greens, olives, figs, cucumber, and tomatoes, served with a creamy yogurt drizzle and rustic flatbread."
  );
}
