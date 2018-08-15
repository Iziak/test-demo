import React from '../../../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import { render } from 'react-testing-library';
import { Provider } from '../../../../../Library/Caches/typescript/2.9/node_modules/@types/react-redux';
import { Router } from '../../../../../Library/Caches/typescript/2.9/node_modules/@types/react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createMemoryHistory } from '../../../../../Library/Caches/typescript/2.9/node_modules/@types/history';

import appsReducer from '../_reducers';

/*
Finds the first parent element with a certain attribute and value
Example usage: say you have an HTML element containing some text,
but you want to find its parent element, which might be a card component.
The card component might have an attribute like aria-selected=true.
closest(textelement, 'aria-selected', 'true') will return the corresponding parent element
*/

export const closest = (element, attr, val) => {
  try {
    if (element.getAttribute(attr).includes(val)) return element;
  } catch (err) {
    if (err.message !== "Cannot read property 'includes' of null") {
      throw new Error(err.message);
    }
  }
  return closest(element.parentElement, attr, val);
};

//jest.mock('../src/shared/ducks', () => null);

const renderInApp = (
  ui,
  history = createMemoryHistory({ initialEntries: ['/'] }),
) => {
  const store = createStore(appsReducer, applyMiddleware(thunk));
  return {
    ...render(
      <Provider store={store}>
        <Router history={history}>{ui}</Router>
      </Provider>,
    ),
    store,
  };
};

export * from 'react-testing-library';
export { renderInApp };
