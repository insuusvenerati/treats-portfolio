import renderer from 'react-test-renderer';
import data from '../__mocks__/layoutData';
import Layout from '../src/components/Layout';

// eslint-disable-next-line @typescript-eslint/no-unsafe-return
jest.mock('crypto', () => ({ randomBytes: (num) => new Array(num).fill(0) }));

it('Should match snapshot', () => {
  const tree = renderer.create(<Layout data={data} />).toJSON();
  expect(tree).toMatchSnapshot();
});
