import React from "react";

const Button = ({ styles }) => (
  
  <a href="https://docs.google.com/document/d/10R-TOumJrjRv2AS3bMhNFF9V2to0MZaD/edit?usp=sharing&ouid=106538834976252080167&rtpof=true&sd=true">
    <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
      Resources
    </button>
  </a>
);

export default Button;
