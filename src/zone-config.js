/**
 * `zone.js` configuration.
 * https://github.com/angular/angular/blob/main/packages/zone.js/lib/zone.configurations.api.ts
 */

// Disable the monkey patch of the browser `timer` APIs (`setTimeout()`, `setInterval()`).
// window.__Zone_disable_timers = true;

// Disable the monkey patch of the browser `requestAnimationFrame()` API.
// window.__Zone_disable_requestAnimationFrame = true;

// Disable the monkey patching of the browser's `queueMicrotask()` API.
// window.__Zone_disable_queueMicrotask = true;

// Disable the monkey patch of the browser onProperty APIs(such as `onclick`).
// window.__Zone_disable_on_property = true;

// Define event names that we don't want monkey patched by the `zone.js`.
// window.__zone_symbol__UNPATCHED_EVENTS = ['scroll', 'mousemove'];

/**
 * Define the event names of the passive listeners.
 * It can be used to improve scrolling performance.
 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#improving_scrolling_performance_with_passive_listeners
 */
// window.__zone_symbol__PASSIVE_EVENTS = ['scroll'];
