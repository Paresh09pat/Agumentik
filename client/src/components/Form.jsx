import { useState } from "react"
import axios from "axios"
import "./App.css"

function Forms() {

    const [name, setEmail] = useState('')
    const [contact, setPassword] = useState('')

    const handleSubmit = () => {
        console.log(name, contact)
        axios.post('http://localhost:5000/signup',
            {
                email: name,
                password: contact
            })
            .then(res => {
                console.log(res.data)
                if (res.data.code === 200) {
                    alert('Data Saved')
                } else {
                    alert('Error.')
                }
            }).catch(err => {
                console.log(err)
            })
    }
    return (<>
        <div id="mainsignup1">

            <h1 className="center"> Enter Data Here </h1>
            <div className="outcard">
              Name
                <input
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                    className="inputs"
                    type="text" /> <br /> <br />
                Contact Number
                <input
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                    className="inputs" type="number" /> <br /> <br />
                <button
                    onClick={handleSubmit}
                    className="btns"> SUBMIT </button>

            </div>

        </div>
    </>
    )
}


export default Forms
