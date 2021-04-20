var rollno = 1;

function access() {
  let tit = document.querySelector('#tit').value;
  let dir = document.querySelector('#dir').value;
  let str = document.querySelector('#str').value;
  let srm = document.querySelector('#srm').value;
  document.querySelector('#tit').value = '';
  document.querySelector('#dir').value = '';
  document.querySelector('#str').value = '';
  let arr = document.querySelectorAll('.card');
  for (let i = 0; i < 6; ++i) {
    if (arr[i].firstElementChild.innerText == '') {
      console.log('I am here, child is ' + (i + 1));
      arr[i].children[0].innerText = 'Title : ' + tit;
      arr[i].children[1].innerText = 'Directors : ' + dir;
      arr[i].children[2].innerText = 'Stars :' + str;
      arr[i].children[3].innerText = 'Streaming on : ' + srm;
      return;
    }
  }
  let card = document.getElementById(rollno.toString());
  card.children[0].innerText = 'Title : ' + tit;
  card.children[1].innerText = 'Directors : ' + dir;
  card.children[2].innerText = 'Stars :' + str;
  card.children[3].innerText = 'Streaming on : ' + srm;
  if (rollno == 6) {
    rollno = 0;
  }
  rollno += 1;
}

function remove(id) {
  let card = document.getElementById(id);
  setTimeout(() => {
    card.children[0].innerText = '';
    card.children[1].innerText = '';
    card.children[2].innerText = '';
    card.children[3].innerText = '';
  }, 0);
}
