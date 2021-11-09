import express from 'express';

import { signup, login, isAuth } from '../controllers/auth.js';
import {getListings, postListings} from '../controllers/rental.js';

//Below is all the implemented API calls, where the /callname is the name of what is fetch()'ed
//and the second half, is the actual function sent to the DB from the Node.js server,
//the actual functions are defined in the controllers folder

const router = express.Router();

router.post('/login', login);

router.post('/signup', signup);

router.get('/private', isAuth);

router.get('/getListings', getListings);

router.post('/addListings', postListings);

router.get('/public', (req, res, next) => {
    res.status(200).json({ message: "here is your public resource" });
});

// will match any other path
router.use('/', (req, res, next) => {
    res.status(404).json({error : "Default path."});
});

//router.post('/addListing', addListing);

export default router;