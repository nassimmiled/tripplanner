# Trip Planner

## Overview

Trip Planner is a JavaScript utility designed to reconstruct travel itineraries from a series of tickets, delineating the journey's sequence from start to end. It identifies the journey's starting point and orders the tickets to map out the complete travel route.

## Installation

To incorporate Trip Planner into your project, clone this repository or download the `tripPlanner.js` file into your desired directory.

## Usage

To use the Trip Planner, first import the `myTrip` function in your JavaScript file:

```javascript
const myTrip = require('./path/to/tripPlanner');
```

Next, define an array of tickets, where each ticket is an object with `source` and `destination` properties:

```javascript
const tickets = [
  {source: 'CityA', destination: 'CityB'},
  {source: 'CityB', destination: 'CityC'},
  // Continue with other tickets as necessary
];
```

Invoke the `myTrip` function with your tickets array to get the ordered travel itinerary:

```javascript
const itinerary = myTrip(tickets);
console.log(itinerary); // Outputs: 'CityA, CityB, CityC'
```

## Example

For a more concrete example, consider you have the following tickets:

```javascript
[
  {source: 'Amsterdam', destination: 'Berlin'},
  {source: 'Paris', destination: 'London'},
  {source: 'London', destination: 'Amsterdam'},
];
```

By calling the `myTrip` function with `tickets`:

```javascript
const itinerary = myTrip(tickets);
console.log(itinerary); // Outputs: 'Paris, London, Amsterdam, Berlin'
```

This output reflects the complete journey from Paris to Los London, passing through Amsterdam and Berlin.

### Running Tests

To run the tests for the Trip Planner, you will need to have Node.js and Jest installed. If you haven't installed Jest yet, you can add it to your project by running:

```bash
npm install --save-dev jest
```

Once Jest is installed, you can run the tests using the following command:

```bash
npm test
```

This command will execute all tests included in the project and output the results to the terminal.

### Test Scenarios

The tests cover several key scenarios to verify the correctness of the `myTrip` function:

1. **Linear Trip**: Tests whether the function can correctly order a simple, linear sequence of tickets.
2. **Non-Linear Trip**: Verifies that the function correctly handles tickets provided in a non-sequential order.
3. **Single Ticket**: Checks the function's behavior with only one ticket.
4. **Circular Trip**: Ensures the function can handle trips that return to the starting city.
5. **Empty Array**: Tests the function's response to an empty array input, ensuring it does not produce an error or incorrect output.
