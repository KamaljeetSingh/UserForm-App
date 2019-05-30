const phone = require('phone');

/**
 * it will validte Indian mobile numbers
 * Examples - 
 * phone('99994256963', 'IN')  returns [ '99994256963', 'IN' ] 
 * phone('612569', 'IN')  returns [ ] 
 */
module.exports = (req, res, next) => {
    try{
        const validateNumber = phone(req.body.phone, 'IN');
        if(validateNumber.length != 0){
            next();
        }
        else{
            throw validateNumber;
        }
    }
    catch(err){
        res.status(400).json({
            message: "Phone Validation Failed"
        });
    }
}