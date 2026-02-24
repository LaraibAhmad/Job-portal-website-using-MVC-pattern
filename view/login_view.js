export default class LoginView{
    static getFormData(){
        return {
            email: document.getElementById("email").value.trim(),
            password: document.getElementById("password").value.trim()
        };
    }
    static showErrors(errors){
        document.getElementById("emailError").textContent = errors.email || "";
        document.getElementById("passwordError").textContent = errors.password || "";
    }
    static clearForm(){
        document.getElementById("loginForm").reset();
    }
}