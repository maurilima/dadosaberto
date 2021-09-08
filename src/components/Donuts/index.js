import React from 'react';
import { render } from 'react-dom';

import Donut from 'react-svg-donut';

import './index.css'

// The donut will be half filled
const progress = 50;

// The value will be wrapped inside a <strong> tag.
const renderProgress = progress => <strong>{progress}%</strong>;

render(<Donut progress={progress} onRender={renderProgress} />, document.getElementById('demo'));