var html = '';
var recept_detail = '';
var i = 0;
var buttons = [];

fetch("http://127.0.0.1:5000/recipes") //1
  .then((response) => response.json()) //2
  .then((recepten) => {
    const answers = recepten.answer
    console.log(answers)
    answers.forEach(function (answer) {
      if (answer[6] === 1) {
        answer[6] = 'apperitiefje'
      }
      if (answer[6] === 2) {
        answer[6] = 'voorgerecht'
      }
      if (answer[6] === 3) {
        answer[6] = 'hoofdgerecht'
      }
      if (answer[6] === 4) {
        answer[6] = 'nagerecht'
      }
        html += `
        <div class="recept" onclick="getRecipeById(${answer[0]})">
          <img src="" class="recept-img">
          <h2 class="titel">${answer[1]}</h2>
          <h3 class="ondertitel">${answer[2]}</h3>
          <h4 class="categorie">${answer[6].replace(/(?:\\r\\n|\\r|\\n)/g, '<br>')}</h4>
        </div>
      `;

      document.querySelector('#app').innerHTML = html;
      });
      i++;
  })
  .then(() => {
    var loading = document.querySelector(".loading")
    loading.classList.toggle("loading")
  });

function getRecipeById(id) {
  let url = "http://127.0.0.1:5000/recipe/" + id;
  fetch(url) //1
    .then((response) => response.json()) //2
    .then((recept) => {
      const answer = recept.answer[0];
      console.log(answer);

      if (answer[6] === 1) {
        answer[6] = 'apperitiefje'
      }
      if (answer[6] === 2) {
        answer[6] = 'voorgerecht'
      }
      if (answer[6] === 3) {
        answer[6] = 'hoofdgerecht'
      }
      if (answer[6] === 4) {
        answer[6] = 'nagerecht'
      }

      recept_detail += `
        <div class="recept-details">
          <img src="" class="recept-img">
          <h2 class="titel-detail">${answer[1]}</h2>
          <h3 class="ondertitel-detail">${answer[2]}</h3>
          <h4 class="categorie-detail">${answer[6].replace(/(?:\\r\\n|\\r|\\n)/g, '<br>')}</h4>
          <p class="eters-detail">Ingrediënten voor ${answer[3]} personen:</p>
          <p class="ingredienten-detail">${answer[4].replace(/(?:\\r\\n|\\r|\\n)/g, '<br>')}</p>
          <p class="ingredienten-detail">${answer[5].replace(/(?:\\r\\n|\\r|\\n)/g, '<br>')}</p>
        </div>
      `;

      document.querySelector('#recept').innerHTML = recept_detail;
    });
}
