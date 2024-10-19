// __tests__/app.test.js
import request from 'supertest';
import app from '../app'; // Import your main app
import { sequelize } from '../config/db'; // Adjust based on your database configuration

let token; // Variable to hold JWT token

beforeAll(async () => {
  // Log in here to get the token before all tests
  const res = await request(app)
    .post('/api/auth/login') // Adjust based on your login endpoint
    .send({ email: 'user1102@example.com', password: 'securePassword123' }); // Use valid credentials

  token = res.body.token; // Assuming the token is returned in the body
});

// Test for creating a new expense
test('Create a new expense', async () => {
  const res = await request(app)
    .post('/api/users/expenses')
    .set('Authorization', `Bearer ${token}`)
    .send({
      user_id: '5468bdb6-fe5c-41b5-bd92-ae9030607e71', // Replace with a valid user ID
      category: 'Utilities',
      amount: 100,
      percentage_change: 10,
      expense_date: '2024-10-19'
    });

  expect(res.statusCode).toBe(201);
  expect(res.body).toHaveProperty('id'); // Assuming ID is returned
});

// Test for getting all expenses
test('Get all expenses for a user', async () => {
  const res = await request(app)
    .get('/api/users/expenses?user_id=5468bdb6-fe5c-41b5-bd92-ae9030607e71') // Replace with valid user ID
    .set('Authorization', `Bearer ${token}`);

  expect(res.statusCode).toBe(200);
  expect(Array.isArray(res.body)).toBe(true); // Expect an array of expenses
});

// Test for creating multiple expenses
test('Create multiple expenses', async () => {
  const res = await request(app)
    .post('/api/users/expenses/multiple')
    .set('Authorization', `Bearer ${token}`)
    .send({
      user_id: '5468bdb6-fe5c-41b5-bd92-ae9030607e71',
      expenses: [
        { category: 'Food', amount: 50, percentage_change: 5, expense_date: '2024-10-18' },
        { category: 'Transport', amount: 20, percentage_change: 2, expense_date: '2024-10-17' }
      ]
    });

  expect(res.statusCode).toBe(201);
  expect(Array.isArray(res.body)).toBe(true); // Expect an array of new expenses
});

// Cleanup after tests
afterAll(async () => {
  await sequelize.close(); // Close database connection
});
