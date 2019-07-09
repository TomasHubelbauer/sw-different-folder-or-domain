import App from './App.tsx';
import 'https://unpkg.com/react@16.8.6/umd/react.development.js';
import 'https://unpkg.com/react-dom@16.8.6/umd/react-dom.development.js';

window.addEventListener('load', async () => {
  render(createElement(App), document.getElementById('root'));
});
