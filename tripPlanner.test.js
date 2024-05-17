// tripPlanner.test.js
const myTrip = require('./tripPlanner');

describe('myTrip function tests', () => {
  // Test with a straightforward, linear trip.
  test('should correctly order a linear trip', () => {
    const tickets = [
      {source: 'Amsterdam', destination: 'Berlin'},
      {source: 'Paris', destination: 'London'},
      {source: 'London', destination: 'Amsterdam'},
    ];

    expect(myTrip(tickets)).toBe('Paris, London, Amsterdam, Berlin');
  });

  // Test when tickets are out of order.
  test('should correctly order a non-linear trip', () => {
    const tickets = [
      {source: 'Amsterdam', destination: 'Berlin'},
      {source: 'Paris', destination: 'Amsterdam'},
      {source: 'Berlin', destination: 'London'},
    ];
    expect(myTrip(tickets)).toBe('Paris, Amsterdam, Berlin, London');
  });

  // Test with a single ticket.
  test('should handle a single-ticket trip', () => {
    const tickets = [{source: 'Amsterdam', destination: 'Berlin'}];
    expect(myTrip(tickets)).toBe('Amsterdam, Berlin');
  });

  // Test with circular trip where the trip ends in the start city.
  test('should handle a circular trip', () => {
    const tickets = [
      {source: 'Amsterdam', destination: 'Berlin'},
      {source: 'Berlin', destination: 'Amsterdam'},
      {source: 'Amsterdam', destination: 'London'},
      {source: 'London', destination: 'Berlin'},
    ];
    expect(myTrip(tickets)).toBe(
      'Amsterdam, Berlin, Amsterdam, London, Berlin',
    );
  });

  // Test with no tickets.
  test('should handle an empty tickets array', () => {
    const tickets = [];
    expect(myTrip(tickets)).toBe('');
  });

  //Test when tickets do not form a coherent trip (error handling or unexpected behavior).
  test('should handle incoherent trip data', () => {
    const tickets = [
      {source: 'Amsterdam', destination: 'Berlin'},
      {source: 'Paris', destination: 'London'}, // No connection to the first ticket.
    ];
    // Expected behavior might depend on how you want to handle this: error, partial trip, etc.
    // Assuming it returns the first ticket's trip and ignores the disconnected second ticket:
    expect(myTrip(tickets)).toBe('Amsterdam, Berlin, Paris, London');
  });
});
