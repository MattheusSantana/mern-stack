const create = (req, res) => {
    const {name, username, email, password} = req.body;

    if(!name || !username || !email || !password){
        res.status(400).json({message: "Please submit all fields"})
    }

    res.status(201).json({
        message: "User created successfully",
        user: {
            name,
            email,
            password
        }
    });
}

module.exports = { create };