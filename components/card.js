export default function Gallery({ image, title, text, link }) {
    return (
        <div className="card">
            <img src={`/${image}.png`} alt="Card Image" style={{height: 170, borderRadius: 50}}/>
            <h2><a href={link}> {title}</a></h2>
            <p> {text} </p>
        </div>
    )
}