export default class jobModel{
    static async getAllJobs(){
        const response = await fetch('./data.json');
        return await response.json();
    }

    static async getJobById(id){
        const jobs = await this.getAllJobs();
        return jobs.find(job => job.id === id);
    }
}