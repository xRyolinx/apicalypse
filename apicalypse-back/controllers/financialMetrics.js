import { FinancialMetric } from '../models/index.js';

const createFinancialMetric = async (req, res) => {
    const { user_id, metric_type_id, category, amount } = req.body;
    try {
        const newMetric = await FinancialMetric.create({ user_id, metric_type_id, category, amount });
        res.status(201).json(newMetric.toJSON());
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getFinancialMetrics = async (req, res) => {
    const { user_id } = req.query; 
    try {
        const metrics = await FinancialMetric.findAll({
            where: { user_id } 
        });
        res.json(metrics);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


export { createFinancialMetric, getFinancialMetrics };
