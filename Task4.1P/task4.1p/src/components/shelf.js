import Card from './card.js'

export default function Shelf({data}) {
    return (
        <div class="shelf">
            {data.map((item) => (
                <Card
                    key={item.key}
                    imgUrl={item.imgUrl}
                    title={item.title}
                    description={item.description}
                    rating={item.rating}
                    author={item.author}
                />
            ))}
        </div>
    )
}
