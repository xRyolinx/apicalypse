import express from 'express';

function errorHandler(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something went Wrong!');
}

module.exports = errorHandler;