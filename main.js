const loadLevel = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((response) => response.json())
    .then((data) => {
      levelShow(data.data);
    });
};

loadLevel();

const showWords = (words) => {
  console.log(words);
  words.forEach((word) => {
    console.log(word);
  });
};

const loadWords = (id) => {
  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      showWords(json.data);
    });
};

const levelShow = (levels) => {
  let btnBox = document.getElementById("btnBox");
  levels.forEach((level) => {
    let btn = document.createElement("div");
    btn.innerHTML = `
    <button class="pri-btn" onclick='loadWords(${level.level_no})'>
            <i class="fa-solid fa-book-open"></i> Lesson - ${level.level_no}
          </button>`;
    btnBox.append(btn);
  });
};
