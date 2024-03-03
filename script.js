const keys = document.querySelectorAll(`.key`);
const props = ['key', 'keyCode', 'code'];

window.addEventListener('keydown', e => {
  props.forEach((prop, idx) => {
    keys[idx].textContent = e[prop] === ' ' ? 'Space' : e[prop];
  });
});
