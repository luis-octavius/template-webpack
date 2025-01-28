import img from "./assets/home.jpg";

const imgHome = new Image();
imgHome.src = img;
imgHome.style.cssText = "max-width: 70%; height: auto; border-radius: 20px;";

export const divContent = document.querySelector("#content");

export function homeContent() {
  divContent.innerHTML = "";

  const divHeadline = document.createElement("div");
  divHeadline.classList.add("divHeadline");
  divContent.appendChild(divHeadline);

  const paraContent = document.createElement("p");
  paraContent.innerHTML = `Welcome to Bloom & Thyme – where fresh flavors and artistic presentations meet to create an unforgettable dining experience. <br> Our menu is inspired by the beauty of nature, featuring vibrant, handcrafted dishes and drinks made with seasonal ingredients, aromatic herbs, and edible blooms. <br>
    Whether you’re savoring a garden-fresh hummus bowl, indulging in a hearty Mediterranean-inspired salad, or raising a toast with one of our signature floral mocktails, every bite and sip is designed to delight your senses. Perfect for intimate gatherings, celebrations, or simply treating yourself, Bloom & Thyme is more than a meal – it’s a moment to bloom.`;
  divHeadline.appendChild(paraContent);

  divContent.append(imgHome);

  const finalMsg = document.createElement("h2");
  finalMsg.textContent = "Come to see us and have a refreshing drink!";
  divContent.appendChild(finalMsg);
  finalMsg.style.cssText =
    "color: var(--main-font-color); text-align: center; font-family: var(--main-font);";
}
