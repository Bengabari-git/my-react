function About(){
    let title = document.getElementById("title");
	title.textContent = "Beng AI | About";

    return(
        <div>
            <h3></h3>
            <div className="about">
                <div className="details cards">
                    <div className="det">
                        <div className="name">Attended
                            <div className="detail">Federal University of tech, Owerri,Imo State, Nigeria</div>
                        </div>
                    </div>
                    <div className="det">
                        <div className="name">Interests
                            <div className="detail">Web development, AI and Machine Learning</div>
                        </div>
                    </div>
                </div>

                <div className="wrap">
                    <div className="skills">
                        <h2>My Skills</h2>
                        <div className="skill">
                            <div>HTML</div>
                            <div className="level">
                                <div className="bar1">96%</div>
                            </div>
                        </div>
                        <div className="skill">
                            <div>CSS</div>
                            <div className="level">
                                <div className="bar2">67%</div>
                            </div>
                        </div>
                        <div className="skill">
                            <div>JavaScript</div>
                            <div className="level">
                                <div className="bar3">70%</div>
                            </div>
                        </div>
                        <div className="skill">
                            <div>Python</div>
                            <div className="level">
                                <div className="bar4">28%</div>
                            </div>
                        </div>
                    </div>
                    <div className="banner">
                        <section>
                            <div className="reactjs ban"></div>
                            <div className="js ban"></div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;