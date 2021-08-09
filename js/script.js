document.querySelector('.button-container').addEventListener('click', () => {
  let text = document.getElementById('filter-jobs').value;
  console.log(text, '⌨ Value');
});

function getJobs() {
  return fetch('data.json')
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}

function showJobs(jobs) {
  console.log('💼 Jobs in showJobs', jobs);
}

getJobs().then((data) => {
  showJobs(data);
});
