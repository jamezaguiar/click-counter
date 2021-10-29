import { shallow } from 'enzyme';
import App from './App';

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function renderComponent
 * @returns {ShallowWrapper}
 */
const renderComponent = () => shallow(<App />);

const findByDataTestAttr = (wrapper, dataTestAttr) =>
  wrapper.find(`[data-test="${dataTestAttr}"]`);

describe('<App />', () => {
  test('renders without error', () => {
    const wrapper = renderComponent();
    const appComponent = findByDataTestAttr(wrapper, 'component-app');
    expect(appComponent).toHaveLength(1);
  });

  test('renders increment button', () => {
    const wrapper = renderComponent();
    const button = findByDataTestAttr(wrapper, 'increment-button');
    expect(button).toHaveLength(1);
  });

  test('renders counter display', () => {
    const wrapper = renderComponent();
    const display = findByDataTestAttr(wrapper, 'counter-display');
    expect(display).toHaveLength(1);
  });

  test('counter display starts at 0', () => {
    const wrapper = renderComponent();
    const display = findByDataTestAttr(wrapper, 'counter-display');
    expect(display.text()).toBe('0');
  });

  test('clicking button increments counter', () => {
    const wrapper = renderComponent();

    const button = findByDataTestAttr(wrapper, 'increment-button');
    button.simulate('click');

    const display = findByDataTestAttr(wrapper, 'counter-display');

    expect(display.text()).toBe('1');
  });
});
