import { contextual } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== contextual.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Contextual = () =>  (
  <section id="contextual" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
       <a href="https://youtu.be/1WaV2x8GXj0"> Other Contextual Terms: <br className="sm:block hidden" /></a>
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        These are some of the contextual terms and definitions to this final project.  
      </p>
      <br />
      <br />
      <br />

      <h2 className={styles.heading2}>
        Contextual Videos:
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>

      <span className="text-gradient">Click on these!</span>{" "}

        <br />
        <br />

        <a href="https://youtu.be/gR5KVIP7PKk">Abroad in Japan - What Happened After Japan’s $200 BILLION Disaster: Stories from the Tsunami (Documentary)</a> 
        <br />
        <br />
        <a href="https://youtu.be/ObSo4VxCFzs">Abroad in Japan - What Happened In Japan After The Tsunami?</a>
        <br />
        <br />
        <a href="https://youtu.be/3618dZoiaPE">Earthquake Engineering Research Institute - Japan Tsunami 3-11-2011</a>
        <br />
        <br />
        <a href="https://youtu.be/oWzdgBNfhQU">National Geographic - Rare Video: Japan Tsunami | National Geographic</a>
        <br />
        <br />
        <a href="https://youtu.be/mUBxtTEOiPI">BBC News - Fukushima: The nuclear disaster that shook the world</a>
        <br />
        <br />
        <a href="https://youtu.be/mk68bZ701s0">ANNnewsCH - Tsunami, Great East Japan Earthquake, Sendai airport, Sendai, Miyagi, Japan [11 Mar 2011]</a>
        <br />
        <br />
        <a href="https://youtu.be/5mVKVeU75ZA">The Infographics Show - How Fukushima Disaster ACTUALLY Happened</a>

        </p>
      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {contextual.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>


);

export default Contextual;
