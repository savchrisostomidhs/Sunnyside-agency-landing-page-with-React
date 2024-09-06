import "./Main.css"

function Main() {
    return (
        <main>
            <div className="a square">
                <h2>Transform your brand</h2>

                <p>We are a full-service creative agency specializing in helping brands grow fast.
                    Engage your clients through compelling visuals that do most of the marketing for you.</p>

                <div className="more">
                    <p>Learn more</p>
                    <div className="text-decor"></div>
                </div>
            </div>
            <div className="b square"></div>
            <div className="c square"></div>
            <div className="d square">
                <h2>Stand out to the right audience</h2>

                <p>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>

                <div className="more">
                    <p>Learn more</p>
                    <div className="text-decor"></div>
                </div>
            </div>
            <div className="e square">
                <h3>Graphic design</h3>
                <p>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
            </div>
            <div className="f square">
                <h3>Photography</h3>
                <p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
            </div>
        </main>
    )
}

export default Main