const myTrip = tickets => {
  const ticketList = [...tickets]; // Clone tickets to avoid mutating the input.

  // Find the starting city: it should not be a destination in any ticket.
  let startCity = ticketList.find(
    ticket => !ticketList.some(t => t.destination === ticket.source),
  )?.source;

  // Default to the first ticket's source if no unique starting city is found.
  if (!startCity) {
    startCity = ticketList[0]?.source;
  }

  const trip = [startCity];
  let currentCity = startCity;

  let lastDestinationIndex; // To track the last valid ticket index used.

  while (ticketList.length > 0) {
    // Find the next ticket where the current city is the source.
    let currentTicketIndex = ticketList.findIndex(
      ticket => ticket.source === currentCity,
    );

    if (currentTicketIndex !== -1) {
      // Move to the ticket's destination if a valid ticket is found.
      currentCity = ticketList[currentTicketIndex].destination;
      lastDestinationIndex = currentTicketIndex;

      // Remove the used ticket to prevent reusing it, especially important if there are duplicate tickets.
      ticketList.splice(currentTicketIndex, 1); // Prevents duplicate processing, ensuring ticket uniqueness.
    } else {
      // Attempt to continue from the last known destination if no direct ticket is found.
      currentCity = ticketList[lastDestinationIndex]?.source;
    }

    trip.push(currentCity);
  }

  // Compile and return the trip route as a comma-separated string.
  return trip.join(', ');
};

module.exports = myTrip;
