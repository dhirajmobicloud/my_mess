import { useState } from "react"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"

const Login = () => {

    const Navigate = useNavigate();
    const [user, setUser] = useState({email:"", password:""})

    const onchangeHandler =(e)=>{
        let name = e.target.name;
        let value = e.target.value

        setUser({...user, [name]:value})
    }

    const UserLogin =(e)=>{
        e.preventDefault();
        Navigate('/profile')
        // fetch('http://localhost:5000/login', {method:"POST" , body: JSON.stringify(user) , headers: {
        //     'Content-Type': 'application/json'
        //     }
        //  }).then((res)=>{
        //     console.log(res)
        //     if(res.status === 200){
        //         Navigate('/profile')
        //     }
        //     else{
        //         alert("Enter valid login credential")
        //     }
        // })
    }


    return (
        <LOGIN>

            <form onSubmit={UserLogin} className="col g-3">
            <div class="col-md-6">
            <h2>Login</h2>
                </div>
                <div class="col-md-6">
                    <label for="InputEmail" class="form-label">Email address</label>
                    <input onChange={onchangeHandler} value={user.email} name="email" type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter your email" />
                </div>
                <div class="col-md-6">
                    <label for="Password" class="form-label">Password</label>
                    <input onChange={onchangeHandler} value={user.password} name="password" type="password" class="form-control" id="Password" placeholder="Enter your password" />
                </div>
                <div class="col-md-6">
                <button type="submit" class="btn btn-sm btn-outline-warning">Login</button>
                </div>
                
            </form>

        </LOGIN>
    )
}

export default Login

const LOGIN = styled.div`

background-color: #000;
height: 100vh;
display: grid;
padding: 10px;

button{
    margin: 20px auto;
}

.col-md-6{
    margin: auto;
    padding: 10px;
}

form{
    color: #fff;
    width: 50vw;
    margin:auto;
    background-color: darkslategray;
    padding: 20px;
    border-radius: 10px;
}

form label{
    font-weight: bold;
}

form input , select{
    background-color: #1a1818;
    color: #fff;
}

form input:focus{
    background-color: #1a1818;
    color: #fff;
}



input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:active,
input:-webkit-autofill:focus {

    transition: background-color 5000s ease-in-out 0s;
    color: #fff !important;
    -webkit-text-fill-color: #fff !important;
}
h2{
    text-align: center;
    color: gold;
    font-weight: 800;
    padding: 20px;

}

@media (max-width: 767px){

    /* padding: 50px; */

    form{
        width: 100%;
        
    }
}

`