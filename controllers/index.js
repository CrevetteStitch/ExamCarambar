const Blagues = require("../models/blagues");

const getRandomBlague = (data) => {
    const random = Math.floor(Math.random() * data.length);
    return data[random];
}

const controllerBlague = {
    random: async (req, res) => {
        try {
            const data = await Blagues.findAll();
            if (data.length === 0) {
                return res.status(404).json({ error: "Blague non trouvée" });
            }
            const RandomBlague = getRandomBlague(data);
            res.status(200).json({ blagues: RandomBlague });
        } catch (error) {
            res.status(500).json({ error: "Une erreure s'est produite" });
        }
    },
    findAll :  async (req, res) =>{
        const data = await Blagues.findAll();
        res.status(200).json({allBlagues : data});
    },
    findById: async (req, res) => {
        const id = req.params.id;
        if (isNaN(id)) {
            return res.status(400).json({ error: "N'utilisez pas de texte pour l'identification" });
        }

        const blague = await Blagues.findByPk(id);
        if (!blague) {
            return res.status(404).json({ error: "ID not found" });
        }
        return res.status(200).json({ result: blague });
    },
    create: async (req, res) => {
        console.log(req.body);
        const data = await Blagues.create(req.body);
        console.log(data);
        res.status(201).json({ message: "Blague ajoutée", data: req.body });

    },
}

module.exports = controllerBlague;