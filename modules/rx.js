import importUMD from './import-umd.js';

const rxjsModuleUrl = 'https://cdnjs.cloudflare.com/ajax/libs/rxjs/7.3.0/rxjs.umd.min.js';
const rxjsLatestUrl = 'https://unpkg.com/rxjs@^7/dist/bundles/rxjs.umd.min.js'

export const rxjs = await importUMD(rxjsLatestUrl)
