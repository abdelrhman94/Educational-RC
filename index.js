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
  const isCorrect = items[selectedItem];
  if (isCorrect) {
    item.innerHTML = `<p>${selectedItem}</p><i>&#9989;</i>`;
    perviousSelectedItem.style.opacity = 0;
  } else {
    item.innerHTML = `<p>${selectedItem}</p><i>&#10060;</i>`;
    setTimeout(() => {
      item.innerHTML = '';
    }, 1000);
  }
  selectedItem = '';
};

let myVar;

function myFunction() {
  myVar = setTimeout(showPage, 500);
}

function showPage() {
  document.querySelector('.loader').style.display = 'none';
  document.querySelector('.content').style.display = 'block';
}
