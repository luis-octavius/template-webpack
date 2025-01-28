import { divContent } from "./home";
import img1 from "./assets/watermelon-juice.jpg"

const imgOne = new Image();
imgOne.src = img1;

export function aboutContent() {
  divContent.innerHTML = "";

  const para = document.createElement("p");
  para.textContent = `At Bloom & Thyme, we believe dining is an art form that brings people together. Inspired by the beauty of nature and the flavors of the Mediterranean, we craft vibrant, seasonal dishes and drinks that delight the senses. 
  From farm-fresh ingredients to artistic plating, every detail reflects our passion for creating memorable experiences.
  Join us for a meal where taste, beauty, and creativity come together. Let’s make every moment bloom.`;

  para.classList.add("about-text");
  divContent.appendChild(para);

  divContent.appendChild(imgOne);
  imgOne.classList.add("about-img");

  const textAdress = document.createElement("p");
  textAdress.innerHTML = `123 Blossom Lane
<br>Rosewood District, Meadowville
<br>Open daily: 11 AM - 10 PM 🌸`;
  textAdress.classList.add("text-adress")

  const map = document.createElement("iframe");
  map.src ='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12295.52837025058!2d-76.96085277635764!3d39.607338454780994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c8471f62ec3a5d%3A0x628f5fd2fb42d97c!2sRandom%20Heights%2C%20MD%2021157%2C%20EUA!5e0!3m2!1spt-BR!2sbr!4v1737777726632!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade';
  divContent.appendChild(map);
  map.classList.add("map");

  divContent.appendChild(textAdress);


}

