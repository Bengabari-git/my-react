 export default function Contact(){
    let title = document.getElementById("title");
	title.textContent = "Beng AI | Contact";

    return(
        <div className="contact">
            <h2>Contact me</h2>
            <div className="platforms">
                <div className="handles">
                    <div className="medi ">
                        <div>Chat on WhatsApp</div>
                        <div className="icon i1" ></div>
                    </div>
                    <div className="medi">
                        <div>Lets formalise on LinkedIN</div>
                        <div className="icon i2" ></div>
                    </div>
                    <div className="medi">
                        <div>Follow on X</div>
                        <div className="icon i3" ></div>
                    </div>
                </div>
                
            </div>
            <div className="message">
                <div className="talk">
                    <div className="desc">Send a mail to me</div>
                    <form id="talkform" className="talkform">
                    <input className="mail" type="email" name="email" id="mail" placeholder="Your Email please"/>
                         <textarea className="txtar" name="message" id="textarea" placeholder="How can I help you"></textarea>
                         
                         <button type="submit" className="subButton">Send message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}