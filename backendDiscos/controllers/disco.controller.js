const Disco = require ('../models/discos.model.js');

//get discos
const getDiscos = async (req, res) => {
    try {
        const discos = await Disco.find({});
        res.status(200).json(discos)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

//get 1 disco por id
const getSingleDisco = async (req, res) => {
    try {
        const  { id } = req.params;
        const disco = await Disco.findById(id);
        res.status(200).json(disco);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

//crear disco
const createDisco = async (req, res) => {
    try {
        const disco = await Disco.create(req.body);
        res.status(200).json(disco);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

//update disco
const updateDisco = async (req, res) => {
    try {
        const { id } = req.params;
        const disco = await Disco.findByIdAndUpdate(id, req.body);

        if(!disco) {
            return res.status(404).json({message: "Disco no encontrado"});
        }

        const updatedDisco = await Disco.findById(id);
        res.status(200).json(updatedDisco);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

//delete disco
const deleteDisco = async (req, res) => {
    try {
        const { id } = req.params;
        const disco = await Disco.findByIdAndDelete(id);
        
        if(!disco) {
            return res.status(404).json({message: "Disco no encontrado"});
        }
        
        res.status(200).json({message: "Disco eliminado exitosamente"});
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    getDiscos,
    getSingleDisco,
    createDisco,
    updateDisco,
    deleteDisco
}