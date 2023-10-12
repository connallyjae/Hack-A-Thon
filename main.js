const contents = document.getElementById("pageContent");
// const contentsParent = contents.parent();

// const contents = doucment.getElementByID("gw-layout")
contents.parentNode.removeChild(contents);
// contentsParent.prepend("This is a test", p);

const imageContainer = document.createElement("div");
imageContainer.setAttribute("class", "image-div");
const image = document.createElement("img");
imageContainer.appendChild(image);
const banner = document.getElementById("rhf");
banner.prepend(imageContainer);
image.src = "https://media.giphy.com/media/yIxNOXEMpqkqA/giphy.gif";
image.setAttribute("class", "gif");

const audioSound = document.createElement("audio");
audioSound.src =
  "https://quicksounds.com/sound/323/sad-trombone-wah-wah-wah-fail.mp3";

document.addEventListener("DOMContentLoaded", (event) => {
  audioSound.volume = 1;
  audioSound.play();
});
