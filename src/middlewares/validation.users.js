export const validateUser = (req, res, next) => {
    const { name, email, age } = req.body
    if (!name || !email || !age) {
        return res.status(400).send("Faltan datos obligatorios (name, email, age)")
    }
    if (typeof age !== "number" || age <= 0) {
        return res.status(400).send("Edad inválida")
    }
    next()
}