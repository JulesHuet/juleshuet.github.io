<script>
garage.classList.remove("up");
void garage.offsetWidth; // force reflow
garage.classList.add("down");

const listA = document.getElementById("listA");
const listB = document.getElementById("listB");
const screen = document.getElementById("screen");
const garage = document.getElementById("garage");
const sound  = document.getElementById("doorSound");
const button = document.getElementById("apply");

const imageMap = {
  "0-0": "assets/screen/a0_b0.jpg",
  "0-1": "assets/screen/a0_b1.jpg",
  "0-2": "assets/screen/a0_b2.jpg",
  "1-0": "assets/screen/a1_b0.jpg",
  "1-1": "assets/screen/a1_b1.jpg",
  "1-2": "assets/screen/a1_b2.jpg",
  "2-0": "assets/screen/a2_b0.jpg",
  "2-1": "assets/screen/a2_b1.jpg",
  "2-2": "assets/screen/a2_b2.jpg",
};

button.addEventListener("click", () => {
  const key = `${listA.value}-${listB.value}`;
  const newImage = imageMap[key];

  if (!newImage) return;

  // 1. close door
  garage.classList.remove("up");
  garage.classList.add("down");
  sound.currentTime = 0;
  sound.play();

  // 2. swap image when fully closed
  setTimeout(() => {
    screen.src = newImage;
  }, 600);

  // 3. open door
  setTimeout(() => {
    garage.classList.remove("down");
    garage.classList.add("up");
  }, 900);
});

// animate down
garage.classList.remove("up");
garage.classList.add("down");

// animate up later
setTimeout(() => {
  garage.classList.remove("down");
  garage.classList.add("up");
}, 900);
</script>

