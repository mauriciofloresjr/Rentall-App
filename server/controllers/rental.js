import jwt from 'jsonwebtoken';
import Listings from '../models/listing.js';


//Still need to fix, look below for possible fix, maybe just implement a find all by category
const getListings = (req, res, next) => {
    Listings.findAll({})
    .then(dbListing => {
        if (dbListing){
            res.status(200).json({message: "Here is all the listings."})
            return Listings.findAll({
                where: {
                    //id: req.body.id,
                    //title: req.body.title,
                    description: req.body.description,
                    //price: req.body.price,
                }
            })
            ;}
        else if (err){
            return res.status(404).json({message: "An error occured."});
        }
    })  
    .catch(err => {
        console.log('error', err);
    });
};

//Works, but no error handling ¯\_(ツ)_/¯
const postListings = (req, res, next) => {
     Listings.create({
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        price: req.body.price,
     })
    res.status(200).json({message: "Listing added!"});
    //if (err) {
    //    res.status(404).json({message: "Fail"});
    //}
};

/*
                where: {
                    title: req.body.title,
                    description: req.body.description,
                    category: req.body.category,
                    price: req.body.price,
                }
*/

export {getListings, postListings};

