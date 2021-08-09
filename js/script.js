document.querySelector('.button-container').addEventListener('click', () => {
  let text = document.getElementById('filter-jobs').value;
  console.log(text, '⌨ Value');
});

function getJobs() {
  fetch('data.json')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
}

getJobs();
