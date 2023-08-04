import React, {useState} from "react";

const Form = () =>{
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    function formSubmit(event){
       event.preventDefault();

       const obj = {
        name: name,
        email: email,
        password: password
       }
       console.log(obj);
    }


    return(
        <div>
            <form onSubmit = {formSubmit}>
                <label htmlFor="name">Name</label>
                <input type = "text" id = "name" value = {name} onChange = {(event) => setName(event.target.value)}/>
                <label htmlFor="email">Email</label>
                <input type = "email" id = "email" value = {email} onChange = {(event) => setEmail(event.target.value)}/>
                <label htmlFor="password">Password</label>
                <input type = "password" id = "password" value = {password} onChange = {(event) => setPassword(event.target.value)}/>
                <button type = "submit">Submit</button>
            </form>
           

        </div>
    )
}
export default Form;