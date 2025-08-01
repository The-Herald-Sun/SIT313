export default function Button ({href, children}) {
    return (
    <div class="button">
        <a href={href}>
            {children}
        </a>
    </div>
    )
}
