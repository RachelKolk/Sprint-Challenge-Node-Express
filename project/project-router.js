const express = require('express');

const Projects = require('../data/helpers/projectModel.js');

const router = express.Router();


//GET returns all of the project items
router.get('/', async (req, res) => {
    try {
        const projects = await Projects.get(req.query);
        res.status(200).json(projects);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "There was an error while retrieving the project list"});
    }
});


//GET project by ID
router.get('/:id', async (req, res) => {
    try {
        const project = await Projects.get(req.params.id);
        if (project.id == req.params.id) {
            res.status(200).json(user)
        } else {
            res.status(404).json({message: "Projects with that ID number can not be found"});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "That project can not be found"});
    }
});


//GET project actions returns a list of all the actions by project id
router.get('/:id/actions', async (req, res) => {
    try {
        const projects = await Projects.getProjectActions(req.params.id);
        if (projects) {
            res.status(200).json(projects)
        } else res.status(404).json({message: "Actions by that Project ID can not be found"});
    } catch {
        console.log(error);
        res.status(500).json({message: "Project can not be found"});
    }
});


//Creates a new project
router.post('/', async (req, res) => {
    if (req.body.name == "" || req.body.description == "" || req.body.completed == "") {
        res.status(400).json({errorMessage: "Please provide information in all fields"});
    } else {
        try {
            const project = await Projects.insert(req.body);
            res.status(201).json(project)
        } catch {
            console.log(error);
            res.status(500).json({message: "Error adding project"});
        }
    }
});


//Updates a project
router.put('/:id', async (req, res) => {
    try {
        const project = await Projects.update(req.params.id, req.body);
        if (project == 0) {
            res.status(404).json(null);
        } else {
            res.status(200).json(project);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "The project could not be update"});
    }
});


//Deletes a project
router.delete('/:id', async (req, res) => {
    try {
        const deleteCount = await Projects.remove(req.params.id);
        if (deleteCount > 0) {
            res.status(200).json(deleteCount);
        } else {
            res.status(404).json({message: "That project could not be found"});
        }
    } catch {
        console.log(error);
        res.status(500).json({error: "An error occurred while deleting this project"});
    }
});

module.exports = router;