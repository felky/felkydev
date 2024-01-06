export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
            <div style={{ position: "absolute", bottom: 0, fontSize: 10, textAlign: "center"}}>
                <p>© felix gramell - { currentYear }</p>
            </div>
        )
}