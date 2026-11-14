// Supplied event harness. Do not edit for this assignment.
function setMessage(text) {
  document.querySelector('#message').textContent = text;
}
function setExhibitVisible(visible) {
  document.querySelector('#exhibit').setAttribute('visible', visible);
}
function logEvent(name) {
  const item = document.createElement('li');
  item.textContent = name;
  document.querySelector('#event-log').appendChild(item);
}
const scene = document.querySelector('a-scene');
scene.addEventListener('targetFound', () => { onTargetFound(); logEvent('targetFound — simulated'); });
scene.addEventListener('targetLost', () => { onTargetLost(); logEvent('targetLost — simulated'); });
document.querySelector('#found').addEventListener('click', () => scene.emit('targetFound'));
document.querySelector('#lost').addEventListener('click', () => scene.emit('targetLost'));
document.querySelector('#reset').addEventListener('click', () => { showSearching(); logEvent('reset — searching requested'); });
function initialise() { showSearching(); logEvent('page loaded — searching requested'); }
if (scene.hasLoaded) initialise(); else scene.addEventListener('loaded', initialise, {once: true});
