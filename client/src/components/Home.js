import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import './Style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faLocationDot, faUser, faEarthAmericas, faCalendar, faClock, faStar } from '@fortawesome/free-solid-svg-icons'

import Forms from "./Form"



function Home() {
    const [popup, setPop] = useState(false)
    const handleClickOpen = () => {
        setPop(!popup)
    }

    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('TOKEN')
        if (!token) {
            navigate('/signin')
        }
    }, [navigate])

    return (
        <>
            <div>
                {
                    popup ?
                        <Forms /> : ""
                }
            </div>

            <div className="card">
                <div className="mainHead"></div>
                <div>
                    <span className="comingName"> {localStorage.getItem('EMAIL')} </span>

                    <button className="logoutbtn"
                        onClick={() => {
                            localStorage.clear()
                            navigate('/signin')
                        }}
                    > LOGOUT </button>
                </div>
            </div>

            {/* Mainpage */}

            <div className='maindiv' >   </div>

            <div id='searchmaindiv'>
                <div className='search'>
                    <FontAwesomeIcon className='searchlogo' icon={faMagnifyingGlass} />
                    <span className='searchlogo1'>
                        <select name="cars" id="destination">
                            <option value="Search">Search All Destinations</option>
                            <option value="volvo">Los Cabos</option>
                        </select>
                    </span>
                </div>

                <FontAwesomeIcon className='location' icon={faLocationDot} />

                <div className='earthuser'>
                    <FontAwesomeIcon className='tour' icon={faEarthAmericas} />
                    <span>
                        <select name="cars" id="destination1">
                            <option value="Search">Tours</option>
                            <option value="volvo">Volvo</option>
                        </select>
                    </span>
                    <FontAwesomeIcon className='tour' icon={faUser} />
                    <span>
                        <select name="cars" id="destination1">
                            <option value="Search">Paresh</option>
                            <option value="volvo">Volvo</option>
                        </select>
                    </span>
                </div>

            </div>

            <div id='circleblock'>
                <div className='circle1'></div>
                <div className='shopping'>Shopping</div>
                <div className='circle2'></div>
                <div className='shopping'>Tip Supported</div>
            </div>

            <div className='maxican'>
                <div className='colorname'>Mexican Souvenir</div>
                <div className='colorname'>Shopping Tour</div>

                <p className='sitbacktext'>
                    Sit back and relax for a vertual trip full of must-try food and rich culture experience. Welcome to Maxico City !
                </p>
            </div>

            <div id='notesdiv'>
                <h2 className='notesname'>Notes</h2>
                <p>Reserve your spot by selecting a time to book. once done you'll be able to see your reservations on your trip page and we'll send you an email conformation with a link to join the tour. For the best viewing experience, please join on a computer using Google Chrome. </p>
            </div>

            {/*  */}

            <div id='lastborder' >

                <div className='lastdiv1'>
                    <FontAwesomeIcon className='location1' icon={faLocationDot} />
                    <div>
                        <span>Mexican City</span> <br />
                        <span className='reduce'>Location</span>
                    </div>
                </div>

                <div className='lastdiv1'>
                    <FontAwesomeIcon className='location1' icon={faClock} />
                    <div>
                        <span>40 Mins</span> <br />
                        <span className='reduce'>Duration</span>
                    </div>
                </div>

                <div className='lastdiv1'>

                    <div>
                        <span> <FontAwesomeIcon className='fivestar' icon={faStar} /><FontAwesomeIcon className='fivestar' icon={faStar} /><FontAwesomeIcon className='fivestar' icon={faStar} /><FontAwesomeIcon className='fivestar' icon={faStar} /><FontAwesomeIcon icon={faStar} /> </span> <br />
                        <span className='reduce'>20 Reviews</span>
                    </div>
                </div>

                <div className='lastdiv1'>
                    <FontAwesomeIcon className='location1' icon={faCalendar} />
                    <div>
                        <span>Happening New</span> <br />
                        <span className='reduce'>Next Session</span>
                    </div>
                </div>

                <div className='lastdiv1' style={{ borderRight: "none", width: '300px' }}>
                    <button className='join' onClick={handleClickOpen}>
                        Join Tour
                    </button>
                </div>
            </div>

            {/* footer */}

            <div className="footer">
                <a target="_blank" href="https://www.instagram.com/accounts/login/" rel="noreferrer">
                    <img className="footimg" src="https://dreamfoundry.org/wp-content/uploads/2018/12/instagram-logo-png-transparent-background.png" alt="" />
                </a>

                <a href="https://www.facebook.com/login.php" target="_blank" rel="noreferrer">
                    <img className="footimg" src="https://th.bing.com/th/id/R.77d199c5b5fc1a2f7fa8683b5cfd67b6?rik=MDfR351XsbPk%2bA&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f15%2fCircle-Facebook-Logo-PNG-Transparent-Picture.png&ehk=BN5scZdq7AcqoE4hS4UYLXjhiZ09xSwhEpstM8pSMRE%3d&risl=&pid=ImgRaw&r=0" alt="" />
                </a>

                <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                    <img className="footimg1" src="https://clipartcraft.com/images/youtube-logo-transparent-4.png" alt="" />
                </a>

                <a href="https://twitter.com/i/flow/login" target="_blank" rel="noreferrer">
                    <img className="footimg" src="https://th.bing.com/th/id/R.3d74e8bfd4ef7985f7529bb9f7650eca?rik=RCvdo0dDvjxCWg&riu=http%3a%2f%2fwww.stickpng.com%2fassets%2fimages%2f580b57fcd9996e24bc43c53e.png&ehk=%2fkYf7%2bIY6TUkpUQzwclpivMLQ8ynEgcZYehDGOzbu0E%3d&risl=&pid=ImgRaw&r=0" alt="" />
                </a>
            </div>

        </>
    )
}

export default Home