import bnbLogo from "../assets/homepage/bnbLogo.svg";
import norvicLogo from "../assets/homepage/norvicLogo.jpg"
import cliniconeLogo from "../assets/homepage/cliniconeLogo.png"
import alkaLogo from "../assets/homepage/alkaLogo.jpg"

export default function Partners() {
    return (<>
    <div style={{padding: "20px"}}className="notablePartners">
        <h1 style={{fontSize: "1.8rem", textAlign: "center"}}>Our Notable Partners</h1>
        <div className="partners" >
            <div className="imgContainer"><img src={bnbLogo} alt="" /></div>
            <div className="imgContainer" style={{padding: "10px", backgroundColor:"white", borderRadius:"15px"}}><img src={norvicLogo} alt="" /></div>
            <div className="imgContainer"><img src={cliniconeLogo} alt="" /></div>
            <div className="imgContainer" style={{padding: "10px", backgroundColor:"white", borderRadius:"15px"}}><img src={alkaLogo} alt="" /></div>
        </div>
        </div>
    </>)
}