import strongImg from "../assets/homepage/muscle.png";
import sickImg from "../assets/homepage/sick.png";
import diagnoseImg from "../assets/homepage/diagnose.png";
import healthCheckImg from "../assets/homepage/health-check.png";
import vaccineImg from "../assets/homepage/vaccination.png";
import nutritionImg from "../assets/homepage/nutrition.png";

export default function Services() {
    return (
        <div className="services">
            <div className="title">
                <h1>Our Services</h1>
            </div>
            <div className="serv">
                <div className="srv1">
                    <img className="srvImg" src={sickImg} alt="" />
                    <h2>Childhood Diseases</h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Molestiae, animi.
                    </p>
                    <a href="#">learn more</a>
                </div>
                <div className="srv2">
                    <img className="srvImg" src={strongImg} alt="" />
                    <h2>Child Development</h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Molestiae, animi.
                    </p>
                    <a href="#">learn more</a>
                </div>
                <div className="srv3">
                    <img className="srvImg" src={vaccineImg} alt="" />
                    <h2>Child Vaccinations</h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Molestiae, animi.
                    </p>
                    <a href="#">learn more</a>
                </div>
                <div className="srv4">
                    <img className="srvImg" src={diagnoseImg} alt="" />
                    <h2>Precise Diagnosis</h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Molestiae, animi.
                    </p>
                    <a href="#">learn more</a>
                </div>
                <div className="srv5">
                    <img className="srvImg" src={healthCheckImg} alt="" />
                    <h2>Annual Checkups</h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Molestiae, animi.
                    </p>
                    <a href="#">learn more</a>
                </div>
                <div className="srv6">
                    <img className="srvImg" src={nutritionImg} alt="" />
                    <h2>Nutrition Counselling</h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Molestiae, animi.
                    </p>
                    <a href="#">learn more</a>
                </div>
            </div>
        </div>
    );
}
