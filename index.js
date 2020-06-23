const items = {
  eraser: 1,
  ruler: 1,
  bag: 0,
  'pencil case': 0,
  pencil: 1,
  book: 1,
  pen: 1,
  scissors: 0,
};

let selectedItem = '';
let perviousSelectedItem = null;

const selectItem = (item) => {
  selectedItem = item.innerHTML;
  item.style.backgroundColor = '#0fa0c5';
  if (perviousSelectedItem) {
    perviousSelectedItem.style.backgroundColor = '#fff';
  }
  perviousSelectedItem = item;
};

const setItem = (item) => {
  if (selectedItem == '') {
    return;
  }
  const isCorrect = items[selectedItem];
  if (isCorrect) {
    item.innerHTML = `<p>${selectedItem}</p><i>&#9989;</i>`;
    perviousSelectedItem.style.opacity = 0;
    playAudio('correct');
    selectedItem = '';
  } else {
    item.innerHTML = `<p>${selectedItem}</p><i>&#10060;</i>`;
    playAudio('incorrect');
    setTimeout(() => {
      item.innerHTML = '';
    }, 1000);
  }
};

let myVar;

function myFunction() {
  myVar = setTimeout(showPage, 500);
}

function showPage() {
  document.querySelector('.loader').style.display = 'none';
  document.querySelector('.content').style.display = 'block';
}

const playAudio = (type) => {
  const audio = document.querySelector(`#${type}`);
  audio.play();
};

const rest = () => {
  const answers = document.querySelectorAll('.answer');
  const answersArray = [...answers];
  answersArray.forEach((answer) => {
    answer.innerHTML = '';
  });

  const boxes = document.querySelector('.boxes');
  const boxesArray = [...boxes.children];
  boxesArray.forEach((box) => {
    box.style.opacity = 1;
  });
  perviousSelectedItem.style.backgroundColor = '#fff';
};

const correctAnswers = () => {
  const answers = document.querySelectorAll('.answer');
  const answersArray = [...answers];
  const correctAnswers = Object.keys(items).filter((item) => items[item]);

  answersArray.forEach((answer, index) => {
    answer.innerHTML = `<p>${correctAnswers[index]}</p><i>&#9989;</i>`;
  });

  const boxes = document.querySelector('.boxes');
  const boxesArray = [...boxes.children];
  boxesArray.forEach((box) => {
    if (correctAnswers.includes(box.innerHTML)) {
      box.style.opacity = 0;
    } else {
      box.style.opacity = 0.5;
    }
  });
};
