import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const tsunami = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Interferogram of the Earthquake:
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        This interferogram to the right, provided by Nasa's Jet Propulsion Laboratory shows the main areas of deformation with as much as 50 centimeters of displacement, along with locations of previous aftershocks relative to when these images were taken.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default tsunami;