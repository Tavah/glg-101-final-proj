import { bill } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Location = () => (
  <section id="event" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Location of the <br className="sm:block hidden" /> Earthquake:
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Occuring 72 kilometers off the coast of the Oshika Peninsula, severe tremors were felt along much of mainland Japan, with minor to moderate tremors being felt across the entire country.
      </p>

      <Button styles={`mt-10`} />

    </div>
  </section>
);

export default Location;
