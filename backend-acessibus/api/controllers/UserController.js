const userService = require('../services/UserService');
const authService = require('../services/AuthService')

class UserController {
    register = async (req, res) => {
        const { nome, email, senha, foto } = req.body;

        try{
            const user = await userService.registerUser(nome, email, senha, foto);
            return res.status(201).json(user);
        } catch (error) {
            if (error.message === "Já existe um usuário com este email") {
                return res.status(400).json({ error: error.message });
            }
            console.log(error);
            return res.status(500).json({ error: "Erro interno do servidor" });
        }
    }

    login = async (req, res) => {
        const { email, senha } = req.body;

        try {
            const data = await authService.login(email, senha);
            return res.status(200).json(data)
        } catch (error) {
            if (error.message === "Email ou senha inválidos") {
                return res.status(401).json({ error: error.message });
            }
            console.log(error);
            return res.status(500).json({ error: "Erro interno do servidor" });
        }
    }

    getProfile = async (req, res) => {
        try {
            const userId = req.userId
            const user = await userService.getUserById(userId)
            return res.json(user);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: "Erro ao buscar perfil" })
        }
    }
}

module.exports = new UserController();