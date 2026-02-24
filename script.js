

fetch("navbar.html")
.then(response => response.text())
.then(data => {
    document.getElementById('navbar').innerHTML = data;

    const recruitBtn = document.getElementById('recruitBtn');
    const dropDownContent = document.getElementById('dropdown-content');

    if(recruitBtn){
        recruitBtn.addEventListener('click', function(e){
            e.preventDefault();
            dropDownContent.classList.toggle("show");
        });
    }
})
.catch(error => console.log("Navbar load error:", error));

//job listing js
/*
fetch("data.json")
.then(response => response.json())
.then(jobs => {
    const container = document.getElementById("cardContainer");
    jobs.forEach(job => {
        let skillsHTML = "";
        job.skills.forEach(skill => {
            skillsHTML += `<span class="skill">${skill}</span>`
        });
        const card = `
            <div class="card">
                <span class="badge">Actively hiring</span>
                <h2 class="company">${job.company}</h2>
                <div class="role">${job.role}</div>
                <div class="location">${job.location}</div>
                <div class="salary">${job.salary}</div>
                <div class="skills">
                    ${skillsHTML}
                </div>
                <a href="job_details.html?id=${job.id}" class="btn">View Details</a>
            </div>
        `;
        container.insertAdjacentHTML("beforeend", card);
    });    
})
.catch(error => console.log("Error loading JSON:", error));

// Job details script begins from here
const params = new URLSearchParams(window.location.search);
const jobId = parseInt(params.get("id"));
fetch("data.json")
.then(response => response.json())
.then(jobs => {
    const job = jobs.find(j => j.id === jobId);
    console.log(job);
    const container = document.getElementById("job_detailsContainer");
    console.log(container);
    let skillsHTML = "";
    job.skills.forEach(skill => {
        skillsHTML += `<span>${skill}</span>`;
    });
    container.innerHTML =   `
    <h1 class="title">
        ${job.role} opportunity in ${job.location} at ${job.company}
    </h1>
    <div class="company">${job.company}</div>
    <div class="info">${job.location}</div>
    <div class="info">${job.salary}</div>
    <div class="info">Apply By: ${job.applyBy}</div>
    <div class="info">Openings: ${job.openings}</div>
    <div class="info">Applicants: ${job.applicants}</div>
    <div class="skills">${skillsHTML}</div>
    <a href="" class="apply-btn">Apply Now</a>
    <div class="info">
        Posted: ${new Date()}
    </div>
    `
});
*/
