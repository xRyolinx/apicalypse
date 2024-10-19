// setupDatabase.js
import sequelize from "./config/db.js"; // Adjust the path based on your project structure

const setupDatabase = async () => {
  try {
    // Enable the UUID extension
    await sequelize.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`);
    console.log("UUID extension enabled.");

    // Query to select all expenses for a specific user
    const userId = '09e55ee4-df22-4001-92eb-8905fd222b94'; // Replace with the desired user ID
    const [results, metadata] = await sequelize.query(`
      SELECT *
      FROM expenses
      WHERE user_id = :userId;
    `, {
      replacements: { userId }, // Using parameterized query to prevent SQL injection
    });

    console.log("Expenses retrieved:", results); // Log the expenses for the user
  } catch (error) {
    console.error("Error setting up the database:", error);
  } finally {
    await sequelize.close(); // Close the database connection
  }
};

// Run the setupDatabase function
setupDatabase();
