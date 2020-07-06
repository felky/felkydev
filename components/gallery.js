import Card from './card'

export default function Gallery() {

    const shellyText = <p> A general purpose discord bot
         created mainly for creating 
        and mixing custom teams for inhouse
         CSGO or Valorant games. </p>

    return (

        <div className="gallery">
            <Card image="shelly" link="https://github.com/felky/shelly" title="Shelly" text={shellyText} />
        </div>
        )
}