import Reveal from 'reveal.js';
import './sass/main.scss';

Reveal.initialize({
  hash: true,
  dependencies: [
    { src: 'plugin/highlight/highlight.js', async: true },
    { src: 'plugin/notes/notes.js', async: true },
  ],
});
