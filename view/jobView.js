export default class jobView{
    static renderJobCards(jobs){
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
    }

    static renderSingleJob(job){
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
                `;
    }

}