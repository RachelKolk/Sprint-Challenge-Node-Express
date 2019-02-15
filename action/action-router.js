const express = require('express');

const Actions = require('../data/helpers/actionModel.js');

const router = express.Router();


//GET returns all of the action items
router.get('/', async (req, res) => {
    try {
        const actions = await Actions.get();
        res.status(200).json(actions);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "There was an error while retrieving the action list"});
    }
});


//GET actions by ID
router.get('/:id', async (req, res) => {
    try {
        const action = await Actions.get(req.params.id);
        if (action.id == req.params.id) {
            res.status(200).json(action)
        } else {
            res.status(404).json({message: "Actions with that ID number can not be found"});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "That action can not be found"});
    }
});


////Creates a new action
router.post('/', async (req, res) => {
    if (req.body.project_id == "" || req.body.description == "" || req.body.notes == "" ||
        req.body.project_id == null || req.body.description == null || req.body.notes == null) {
        res.status(400).json({errorMessage: "Please provide information in all of the fields"});
    } else {
        try {
            const action = await Actions.insert(req.body);
            res.status(201).json(action)
        } catch {
            console.log(error);
            res.status(500).json({message: "Error adding action"});
        }
    }
});


//Updates an action
router.put('/:id', async (req, res) => {
    try {
        const action = await Actions.update(req.params.id, req.body);
        if (action == 0) {
            res.status(404).json(null);
        } else {
            res.status(200).json(action);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "The action could not be updated"});
    }
});


//Deletes an action
router.delete('/:id', async (req, res) => {
    try {
        const deleteCount = await Actions.remove(req.params.id);
        if (deleteCount > 0) {
            res.status(200).json(deleteCount);
        } else {
            res.status(404).json({message: "That action could not be found"});
        }
    } catch {
        console.log(error);
        res.status(500).json({error: "An error occurred while deleting this action"});
    }
});


module.exports = router;