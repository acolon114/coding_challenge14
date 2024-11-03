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

//Task 3:  Display Tickets Dynamically on the Page
tickets.forEach(ticket => {
    const ticketDiv = document.createElement("div");
    ticketDiv.classList.add("ticket");

    ticketDiv.innerHTML = `<strong>Ticket ID:</strong> ${ticket.id} <br>
                           <strong>Customer Name:</strong> Customer ${ticket.userId} <br>
                           <strong>Issue Description:</strong> ${ticket.title} <br>
                           <strong>Details:</strong> ${ticket.body}`;

    ticketContainer.appendChild(ticketDiv);
});

} catch (error) {
errorMessage.textContent = error.message;
}

//Task 4: Use finally to Ensure Cleanup
    finally {
        if (ticketContainer.contains(loadingMessage)) {
            ticketContainer.removeChild(loadingMessage);
        }
    }
}

// Run the function when the page loads
document.addEventListener("DOMContentLoaded", fetchTickets);