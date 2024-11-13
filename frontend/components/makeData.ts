export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  state: string;
};

// Example list of US states
export const usStates = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  // Add more states as needed
];

// Function to generate fake user data
export const fakeData: User[] = Array.from({ length: 100 }, (_, index) => ({
  id: (index + 1).toString(),
  firstName: `FirstName${index + 1}`,
  lastName: `LastName${index + 1}`,
  email: `user${index + 1}@example.com`,
  state: usStates[Math.floor(Math.random() * usStates.length)],
}));
