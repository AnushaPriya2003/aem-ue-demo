import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  const path = window.location.pathname === '/' ? '/index' : window.location.pathname;
  block.setAttribute('data-aue-resource', `urn:aemconnection:${path}/jcr:content/root/section/columns`);
  block.setAttribute('data-aue-type', 'component');
  block.setAttribute('data-aue-model', 'columns');
  block.setAttribute('data-aue-label', 'Columns');

  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  // setup image columns
  [...block.children].forEach((row, i) => {
    moveInstrumentation(row, row);
    [...row.children].forEach((col, j) => {
      col.setAttribute('data-aue-resource', `urn:aemconnection:${path}/jcr:content/root/section/columns/row_${i}/col_${j}`);
      col.setAttribute('data-aue-type', 'component');
      col.setAttribute('data-aue-label', `Column ${j + 1}`);

      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          picWrapper.classList.add('columns-img-col');
        }
      }
    });
  });
}
