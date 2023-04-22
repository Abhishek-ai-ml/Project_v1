const SignUp = require('../models/signup');

exports.createSignUp = async (req, res) => {
    try {
        const {username, email, phoneNumber, password} = req.body;

        const response = await SignUp.create({username, email, phoneNumber, password});

        res.status(200).json(
            {
                success:true,
                data:response,
                message:'Signup entry created successfully'
            }
        )
    }

    catch(error) {
        console.log(error);
        res.status(500).json(
            {
                success:false,
                data:'Internal Error',
                message:error.message,
            }
        );
    }
}