const buttons = Array.from(document.querySelectorAll("button"));
const PORTRAIT = document.getElementById("portrait");
const JOKE_TARGET = document.getElementById("joke-target");

const getJoke = async (people) => {
      let response;
      switch(people) {
            case "chuck":
                  response = await fetch("https://api.chucknorris.io/jokes/random");
                  break;
            case "donald":
                  response = await fetch("https://api.tronalddump.io/random/quote");
                  break;
            default:
                  console.log("Wrong Celebrity");
      }

      const DATA = await response.json();
      const JOKE = await DATA.value;
      await displayJoke(people, JOKE);
}

const displayJoke = async (people, joke) => {
      switch(people) {
            case "chuck":
                  PORTRAIT.style.backgroundImage = "url('assets/img/chuck.png')";
                  JOKE_TARGET.textContent = joke;
                  break;
            case "donald":
                  PORTRAIT.style.backgroundImage = "url('assets/img/donald.jpeg')";
                  JOKE_TARGET.textContent = joke;
            break;
      }
}

buttons.forEach(btn => {
      btn.addEventListener("click", () => {
            switch(btn.id) {
                  case "getChuck":
                        getJoke("chuck");
                        break;
                  case "getDonald":
                        getJoke("donald");
                        break;
            }
      })
});
