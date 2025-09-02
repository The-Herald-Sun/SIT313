import './Card.css'

export default function Card({ key, imgUrl, title, description, rating, author }) {
  return (
    <div class='card'>
      <img src={imgUrl} />
      <h3>{title}</h3>
      <hr />
      <p class="description">{description}</p>
      <hr />
      <div class="left-right">
        <p>⭐{rating}</p>
        <p>{author}</p>
      </div>
    </div>
  )
}
