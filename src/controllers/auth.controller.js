import { loginService, generateToken } from "../services/login.service.js";
import bcrypt from "bcrypt";


const login = async (req, res) => {
    const {email, password} = req.body;
    
    try {

        const user = await loginService(email);
        if (!user) {
            return res.status(401).send({ message: "Email not found!" });
          }

        const passwordIsValid = bcrypt.compareSync(password, user.password);
        
        if(!passwordIsValid){
            return res.status(401).send({message: "Incorrect password"});
        }

        const token = generateToken(user.id);
        res.status(200).send({message:"OK", token: token});
    } catch (e) {
        res.status(500).send(e.message); 
    }
};

export {login};