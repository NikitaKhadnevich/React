import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Todo from '..';

configure({ adapter: new Adapter() });

describe('<Todo /> mounting behavior', () => {
  const mockFn = jest.fn();

  const props = {
    onClick: mockFn,
    completed: false,
    text: 'Todo 1',
  };

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Todo {...props} />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render 1 component', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('should correctly render children', () => {
    expect(wrapper.props().children).toEqual(props.text);
  });

  it('should set props correctly', () => {
    const nextText = 'Hello!';
    wrapper.setProps({ text: nextText });

    expect(wrapper.props().children).toEqual(nextText);
  });

  it('should call onClick handler when clicked', () => {
    const eventObj = { target: { id: 'temp' } };
    wrapper.simulate('click', eventObj);

    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith(eventObj);
  });
});

describe('<Todo /> styling behaviour', () => {
  const mockFn = jest.fn();

  const props = {
    onClick: mockFn,
    completed: false,
    text: 'Todo 1',
  };

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Todo {...props} />);
  });

  describe('1 linethrow styles', () => {
    describe('when completed === false', () => {
      it('should not path linethrow style, when todo is incomplete', () => {
        expect(wrapper.props().style).toEqual({ textDecoration: 'none' });
      });
    });

    describe('when completed === true', () => {
      it('should path linethrow style, when todo is incomplete', () => {
        wrapper.setProps({ completed: true });

        expect(wrapper.props().style).toEqual({
          textDecoration: 'line-through',
        });
      });
    });
  });
});
