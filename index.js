function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

// <<<<<<< HEAD
function deepestChild() {
  let node = document.querySelector('div#grand-node');
  let deeperNode = node.children[0];
  while (deeperNode) {
    node = deeperNode;
    deeperNode = node.children[0];
  }
  return node;
}

function increaseRankBy(n) {
// =======
// function deepestChild(n) {
// >>>>>>> 6f6e7e722884078b6dfe676868c44cd1cb398ba1
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].textContent) + n;
  }
}
