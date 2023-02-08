import React from "react";
import vg from "../assets/—Pngtree—blue purple colorful round tech_5488955 (1).png";
import{AiFillGoogleCircle,AiFillAmazonCircle,AiFillInstagram,AiFillYoutube} from "react-icons/ai"
const Home = () => {
  return (
    <>
      <div className="Home" id="home">
        <main>
          <h1>TachStar</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            illum aliquam dolorum? Cupiditate
          </p>
        </main>
      </div>

      <div className="Home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit magnam
            dignissimos obcaecati sint iste itaque sapiente quo doloribus
            repudiandae molestiae nostrum eaque in minima blanditiis, quos,
            repellendus odit, distinctio nulla.
          </p>
        </div>
      </div>

      <div className="Home3" id="about">
        <div>
          <h1>How we are </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
            repellendus eum cumque blanditiis, dignissimos nobis esse temporibus
            nam ipsam aut consequuntur tempore nisi voluptas praesentium a?
            Consequuntur, necessitatibus repellat. Perferendis!
          </p>
        </div>
      </div>


      <div className="Home4" id="brands">
       
        <div>
        <h1>Brands</h1>
           <article>
          <div style={{
            animationDelay:"0.3s"
          }}>
           <AiFillGoogleCircle/>
           <p>Google</p>
          </div>

          <div style={{
            animationDelay:"0.5s"
          }}>
           <AiFillAmazonCircle/>
           <p>Amazon</p>
          </div>

          <div style={{
            animationDelay:"0.8s"
          }}>
           <AiFillInstagram/>
           <p>Instagram</p>
          </div>

          <div style={{
            animationDelay:"1s"
          }}>
           <AiFillYoutube/>
           <p>Youtube</p>
          </div>
        </article></div>
       
      </div>
    </>
  );
};

export default Home;
