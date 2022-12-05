import { tsunami } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const interferogram = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Resulting Tsunami:
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        The resulting aerial photograph taken of the Tsunami shortly after the earthquake illustrates the devastation caused by such an event.  As the wall of water rushed over the coast, including higher rocky coasts, andthrough the landscape, homes, businesses, and other infrastructure was destroyed, including the damaging of multiple nuclear reactors in the area, with the eventuality of the Fukushima-Daiichi Nuclear Reactor having a meltdown and contaminating much of the surrounding lands and atmosphere.  Natural and artifical Levees were overpowered, so currently, an engineering project is underway to raise some areas by as much as ten meters to mitigate future damages.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={ tsunami } alt="" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default interferogram;
