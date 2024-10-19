import { User } from '../models/index.js'; 
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
dotenv.config();
import validator from 'validator';



const registerUser = async (req, res) => {
    const { email, password, role_id } = req.body;

    try {
        // Validate email format and password length
        if (!validator.isEmail(email)) {
            return res.status(400).json({ error: 'Invalid email format' });
        }
        if (!password || password.length < 8) {
            return res.status(400).json({ error: 'Password must be at least 8 characters long' });
        }

        // Hash the password before storing
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user using the User model
        const newUser = await User.create({ email, password_hash: hashedPassword, role_id });
        const token = jwt.sign({ id: newUser.toJSON().id, role_id: newUser.toJSON().role_id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(201).json({ user: newUser.toJSON(), token });
    } catch (error) {
        // Handle duplicate user or validation errors
        if (error.name === 'SequelizeUniqueConstraintError') {
            return res.status(400).json({ error: 'User with this email already exists' });
        }
        res.status(400).json({ error: error.message });
    }
}

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find user by email
        const user = await User.findOne({ where: { email } });

        // If user is not found, throw an error
        if (!user) {
            throw new Error('Invalid login credentials');
        }

        // Compare the provided password with the hashed password stored in the database
        const isMatch = await bcrypt.compare(password, user.password_hash); 
        if (!isMatch) {
            throw new Error('Invalid login credentials');
        }

        // Generate JWT token
        const token = jwt.sign({ id: user.id, role_id: user.role_id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
}

export { registerUser, loginUser };
