import './Chocolate.css';

function Chocolate({title, description}) {
  return (
    <div className="chocolate-card">
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
  )
}

export default Chocolate