let request = null;

export function setInstance(instance) {
  request = instance;
}

export function getInstance() {
  return request;
}