/**
 * The debounce timer for onChange events.
 * @type {number}
 */
const ON_CHANGE_DEBOUNCE_TIMER = 300;

/**
 * Events that can be subscribed to using the Pub/Sub pattern.
 * @typedef {Object} PUB_SUB_EVENTS
 * @property {string} cartUpdate - Event triggered when the cart is updated.
 * @property {string} quantityUpdate - Event triggered when the quantity of a product in the cart is updated.
 * @property {string} variantChange - Event triggered when the variant of a product in the cart is changed.
 * @property {string} cartError - Event triggered when an error occurs while updating the cart.
 */
const PUB_SUB_EVENTS = {
  cartUpdate: 'cart-update',
  quantityUpdate: 'quantity-update',
  variantChange: 'variant-change',
  cartError: 'cart-error',
};