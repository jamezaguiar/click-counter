import { shallow } from 'enzyme';
import App from './App';

test('renders without error', () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find(`[data-test="component-app"]`);
  expect(appComponent).toHaveLength(1);
});

test('renders increment button', () => {});

test('renders counter display', () => {});

test('counter display starts at 0', () => {});

test('clicking button increments counter', () => {});
