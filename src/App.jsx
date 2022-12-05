import styles from "./style";
import { Location, Predictability, Main, Supporting, Interferogram, Footer, Navbar, Stats, GeoConnections, Intro, Resources, Tsunami, Contextual, Boundary } from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Intro />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Boundary />
        <Main />
        <Boundary />
        <Supporting />
        <Boundary />
        <Contextual />
        <Boundary />
        <Location />
        <Interferogram />
        <Predictability />
        <Tsunami />
        <Boundary />
        <GeoConnections />
        <Resources />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
