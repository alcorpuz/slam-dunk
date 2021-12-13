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
  const foodTruck = require('../../../assests/foodTruck.jpg')

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
                    <div className="word-container">
                        <p>Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical; it's not genuine, correct, or comprehensible Latin anymore. While lorem ipsum's still resembles classical Latin, it actually has no meaning whatsoever. As Cicero's text doesn't contain the letters K, W, or Z, alien to latin, these, and others are often inserted randomly to mimic the typographic appearence of European languages, as are digraphs not to be found in the original.</p>
                        <p>Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical; it's not genuine, correct, or comprehensible Latin anymore. While lorem ipsum's still resembles classical Latin, it actually has no meaning whatsoever. As Cicero's text doesn't contain the letters K, W, or Z, alien to latin, these, and others are often inserted randomly to mimic the typographic appearence of European languages, as are digraphs not to be found in the original.</p>
                        <p>Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical; it's not genuine, correct, or comprehensible Latin anymore. While lorem ipsum's still resembles classical Latin, it actually has no meaning whatsoever. As Cicero's text doesn't contain the letters K, W, or Z, alien to latin, these, and others are often inserted randomly to mimic the typographic appearence of European languages, as are digraphs not to be found in the original.</p>
                        <p>Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical; it's not genuine, correct, or comprehensible Latin anymore. While lorem ipsum's still resembles classical Latin, it actually has no meaning whatsoever. As Cicero's text doesn't contain the letters K, W, or Z, alien to latin, these, and others are often inserted randomly to mimic the typographic appearence of European languages, as are digraphs not to be found in the original.</p>
                        <button className="toggleModal" onClick={toggleDonations}>Request Donation Now</button>
                    </div>
                    <div className="image-container">
                        <img src={foodTruck} alt="food Truck" />
                    </div>
                    
                </div>
            }
        </div>
    )
}

export default DonationsPage
