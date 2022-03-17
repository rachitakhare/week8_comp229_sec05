let express = require('express');
let mongoose = require('mongoose');
let router = express.Router();

let passport = require('passport')

let bookController = require('../controllers/book');

function requireAuth(req, res, next) {
    if (!req.isAuthenticated) {
        return res.redirect('/login');
    }
    next();
}

/* GET Route for the Book List page - READ Operation */
router.get('/', bookController.displayBookList);


/* GET Route for the Book List page - CREATE Operation */
router.get('/add',requireAuth, bookController.displayAddPage);

/* Post Route for the Book List page - CREATE Operation */
router.post('/add',requireAuth, bookController.processAddPage);


/* GET Route for the Edit Book page - Update Operation */
router.get('/edit/:id',requireAuth, bookController.displayEditPage);

/* Post Route for the Edit book page - Update Operation */
router.post('/edit/:id', requireAuth,bookController.processEditPage);


/* GET Route for the Delete Book page - Delete Operation */
router.get('/delete/:id',requireAuth, bookController.performDelete);
module.exports = router;