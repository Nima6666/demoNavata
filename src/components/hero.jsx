import doctorImg from "../assets/homepage/doc.png";
import healthLogo from "../assets/homepage/healthLogo.png";

export default function Hero() {
    return (
        <>
            <div className="heroContent">
                <div className="text">
                    <h1 style={{ fontSize: "1.5rem" }}>
                        Best Colorectal Surgeon in Nepal
                    </h1>
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
                    <button className="appointmentBtn">
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
                            <h1>Dr. Binay Yadav</h1>
                            <p>MBBS, MS (Colorectal Surgeon)</p>
                        </div>
                    </label>
                </aside>
            </div>
        </>
    );
}
