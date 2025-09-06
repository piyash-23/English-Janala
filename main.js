const loadLevel = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((response) => response.json())
    .then((data) => {
      levelShow(data.data);
    });
};

loadLevel();

const levelShow = (levels) => {
  console.log(levels);
  let btnBox = document.getElementById("btnBox");
  levels.forEach((level) => {
    let btn = document.createElement("div");
    btn.innerHTML = `
    <button class="pri-btn">
            <i class="fa-solid fa-book-open"></i> Lesson - ${level.level_no}
          </button>`;
    btnBox.append(btn);
  });
};
