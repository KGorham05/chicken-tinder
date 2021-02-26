import { render, screen } from '@testing-library/react';
// Imports React into our test file.
import React from 'react';
// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme';

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16';

import Home from "../index"

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({ adapter: new Adapter() });


it('Home renders content', () => {
  const home = shallow(<Home />)
  expect(home.find('h1').text()).toEqual('Hello World!')
})
