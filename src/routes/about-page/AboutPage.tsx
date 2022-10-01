import "./aboutPage.scss"
import Avatar from "./photo.jpg";

const AboutPage = () => {
    return (
        <div className="ya-about container">
            <img className="ya-about-pic" src={Avatar} alt="Avatar" />
            <div className="ya-about-content">
                <h1 className="py-2">Hey, I'm Yağmur!</h1>
                <p>I am a senior computer engineering and mathematics student at Koç University. </p>
                <p>For the last couple of years, I have been interested in deep learning, especially on nlp and generative models. My main motivation for writing these blogs is to educate myself more effectively because I believe one of the best ways to learn is to teach.</p>
                <p> Among these posts, you can find short-read summaries for state-of-the-art deep learning papers, articles about my personal experiences on research and work that I do, or some notes and proofs from deep learning courses I took.</p>
            </div>
        </div>
    )
}

export default AboutPage