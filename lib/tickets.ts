export interface Ticket {
  id: string;
  name: string;
  description: string;
  price: number;
  soldOut: boolean;
}

// Server-side function to fetch tickets
export async function fetchTickets(): Promise<Ticket[]> {
  const BASE_URL = process.env.NEXT_PUBLIC_ENDPOINT;

  if (!BASE_URL) {
    console.error(
      "NEXT_PUBLIC_ENDPOINT environment variable is not configured",
    );
    throw new Error("API endpoint not configured");
  }

  const url = `${BASE_URL}/tickets`;

  try {
    console.log(`Fetching tickets from: ${url}`);

    const response = await fetch(url, {
      cache: "no-store", // Ensure fresh data on each request
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => "Unknown error");
      console.error(
        `HTTP ${response.status} error fetching tickets:`,
        errorText,
      );

      if (response.status === 404) {
        throw new Error("Tickets not found for this event");
      } else if (response.status === 500) {
        throw new Error("Server error - please try again later");
      } else if (response.status >= 400 && response.status < 500) {
        throw new Error("Invalid request - please contact support");
      } else {
        throw new Error(
          `Network error (${response.status}) - please try again`,
        );
      }
    }

    const jsonResponse = await response.json();

    // Validate response structure
    if (!jsonResponse || typeof jsonResponse !== "object") {
      console.error("Invalid response format:", jsonResponse);
      throw new Error("Invalid response format from server");
    }

    const tickets = jsonResponse || [];

    // Validate tickets array
    if (!Array.isArray(tickets)) {
      console.error("Expected tickets array, got:", typeof tickets);
      throw new Error("Invalid tickets data format");
    }

    // Validate each ticket object
    const validatedTickets: Ticket[] = tickets.filter((ticket: any) => {
      if (!ticket || typeof ticket !== "object") {
        console.warn("Skipping invalid ticket object:", ticket);
        return false;
      }

      if (
        !ticket.id ||
        !ticket.name ||
        typeof ticket.price !== "number" ||
        typeof ticket.soldOut !== "boolean"
      ) {
        console.warn("Skipping ticket with missing required fields:", ticket);
        return false;
      }

      return true;
    });

    console.log(
      `Successfully fetched ${validatedTickets.length} valid tickets`,
    );
    return validatedTickets;
  } catch (error) {
    if (error instanceof TypeError && error.message.includes("fetch")) {
      console.error("Network connection error:", error);
      throw new Error(
        "Unable to connect to server - please check your internet connection",
      );
    }

    console.error("Failed to fetch tickets:", error);

    // Re-throw our custom errors, wrap unknown errors
    if (error instanceof Error) {
      throw error;
    } else {
      throw new Error("An unexpected error occurred while fetching tickets");
    }
  }
}
