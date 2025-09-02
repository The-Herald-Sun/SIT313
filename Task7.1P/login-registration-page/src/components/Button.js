import './Button.css'

export default function Button({ children, onClick }) {
  return (
    <div class="button">
      <button onClick={onClick}>{children}</button>
    </div>
  )
}
