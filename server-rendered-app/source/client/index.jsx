'use strict';
import React from 'react';
import { render }from 'react-dom';
import { Router, browserHistory } from 'react-router';

import { routes } from '../routes';

if(typeof BOOTSTRAP_CLIENT_STATE !== "undefined")
console.log(BOOTSTRAP_CLIENT_STATE);


render(
  <Router routes={routes} history={ browserHistory } />,
  document.getElementById('app')
)

