import { loginService, generateToken } from "../services/login.service.js";
import bcrypt from "bcrypt";


const login = async (req, res) => {
    const {email, password} = req.body;
    
    try {

        const user = await loginService(email);
        if (!user) {
            res
              .status(404)
              .json({ message: "User not found!" });
          }

        const passwordIsValid = bcrypt.compareSync(password, user.password);
        
        if(!passwordIsValid){
            res.status(500).send({message: "Invalid password"});
        }

        const token = generateToken(user.id);
        res.send({token: token});
    } catch (e) {
        res.status(500).send(e.message); 
    }
};

export {login};