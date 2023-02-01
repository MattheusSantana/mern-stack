import { loginService, generateToken } from "../services/auth.service.js";
import bcrypt from "bcrypt";


const login = async (req, res) => {
    const {email, password} = req.body;
    
    try {

        let user = await loginService(email);
        if (!user) {
            return res.status(401).send({ message: "Email not found!" });
          }

        const passwordIsValid = bcrypt.compareSync(password, user.password);
        
        if(!passwordIsValid){
            return res.status(401).send({message: "Incorrect password"});
        }
        
        user = user.toObject();
        const token = generateToken(user.id);
        delete user['name'];
        
        res.status(200).send({message:"OK", user, token});
    } catch (e) {
        res.status(500).send(e.message); 
    }
};

export {login};