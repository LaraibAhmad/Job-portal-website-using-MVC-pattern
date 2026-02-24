import jobModel from "../model/jobModel.js"
import jobView from "../view/jobView.js"

export default class JobController{
    static async loadAllJobs(){
        const jobs = await jobModel.getAllJobs();
        jobView.renderJobCards(jobs);
    }

    static async loadSingleJob(){
        const params = new URLSearchParams(window.location.search);
        const jobId = parseInt(params.get("id"));

        const job = await jobModel.getJobById(jobId);
        if(job){
            jobView.renderSingleJob(job);
        }
    }
}