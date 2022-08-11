import { event } from './index';

const expectedObject = [
  {
    email: 'example@server.com',
    message: 'Dear John! Welcome to the party!',
  },
];

it('to match object', () => {
  expect(event.getInvitations()).toMatchObject(expectedObject);
});
