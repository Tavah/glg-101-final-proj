import { bill2 } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Predictability = () => (
  <section id="event" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill2} alt="" className="w-[100%] h-[50%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Predictability of the Earthquake:
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      According to Kagan and Jackson, uses the moment conservation technique to "match the deformation rate to that predicted by earthquakes with a truncated or tapered magnitiude-frequencry distribution. For subduction zones, the seismic or historical record is insufficient to constrain either the maximum or corner magnitude. However, the moment conservation principle yields consistent estimates: for all the subduction zones the corner magnitude is of the order 9.0–9.7. Moreover, moment conservation indicates that variations in estimated corner magnitude among subduction zones are not statistically significant. Another moment conservation method, applied at a point on a major fault or plate boundary, also suggests that magnitude 9 events are required to explain observed displacement rates at least for the Tohoku area. The global rate of magnitude 9 earthquakes in subduction zones, predicted from statistical analysis of seismicity as well as from moment conservation, is about five per century; five actually happened." Furthermore, "Any forecast scheme that extrapolates the past instrumental seismicity record would predict future moderate earthquakes reasonably well. However, as the history of the Tohoku area shows, we need a different tool to forecast the largest possible events. In our forecasts we consider the earthquake rate to be independent of the earthquake size distribution, so the latter needs to be specified separately." (Kagan & Jackson, 2013) In essence, the current tools used to predict such devastating earthquakes were not adequate enough to predict or prevent this disaster from occuring.
      </p>

    <Button styles={`mt-10`} />

    </div>
  </section>
);

export default Predictability;
