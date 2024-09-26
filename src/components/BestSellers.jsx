import React from 'react';
import './BestSellers.css';
import tablet1 from '../Images/tablet1.jpeg';
import tablet2 from '../Images/tablet2.jpeg';
import tablet3 from '../Images/tablet3.jpeg';
import tablet4 from '../Images/tablet4.jpeg';
import tablet5 from '../Images/tablet5.jpeg';
import tablet6 from '../Images/tablet6.jpeg';
import health1 from '../Images/health1.jpeg';
import health2 from '../Images/health2.jpeg';
import health3 from '../Images/health3.jpeg';
import health4 from '../Images/health4.jpeg';
import health5 from '../Images/health5.jpeg';
import health6 from '../Images/health6.jpeg';

export const BestSellers = () => {
  return (
    <div id='cT'>
      <h1>BestSellers</h1>
      <div id='tablet'>
        <div>
          <img src={tablet1} alt="Multivitamins" />
          <p><b>Multivitamins</b></p>
        </div>
        <div>
          <img src={tablet2} alt="Omega - 3" />
          <p><b>Omega - 3</b></p>
        </div>
        <div>
          <img src={tablet3} alt="Nervous system support" />
          <p><b>Nervous system support</b></p>
        </div>
        <div>
          <img src={tablet4} alt="Gastrointestinal Health" />
          <p><b>Gastrointestinal Health</b></p>
        </div>
        <div>
          <img src={tablet5} alt="Joint Health" />
          <p><b>Joint Health</b></p>
        </div>
        <div>
          <img src={tablet6} alt="Household Essentials" />
          <p><b>Household Essentials</b></p>
        </div>
      </div>
      <h1>Shop By Health concerns</h1>
      <div id='health'>
        <div>
          <img src={health1} alt="Diabetes" />
          <p><b>Diabetes</b></p>
        </div>
        <div>
          <img src={health2} alt="Heart Care" />
          <p><b>Heart Care</b></p>
        </div>
        <div>
          <img src={health3} alt="Stomach Care" />
          <p><b>Stomach Care</b></p>
        </div>
        <div>
          <img src={health4} alt="Liver Care" />
          <p><b>Liver Care</b></p>
        </div>
        <div>
          <img src={health5} alt="Bone Joint & Muscle Care" />
          <p><b>Bone Joint & Muscle Care</b></p>
        </div>
        <div>
          <img src={health6} alt="Kidney Care" />
          <p><b>Kidney Care</b></p>
        </div>
      </div>
    </div>
  );
};
