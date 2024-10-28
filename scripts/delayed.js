// eslint-disable-next-line import/no-cycle
import { sampleRUM } from './aem.js';
import '../libs/puresight/main-v1.24.16.js';

// Core Web Vitals RUM collection
sampleRUM('cwv');

// add more delayed functionality here
