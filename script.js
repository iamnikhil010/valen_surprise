let userName = "";

// Page switch helper
function showPage(id) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}


function checkKey() {
  const key = document.getElementById("keyInput").value;
  if (key === "0143") {
    showPage("page2");

    // play music after user interaction
    document.getElementById("bgMusic").play();
  } else {
    alert("Wrong key 😜");
  }
}


// Step 2 Save name
function saveName() {
  userName = document.getElementById("nameInput").value;
  document.getElementById("loveQuestion").innerText = `Do you love me ${userName}? ❤️`;
  showPage("page3");
}

// Step 3 NO button dodge
const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 300 - 150;
  const y = Math.random() * 300 - 150;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// Step 3 YES clicked
function yesClicked() {
  document.getElementById("loveMessage").innerText = `Love you a lot ${userName} ❤️`;
  showPage("page4");
}

// Open quiz
function openQuiz() {
  showPage("page5");
}

// Submit quiz
function submitQuiz() {

  const data = {
    name: userName,
    q1: document.getElementById("q1").value,
    q2: document.getElementById("q2").value,
    q3: document.getElementById("q3").value,
    q4: document.getElementById("q4").value,
    q5: document.getElementById("q5").value,
  };

  console.log("User Data:", data);

  // FINAL NOTE
  document.getElementById("finalNote").innerText =
` ${userName}, I hope you carry the memory of all our loveliest moments today...

Happy Valentine’s Day ${userName} ❤️

"If 'I' alone dosen't make any sense i wanna add 'YOU' along with 'LOVE' 
         ~ "I LOVE YOU "`;

  showPage("page6");
}

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
  heart.style.fontSize = (Math.random() * 20 + 10) + "px";

  document.querySelector(".hearts-container").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

// keep generating hearts
setInterval(createHeart, 300);
