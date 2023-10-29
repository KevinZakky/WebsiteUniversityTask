import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const About = () => {
  return (
    <>
      <Navbar />
      <section className="hero-about">
        <main>
          <img src="../asset/main-about.jpg" alt="" />
          <div className="text">
            <h2>Welcome To Laboratory Informatics</h2>
            <p>
              Laboratorium Teknik Informatika berfungsi sebagai pusat
              pembelajaran praktis dan eksperimental yang dipergunakan oleh
              mahasiswa dan pelayanan untuk riset dan konsultasi keteknikan
              mencakup desain sofware untuk animasi, administrasi, grafis dll.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus provident excepturi error repellendus reiciendis a
              laborum, in deleniti, tenetur temporibus itaque veniam maiores
              consequatur repellat impedit eius non? Vitae tempora voluptatum
              facere possimus, sapiente illo sequi. Est consequuntur placeat
              eius et, sed similique voluptatem ut quidem, id aspernatur dolorem
              inventore?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              aliquid unde quam nobis exercitationem, impedit maiores,
              voluptatem sed fugit veniam molestiae. Architecto perspiciatis,
              dolorem voluptatibus assumenda a cumque deleniti! Est!
            </p>
          </div>
        </main>
      </section>
      <Footer />
    </>
  );
};

export default About;
