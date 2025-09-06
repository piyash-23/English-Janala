const loadLevel = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((response) => response.json())
    .then((data) => {
      levelShow(data.data);
    });
};

loadLevel();

const showWords = (words) => {
  // console.log(words);
  let primary = document.querySelector(".primary");
  primary.innerHTML = "";

  if (words.length == 0) {
    primary.innerHTML = `
    <img  src="./assets/alert-error.png" alt="logo" />
    <p id="select" class="bangla text-sm">
                এই <span class="english">Lesson</span> এ এখনো কোন <span class="english">Vocabulary</span> যুক্ত করা হয়নি।
              </p>
              <h3 id="lesson" class="bangla">
                নেক্সট <span class="english">Lesson</span> এ যান
              </h3>`;
    return;
  }

  words.forEach((word) => {
    // console.log(word);

    let card = document.createElement("div");
    primary.classList.add("grid");
    card.innerHTML = `
    <div class="card">
              <h2 class="word enlish">${word.word}</h2>
              <p class="subtitle enlish">Meaning/Pronounciation</p>
              <h1 class="meaning bangla">"${
                word.meaning === null ? "অর্থ পাওয়া যায়নি" : word.meaning
              }/${word.pronunciation}"</h1>
              <div class="info">
                <button class="detail" id="information">
                  <i class="fa-solid fa-circle-info"></i>
                </button>
                <button class="detail" id="sound">
                  <i class="fa-solid fa-volume-high"></i>
                </button>
              </div>
            </div> 
    `;

    primary.appendChild(card);
  });
};
const removeActive = () => {
  let loadbtn = document.querySelectorAll(".load-btn"); //remove class
  for (let btn of loadbtn) {
    btn.classList.remove("active");
  }
};
const loadWords = (id) => {
  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      let lessonBtn = document.getElementById(`lesson-btn-${id}`);
      removeActive();
      lessonBtn.classList.add("active");
      showWords(json.data);
    });
};

const levelShow = (levels) => {
  let btnBox = document.getElementById("btnBox");
  levels.forEach((level) => {
    let btn = document.createElement("div");
    btn.innerHTML = `
    <button class="pri-btn load-btn" id="lesson-btn-${level.level_no}" onclick='loadWords(${level.level_no})'>
            <i class="fa-solid fa-book-open"></i> Lesson - ${level.level_no}
          </button>`;
    btnBox.append(btn);
  });
};
