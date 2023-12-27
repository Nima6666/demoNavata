import doctorImg from "../assets/doc.png";
import healthLogo from "../assets/healthLogo.png";

export default function Hero() {
    return (
        <>
            <div className="heroContent">
                <div className="text">
                    <h1>Best Paediatric Surgeon in Nepal</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Illo minima, sit culpa sapiente ipsa quam ab quaerat,
                        hic nihil numquam aspernatur necessitatibus rerum ipsum
                        nemo debitis praesentium quo. Vitae, deleniti?
                    </p>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Assumenda tenetur totam facere nobis recusandae
                        vitae repudiandae porro animi, eaque rerum.
                    </p>
                    <button
                        className="appointmentBtn"
                        style={{
                            backgroundColor: "black",
                            fontSize: "bold",
                            color: "white",
                        }}
                    >
                        BOOK AN APPOINTMENT
                    </button>
                </div>
                <aside>
                    <div className="imageContainer">
                        <img src={doctorImg} alt="" width="50vw" />
                    </div>
                    <label>
                        <img src={healthLogo} height="70px" />
                        <div className="imgDes">
                            <h1>Dr. Jon Doe</h1>
                            <p>MBBS, MS (Paediatric Surgeon)</p>
                        </div>
                    </label>
                </aside>
            </div>
        </>
    );
}
