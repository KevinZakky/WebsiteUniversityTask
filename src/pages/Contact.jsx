import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="hero-contact">
        <div class="card">
          <p class="card-title">The Office</p>
          <p class="small-desc">
            Address: Jl. Raya Tlogomas No.246,Jawa Timur 65144, <br /> <br />{" "}
            Indonesia Phone: (0341) 464318, ext 252 <br />
            <br /> Email: lab.informatika@umm.ac.id
          </p>
          <p></p>
          <div class="go-corner">
            <div class="go-arrow">→</div>
          </div>
        </div>
        <div class="card">
          <p class="card-title">The Business Hours</p>
          <p class="small-desc">
            Address: Jl. Raya Tlogomas No.246,Jawa Timur 65144, <br /> <br />{" "}
            Indonesia Phone: (0341) 464318, ext 252 <br />
            <br /> Email: lab.informatika@umm.ac.id
          </p>
          <p></p>
          <div class="go-corner">
            <div class="go-arrow">→</div>
          </div>
        </div>
        <div class="card">
          <p class="card-title">Issues</p>
          <p class="small-desc">
            Address: Jl. Raya Tlogomas No.246,Jawa Timur 65144, <br /> <br />{" "}
            Indonesia Phone: (0341) 464318, ext 252 <br />
            <br /> Email: lab.informatika@umm.ac.id
          </p>
          <p></p>
          <div class="go-corner">
            <div class="go-arrow">→</div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
