import MailingListSignUp from './components/MailingListSignUp.js'
import NavBar from './components/navbar.js'
import Banner from './components/banner.js'
import CenterText from './components/centerText.js'
import Shelf from './components/shelf.js'
import Footer from './components/footer.js'
import Button from './components/button.js'
import './App.css';

const articles = [
  {
    key: 0,
    imgUrl: "/images/1.png",
    title: "Cool Pink",
    description: "What a wonderful description",
    rating: 3,
    author: "Dave"
  },
  {
    key: 1,
    imgUrl: "/images/2.png",
    title: "Sunset Serenity",
    description: "A guide to painting peaceful sunsets with watercolors.",
    rating: 5,
    author: "Jane"
  },
  {
    key: 2,
    imgUrl: "/images/3.png",
    title: "Urban Design",
    description: "An exploration of modern city buildings and their design.",
    rating: 4,
    author: "Mike"
  }
];

const tutorials = [
  {
    key: 0,
    imgUrl: "/images/3.png",
    title: "Introduction to HTML",
    description: "Learn the fundamentals of building web pages with HTML.",
    rating: 5,
    author: "Sarah"
  },
  {
    key: 1,
    imgUrl: "/images/4.png",
    title: "Advanced CSS Flexbox",
    description: "Master the art of creating flexible layouts with CSS Flexbox.",
    rating: 4,
    author: "Alex"
  },
  {
    key: 2,
    imgUrl: "/images/5.png",
    title: "JavaScript Basics",
    description: "A beginner's guide to the most popular programming language.",
    rating: 4,
    author: "Chris"
  }
];

function App() {
  return (
    <div className="App">
      <p>WHY</p>
      <NavBar></NavBar>
      <Banner url={"/images/banner.png"} />
      <CenterText>
        <h1>Featured Articles</h1>
      </CenterText>
      <Shelf data={articles} />
      <Button href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">See all Articles</Button>
      <CenterText>
        <h1>Featured Tutorials</h1>
      </CenterText>
      <Shelf data={tutorials} />
      <Button href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">See all Tutorials</Button>
      test
      <MailingListSignUp />
      <Footer />
    </div>

  );
}

export default App;
