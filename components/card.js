export default function Gallery({ image, title, text, link }) {
    return (
        <div className="card">
            <img src={`/${image}.png`} alt="Card Image" className="cardImg"/>
            <h2><a href={link}> {title}</a></h2>
            <p> {text} </p>
        </div>
    )
}