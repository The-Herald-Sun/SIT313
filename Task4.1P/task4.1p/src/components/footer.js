import CenterText from './centerText.js'
import DevDeakinLogo from './devDeakinLogo.js'

export default function Footer () {
    return (
        <div class="Footer">
            <div class="left-right">
                <ul>
                    <h1>Explore</h1>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Home</a> <br />
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Questions</a> <br />
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Articles</a> <br />
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Tutorials</a> <br />
                </ul>
                <ul>
                    <h1>Support</h1>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">FAQS</a> <br />
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Help</a> <br />
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Contact Us</a> <br />
                </ul>
                <ul>
                    <h1>Stay Connected</h1>
                    <div class="socials">
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><img src="/images/facebook.png" /></a>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><img src="/images/twitter.png" /></a>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><img src="/images/insta.png" /></a>
                    </div>
                </ul>
            </div>
            <CenterText>
                <DevDeakinLogo />
            </CenterText>
            <div class="legal">
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Privacy Policy</a> <br />
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Terms</a> <br />
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Code Of Conduct</a> <br />
            </div>
            <br />
        </div>
    )
}
