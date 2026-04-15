// eslint-disable-next-line import/no-cycle
import { loadScript } from './aem.js';

// Load Universal Editor support on preview and localhost
if (
  window.location.hostname.endsWith('.aem.page')
  || window.location.hostname === 'localhost'
) {
  loadScript('/scripts/editor-support.js', { type: 'module' });
}
