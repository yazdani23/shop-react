import axios from 'axios';
import { useState} from 'react';

function Login(){
    const [user,setUser] = useState({email:"",password:""})

    const [signUpOrLogin,setSignUpOrLogin] = useState(true)

    const handlerForm=(e)=>{
        e.preventDefault()
        console.log(user);

        axios.post('http://localhost:4000/user/add', user)
        .then(res => console.log(res.data));
    }

    return(
        <>
             <h1>login page</h1>
            {
                signUpOrLogin
                ?
                <form style={{width:"300px",margin:"auto"}} onSubmit={handlerForm}>
                    <button type="submit" class="btn btn-primary">login</button>
                    <p onClick={()=>setSignUpOrLogin(false)} >Don't sign up ?</p>
                </form>
                :
                <form style={{width:"300px",margin:"auto"}} onSubmit={handlerForm}>
                    <button type="submit" class="btn btn-primary">signUP</button>
                </form>

            } 
            
        </>
    )
}

export default Login