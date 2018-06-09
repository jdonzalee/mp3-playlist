//import react into the bundle
import React from 'react';
import ReactDOM from 'react-dom';

//include bootstrap npm library into the bundle
import 'bootstrap';

//include your index.scss file into the bundle
import '../styles/index.scss';

//import your own components
import fontawesome from '@fortawesome/fontawesome';

import {Home} from './component/home.jsx';
import faPlay from '@fortawesome/fontawesome-free-solid/faPlay';
import faStepBackward from '@fortawesome/fontawesome-free-solid/faStepBackward';
import faStepForward from '@fortawesome/fontawesome-free-solid/faStepForward';

fontawesome.config = {
  autoReplaceSvg: 'nest'
};

fontawesome.library.add(
    faPlay, faStepBackward, faStepForward
);


//render your react application
ReactDOM.render(
    <Home />,
    document.querySelector('#app')
);