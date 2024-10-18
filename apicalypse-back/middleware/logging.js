import express from 'express';

function logRequest(req, res, next) {
    console.log(`Method: ${req.method}, URL: ${req.originalUrl}`);
    next();
}

module.exports = logRequest;