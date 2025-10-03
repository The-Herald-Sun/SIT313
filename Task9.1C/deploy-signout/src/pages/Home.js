import Banner from '../components/Banner.js'
import CenterText from '../components/CenterText.js'
import Shelf from '../components/Shelf.js'
import Button from '../components/Button.js'

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

export default function Home() {
  function link() {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  }
  return (<div class="home">
    <Banner url={"/images/banner.png"} />
    <CenterText>
      <h1>Featured Articles</h1>
    </CenterText>
    <Shelf data={articles} />
    <Button onClick={link}>See all Articles</Button>
    <CenterText>
      <h1>Featured Tutorials</h1>
    </CenterText>
    <Shelf data={tutorials} />
    <Button onClick={link}>See all Tutorials</Button>
  </div>
  )
}
