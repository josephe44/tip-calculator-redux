import produce from 'immer';
import {
  ITEM_ADDED,
  ITEM_REMOVED,
  ITEM_PRICE_UPDATE,
  ITEM_QUANTITY_UPDATE
} from './actions';

let id = 1;

export const initialItems = [
  { uuid: id++, name: 'Awesome Tofu Roast', price: 14, quantity: 1 },
  { uuid: id++, name: 'Vegan Ham Sandwish', price: 12, quantity: 1 }
];

export const reducer = produce((state = initialItems, action) => {
  if (action.type === ITEM_ADDED) {
    const item = { uuid: id++, quantity: 1, ...action.payload };
    state.push(item);
  }

  if (action.type === ITEM_REMOVED) {
    return state.filter((item) => item.uuid !== action.payload.uuid);
  }

  if (action.type === ITEM_PRICE_UPDATE) {
    const item = state.find((item) => item.uuid === action.payload.uuid);
    item.price = parseInt(action.payload.price, 10);
  }

  if (action.type === ITEM_QUANTITY_UPDATE) {
    const item = state.find((item) => item.uuid === action.payload.uuid);
    item.quantity = parseInt(action.payload.quantity, 10);
  }
}, initialItems);

export default reducer;
