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
  // console.log('💼 Jobs in showJobs', jobs);

  let jobsContainer = document.querySelector('.jobs-container');
  // console.log(jobsContainer);

  let jobsHTML = '';

  jobs.forEach((job) => {
    // console.log(job, job.roleName, job.company);

    jobsHTML += `
      <div class="job-tile">
        <div class="top">
          <img
            src="${job.logo}"
          />
          <span class="material-icons more-horiz">more_horiz</span>
        </div>

        <div class="rolename">
          <span>${job.roleName}</span>
        </div>

        <div class="description">
          <span
            >${job.requirements.content}
          </span>
        </div>

        <div class="buttons">
          <div class="button apply-now">Apply Now</div>
          <div class="button">Message</div>
        </div>
      </div>
    `;
  });
}

getJobs().then((data) => {
  showJobs(data);
});
