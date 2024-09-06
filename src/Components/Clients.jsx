import "./Clients.css"
import emily from "./../assets/image-emily.jpg"
import thomas from "./../assets/image-thomas.jpg"
import jennie from "./../assets/image-jennie.jpg"

function Clients() {
    return (
        <div className="clients">
            <h4 className="text">Client testimonials</h4>
            <div className="emily client">
                <img src={emily} alt="image-emily" />
                <p className="bio">We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
                <p className="name">Emily R.</p>
                <p className="role">Marketing Director</p>
            </div>
            <div className="thomas client">
                <img src={thomas} alt="image-thomas" />
                <p className="bio">Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</p>
                <p className="name">Thomas S.</p>
                <p className="role">Chief Operating Officer</p>
            </div>
            <div className="jennie client">
                <img src={jennie} alt="image-jennie" />
                <p className="bio">Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
                <p className="name">Jennie F.</p>
                <p className="role">Business Owner</p>
            </div>
        </div>
    )
}

export default Clients