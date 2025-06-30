import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import aboutMain from '../assets/images/aboutMain.png';
import missionFlag from '../assets/images/missionFlag.png';
import teamPeople from '../assets/images/teamPeople.png';
import valuesShield from '../assets/images/valuesShield.png';
import Prathmesh from '../assets/images/Prathmesh.png';
import Vedant from '../assets/images/Vedant.png';
import Yash from '../assets/images/Yash.png';
import Sejal from '../assets/images/Sejal.png';
import Riya from '../assets/images/Riya.png';
import Anushri from '../assets/images/Anushri.png';

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  return (
    <>
      <Navbar />
<main className="page-content">
      <div className="about-page">
        <h1 className="about-heading">About Us</h1>

        {/* Section: Empowering */}
        <section className="about-section" data-aos="fade-up">
          <div className="about-text">
            <h2>Empowering you to take control of your finances</h2>
            <p>
              Live With Finance, we are committed to simplifying personal finance
              management. Our platform allows you to effortlessly track your
              spending from various payment sources, set budgets, and gain
              valuable insights into your financial habits.
            </p>
          </div>
          <div className="about-image small">
            <img src={aboutMain} alt="Empowering illustration" />
          </div>
        </section>

        {/* Section: Mission */}
        <section className="about-section alt" data-aos="fade-up">
          <div className="about-text">
            <h2>Our Mission</h2>
            <p>
              Our mission is to make financial tracking accessible, intuitive,
              and insightful for everyone.
            </p>
          </div>
          <div className="about-image">
            <img src={missionFlag} alt="Mission flag" />
          </div>
        </section>

        {/* Section: Who We Are */}
        <section className="about-section" data-aos="fade-up">
          <div className="about-text">
            <h2>Who We Are</h2>
            <p>
              We are a team of tech enthusiasts and financial experts dedicated
              to creating user-friendly financial solutions.
            </p>
          </div>
          <div className="about-image">
            <img src={teamPeople} alt="Team illustration" />
          </div>
        </section>

        {/* Section: Values */}
        <section className="about-section alt" data-aos="fade-up">
          <div className="about-text">
            <h2>Our Values</h2>
            <p>
              We believe in transparency, security, and empowering our users
              through innovative technology.
            </p>
          </div>
          <div className="about-image">
            <img src={valuesShield} alt="Values icon" />
          </div>
        </section>

        {/* Section: Our Team */}
        <section className="about-section team-section" data-aos="fade-up">
          <h2 className="team-heading">Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member" data-aos="fade-up" data-aos-delay="100">
              <img src={Prathmesh} alt="Prathmesh" className="team-photo" />
              <h3>Prathmesh</h3>
              <p className="role">Project Manager & Data Analyst</p>
              <p className="bio">Leads the project with clear planning, coordination, and execution. Also responsible for analyzing data trends and insights to support informed decision-making.</p>
            </div>

            <div className="team-member" data-aos="fade-up" data-aos-delay="200">
              <img src={Vedant} alt="Vedant" className="team-photo" />
              <h3>Vedant</h3>
              <p className="role">Frontend Developer "Logic & Integration"</p>
              <p className="bio">Ensuring smooth user interactions and reliable data flow. Focused on logic handling, performance, and responsive behavior across components.</p>
            </div>

            <div className="team-member" data-aos="fade-up" data-aos-delay="300">
              <img src={Yash} alt="Yash" className="team-photo" />
              <h3>Yash</h3>
              <p className="role">Backend Developer "Allrounder"</p>
              <p className="bio">Provides development assistance across the tech stack, helping bridge frontend and backend workflows and resolving cross-functional challenges.</p>
            </div>

            <div className="team-member" data-aos="fade-up" data-aos-delay="400">
              <img src={Sejal} alt="Sejal" className="team-photo" />
              <h3>Sejal</h3>
              <p className="role">Frontend Developer "UI Specialist"</p>
              <p className="bio">Focuses on implementing pixel-perfect designs and responsive layouts that bring the UI/UX vision to life on all screen sizes.</p>
            </div>

            <div className="team-member" data-aos="fade-up" data-aos-delay="500">
              <img src={Riya} alt="Riya" className="team-photo" />
              <h3>Riya</h3>
              <p className="role">Database & Architecture</p>
              <p className="bio">Manages server-side logic and database structures, ensuring secure data handling and efficient backend performance.</p>
            </div>

            <div className="team-member" data-aos="fade-up" data-aos-delay="600">
              <img src={Anushri} alt="Anushri" className="team-photo" />
              <h3>Anushri</h3>
              <p className="role">UI/UX Designer</p>
              <p className="bio">Designs intuitive and visually appealing user interfaces while ensuring a smooth and user-friendly experience across the application.</p>
            </div>
          </div>
        </section>
      </div>

      <div data-aos="fade-up">
        <Footer />
      </div>
      </main>
    </>
  );
}

export default About;
