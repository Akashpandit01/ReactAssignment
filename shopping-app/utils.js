// Utility: Promise timeout using race
function withTimeout(ms, promise) {
  return Promise.race([
    promise,
    new Promise((_ , reject) => setTimeout(() => reject("⏱ Timeout"), ms))
  ]);
}

// Utility: Retry fetch up to 3 times
function retryFetch(url, options, retries = 3) {
  return fetch(url, options).catch(err => {
    if (retries === 0) return Promise.reject(err);
    return retryFetch(url, options, retries - 1);
  });
}

// Developer logs
let apiLogs = [];

function logApi(url, method, status, duration, fromCache = false) {
  apiLogs.unshift({ url, method, status, duration, fromCache });
  apiLogs = apiLogs.slice(0, 5);
  renderDevPanel();
}

function renderDevPanel() {
  const dev = document.getElementById("dev-log");
  dev.innerHTML = apiLogs.map(
    l => `<li>[${l.method}] ${l.url} - ${l.status} (${l.duration} ms) ${l.fromCache ? 'CACHE' : 'NET'}</li>`
  ).join("");
}
