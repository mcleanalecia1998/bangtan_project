function enterMagicShop() {
  let firstname = prompt("What is your first name?");
  let enter = prompt("Do you wish to enter the magic shop?");
  enter = enter.toLowerCase();
  enter = enter.trim();

  let h2 = document.querySelector("h2");
  if (enter === "yes") {
    h2.innerHTML = `Welcome to the Magic Shop ${firstname}! 💜 <br/> Borahae 🫰`;
  } else {
    h2.innerHTML = `🛑 DO NOT ENTER 🛑 <br/> Important ARMY business, ${firstname}! 🛑`;
  }
}
let magicShopButton = document.querySelector("button");
magicShopButton.addEventListener("click", enterMagicShop);
