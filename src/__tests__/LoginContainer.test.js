import React from 'react';
import { render } from '@testing-library/react';

import LoginContainer from '../components/pages/Login/LoginContainer';

jest.mock('@okta/okta-react', () => ({
  useOktaAuth: () => {
    return {
      authService: { setFromUri: _ => null },
    };
  },
}));
describe('<LoginContainer /> test suite', () => {
  test('signin widget mounts successfully', () => {
    const { container } = render(<LoginContainer />);
    expect(container.querySelector('#sign-in-widget')).toBeTruthy();
  });
});
