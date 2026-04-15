export default function decorate(block) {
  const path = window.location.pathname === '/' ? '/index' : window.location.pathname;
  block.setAttribute('data-aue-resource', `urn:aemconnection:${path}/jcr:content/root/section/hero`);
  block.setAttribute('data-aue-type', 'component');
  block.setAttribute('data-aue-model', 'hero');
  block.setAttribute('data-aue-label', 'Hero');

  const rows = [...block.children];
  if (rows.length >= 2) {
    // First row = image, Second row = text
    const imageRow = rows[0];
    const textRow = rows[1];

    // Instrument the image
    const img = imageRow.querySelector('img');
    if (img) {
      img.setAttribute('data-aue-prop', 'image');
      img.setAttribute('data-aue-type', 'media');
      img.setAttribute('data-aue-label', 'Image');
    }

    // Instrument the text content
    const textDiv = textRow.querySelector('div');
    if (textDiv) {
      textDiv.setAttribute('data-aue-prop', 'text');
      textDiv.setAttribute('data-aue-type', 'richtext');
      textDiv.setAttribute('data-aue-label', 'Text');
    }
  }
}
