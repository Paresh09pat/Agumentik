import { useState } from "react"
import axios from "axios"
import { Link } from 'react-router-dom'
import "./App.css"

function Signup() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        console.log(email, password)
        axios.post('http://localhost:5000/signup',
            {
                email: email,
                password: password
            })
            .then(res => {
                console.log(res.data)
                if (res.data.code === 200) {
                    alert('Signup success.')
                } else {
                    alert('Error.')
                }
            }).catch(err => {
                console.log(err)
            })
    }
    return (<>
        <div id="mainsignup">

            <h1 className="center"> SIGNUP </h1>
            <div className="outcard">
                Email
                <input
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                    value={email}
                    className="inputs"
                    type="email" /> <br /> <br />
                Password
                <input
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                    value={password}
                    className="inputs" type="password" /> <br /> <br />
                <button
                    onClick={handleSubmit}
                    className="btns"> SUBMIT </button>
                <Link className="links"
                    to={'/signin'}> SIGN IN </Link>
            </div>

        </div>
    </>
    )
}


export default Signup

