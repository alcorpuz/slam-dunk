import React, {useState} from 'react'
import './donations-styles.css'
import emailjs from "emailjs-com"

function date() {
    var todaysDate = new Date()
    var dd = String(todaysDate.getDate()).padStart(2, '0');
    var mm = String(todaysDate.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = todaysDate.getFullYear();
    var today = mm + '/' + dd + '/' + yyyy;
    return today
}


function DonationsPage() {
    // const form = useRef();

    function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm('Donation-request', 'donation-Form', e.target, 'user_qvImpKDJeAB2euC48jWKW')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
  };

  const[showDonations, setShowDonations] = useState(false)
  const toggleDonations = () => {
      setShowDonations(prev =>! prev)
  }
  const closeModal = e => {
      setShowDonations(prev=>! prev)
  } 
//   const foodTruck = require('foodTruck.jpg')

    return (

        <div className="container">
            {showDonations ? 
                <div className="donations-container" >
                    <div className="modalWrapper">
                    <button className="closeModal" onClick={closeModal}>X</button>
                        <h3> We Love To help Our Community!
                            <br/>
                            <br/> 
                            To Request A Donation Please Fill Out The Following</h3>
                        <form className="donations-list" onSubmit= {sendEmail}>
                            <label>Organization Name: </label>
                            <input 
                                placeholder=" example: Girl Scouts" 
                                type="text"
                                name="org_name"/><br/>
                            <label>Organization Tax Id: </label>
                            <input
                                placeholder="xx-xxxxxxx" 
                                type="text"
                                name="taxId"/><br/>
                            <label>What Would You Like Donated: </label>
                            <input
                                placeholder="3 large pizzas" 
                                type="text"
                                name="request"/><br/>
                            <label>Date Of Event: </label>
                            <input
                                placeholder={date()} 
                                type="text"
                                name="date"/><br/>
                            <label>What Type Of Event: </label>
                            <input
                                placeholder="Fund raiser"
                                type="text"
                                name="type"/><br/>
                            <label>Your Name: </label>
                            <input 
                                placeholder="Enter your name" 
                                type="text"
                                name="name"/><br/>
                            <label>What Is Your Email: </label>
                            <input
                                placeholder="Example@Example.com"
                                type="text"
                                name="email"/><br/>
                            <input className="submit" type="submit" vlaue="send message"/>
                        </form>
                    </div>
                </div>
            : 
                <div className="default-container">
                    <div className="image-container">
                        <img src='/images/foodTruck.jpg' alt="food Truck" className="truck-image"/>
                    </div>
                    <div className="word-container">
                        <p>We absolutely love helping our community. At Slamdunk Pizza, we know how important it is to support our local communites. We strive to put as much back into the community as we can because we know we are all in this together! Feel free to make a donation request at anytime. </p>
                        <button className="toggleModal" onClick={toggleDonations}>Request Donation Now</button>
                    </div>
                    
                    
                </div>
            }
        </div>
    )
}

export default DonationsPage
