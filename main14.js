// Task 2: Fetch Tickets Using Async/Await and Handle Errors

async function fetchTickets() {
    const ticketContainer = document.getElementById("ticket-container");
    const errorMessage = document.getElementById("error-message");

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        if (!response.ok) {
            throw new Error("Failed to fetch tickets. Please try again later.");
        }

        const tickets = await response.json();

        if (tickets.length === 0) {
            throw new Error("No tickets found.");
        }