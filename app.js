import JobController from "./controller/jobController.js";

if(document.getElementById("cardContainer")){
    JobController.loadAllJobs();
}

if(document.getElementById("job_detailsContainer")){
    JobController.loadSingleJob();
}
