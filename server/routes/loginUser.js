const loginUser = require("express").Router();
const UserSchema = require("../models/UserSchema");
const { compare } = require("bcryptjs");

loginUser.post("/login/", async (request, response) => {
    try {
        // Najdeme uživatele podle emailu
        const user = await UserSchema.findOne({ email: request.body.email });
        
        // Pokud uživatel neexistuje, vrátíme chybu
        if (!user) {
            return response.status(401).json({ msg: "User not found" });
        }

        // Porovnáme heslo s hashovaným heslem v databázi
        const isMatch = await compare(request.body.password, user.password);
        
        // Pokud heslo nesouhlasí, vrátíme chybu
        if (request.body.password !== user.password) {
            return response.status(401).json({ msg: "Invalid credentials" });
        }

        // Pokud je vše v pořádku, přihlášení je úspěšné
        return response.status(200).json({
            msg: "Logged in successfully",
            user: {
                id: user._id,
                email: user.email
            }
        });
    } catch (err) {
        // Logování chyby
        console.error("Error during login:", err);
        
        // Vrátíme odpověď se statusem 500 v případě chyby serveru
        return response.status(500).json({ msg: "Server error" });
    }
});

module.exports = loginUser;
