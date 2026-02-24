import LoginModel from "../model/login_model";
import LoginView from "../view/login_view";
export default class LoginController{
    static init(){
        const form = document.getElementById("loginForm");
        form.addEventListener('submit', function(e){
            e.preventDefault();
            const {email, password} = LoginView.getFormData();
            const errors = LoginModel.validate(email, password);
            LoginView.showErrors(errors);
            if(Object.keys(errors).length === 0){
                alert("Login Successful!");
                LoginView.clearForm();
            }
        });
    }
}