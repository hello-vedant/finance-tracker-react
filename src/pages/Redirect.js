import Navbar from '../components/navbar';
import underConstruction from '../assets/images/under_construction.jpg';

function Redirect() {
  return (
    <>
      <Navbar />
      <div className="under-construction-container">
        <section className="under-construction">
          <img src={underConstruction} alt="Under Construction" />
          <h1>🚧 This Page is Under Construction</h1>
          <p>We’re working hard to bring you this feature soon.<br />Stay tuned!</p>
        </section>
      </div>
    </>
  );
}

export default Redirect;
