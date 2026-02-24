export default class LoginModel{
    static validate(email, password){
        let errors = {};
        if(!email){
            errors.email = "Email is required";
        }else if(!email.includes("@")){
            errors.email = "Invalid email format";
        }

        if(!password){
            errors.password = "Password is required";
        }else if(password.length < 6){
            errors.password = "Password must be atleast 6 characters";
        }
        return errors;
    }
}