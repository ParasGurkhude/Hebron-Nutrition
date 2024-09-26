import React from 'react';
import './Information.css';
import poster from '../Images/poster.jpeg';
import { Button } from '@chakra-ui/react';

export const Information = () => {
  return (
    <div id='information-container'>
      <img src={poster} alt="Poster" />
      <div>
        <p><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b> <br />Proin vitae quam a enim gravida condimentum. Integer finibus tincidunt tortor. Donec ac porttitor lorem. Vivamus commodo leo in vestibulum egestas. In suscipit, purus ac auctor dapibus, eros mi iaculis est, at blandit quam orci quis purus. Mauris vestibulum viverra tortor ut blandit. Nulla laoreet dictum tellus, non congue purus rhoncus sit amet. Cras semper odio eu urna bibendum laoreet. Nullam convallis mi vel nisl egestas, ac mollis purus lacinia. Donec non venenatis purus.
          <br />
          Proin vitae quam a enim gravida condimentum. Integer finibus tincidunt tortor. Donec ac porttitor lorem. Vivamus commodo leo in vestibulum egestas. In suscipit, purus ac auctor dapibus, eros mi iaculis est, at blandit quam orci quis purus. Mauris vestibulum viverra tortor ut blandit. Nulla laoreet dictum tellus, non congue purus rhoncus sit amet. Cras semper odio eu urna bibendum laoreet. Nullam convallis mi vel nisl egestas, ac mollis purus lacinia. Donec non venenatis purus
          Proin vitae quam a enim gravida condimentum. Integer finibus tincidunt tortor. Donec ac porttitor lorem. Vivamus commodo leo in vestibulum egestas. In suscipit, purus ac auctor dapibus, eros mi iaculis est, at blandit quam orci quis purus. Mauris vestibulum viverra tortor ut blandit. Nulla laoreet dictum tellus, non congue purus rhoncus sit amet. Cras semper odio eu urna bibendum laoreet. Nullam convallis mi vel nisl egestas, ac mollis purus lacinia. Donec non venenatis purus
        </p>
        <Button colorScheme='purple'>Learn More</Button>
      </div>
    </div>
  );
};
