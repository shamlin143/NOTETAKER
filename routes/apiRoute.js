const fs = require('fs');
const path = require('path');
const express = require('express');
var router = express.Router();



    // Setup notes variable
    

        // API ROUTES
        // ========================================================
    
        // Setup the /api/notes get route
       router.get("/api/notes", function(req, res) {
            // Read the db.json file and return all saved notes as JSON.
            fs.readFile("db/db.json","utf8", (err, data) => {

                if (err) throw err;
        
                var notes = JSON.parse(data);
                res.json(notes);
            });
            
        });

        // Setup the /api/notes post 
        router.post("/api/notes", function(req, res) {            

            fs.readFile("db/db.json","utf8", function (err, data) {
                if (err) throw err;
                let newNote = {
                    "title": req.body.title,
                    'text': req.body.text,
                    'id': 1
                }
                var notes = JSON.parse(data);
                console.log(notes);
                notes.push(newNote);
                const jsonString = JSON.stringify(notes)             
                fs.writeFile ("db/db.json", jsonString, function(err) {
                    if (err) throw err;                                    
                    
                });
            });
           
        });

        // Retrieves a note with specific id
        router.get("/api/notes/:id", function(req,res) {
            
            fs.readFile("db/db.json","utf8", (err, data) => {
                let user_id = req.params.id;
                if (err) throw err;
        
                var notes = JSON.parse(data);
                const result = notes.filter(id => id == user_id);

                res.json(result);
            });
        });

        // Deletes a note with specific id

        router.delete("/api/notes/:id", (req, res) => { 
            const {id} = req.params.id;
            fs.readFile("db/db.json", "utf-8", function(err, data){
            if (err) throw err;
            const notes = JSON.parse(data)
            notes.splice(id, 1)
            const jsonString = JSON.stringify(notes)
            console.log(notes)
            fs.readFile("db/db.json", function(err, data) {
                if (err) throw err;
            })
            res.json(notes)
        })
    });
        

        module.exports = router;
