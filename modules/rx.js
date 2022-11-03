import importUMD from '/modules/import-umd.js';

const rxjsModuleUrl = 'https://cdnjs.cloudflare.com/ajax/libs/rxjs/7.3.0/rxjs.umd.min.js';

export const rxjs = await importUMD(rxjsModuleUrl)