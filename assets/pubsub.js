let subscribers = {};

/**
 * Subscribes to an event and registers a callback function to be called when the event is triggered.
 * @param {string} eventName - The name of the event to subscribe to.
 * @param {function} callback - The function to be called when the event is triggered.
 * @returns {function} - A function to unsubscribe from the event.
 */
function subscribe(eventName, callback) {
  if (subscribers[eventName] === undefined) {
    subscribers[eventName] = [];
  }

  subscribers[eventName] = [...subscribers[eventName], callback];

  return function unsubscribe() {
    subscribers[eventName] = subscribers[eventName].filter((cb) => {
      return cb !== callback;
    });
  };
}

/**
 * Publishes an event with the given name and data to all subscribers.
 * @param {string} eventName - The name of the event to publish.
 * @param {*} data - The data to pass to the event subscribers.
 */
function publish(eventName, data) {
  if (subscribers[eventName]) {
    subscribers[eventName].forEach((callback) => {
      callback(data);
    });
  }
}