const Track = require('../models/track.js');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const createdTrack = await Track.create(req.body);
        res.status(201).json(createdTrack);
    } catch (err) {
        res.status(500).json({err: err.message});
    }
});

router.get('/', async (req, res) => {
    try {
        const foundTracks = await Track.find();
        res.status(200).json(foundTracks);
    } catch (err) {
        res.status(500).json({ err: err.message });
    }
});

router.get('/:trackId', async (req, res) => {
    try {
        const foundTracks= await Track.findById(req.params.trackId);
        if (!foundTracks) {
            res.status(404);
            throw new Error('Track not found.');
        }
        res.status(200).json(foundTracks);
    } catch (err) {
        if (res.statusCode === 404) {
            res.json({ err: err.message });
        } else {
            res.status(500).json({ err: err.message });
        }
    }
});

router.put('/:trackId', async (req, res) => {
    try {
        const updatedTracks = await Track.findByIdAndUpdate(req.params.trackId, req.body, {
            new: true,
        });
        if (!updatedTracks) {
            res.status(404);
            throw new Error('Track not found.');
        }
        res.status(200).json(updatedTracks)
    } catch (err) {
        if (res.statusCode === 404) {
            res.json({ err: err.message });
        } else {
            res.status(500).json({ err: err.message });
        }
    }
});



module.exports = router;