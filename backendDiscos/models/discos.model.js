const mongoose = require('mongoose')

const DiscoSchema = mongoose.Schema({
        titulo: {
            type: String,
            required: [true, 'Titulo requerido']
        },
        artista: {
            type: String,
            required: [true, 'Artista requerido']
        },
        precio: {
            type: Number,
            required: [true, 'Precio requerido']
        },
        imagen: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true,
    }
);

const Disco = mongoose.model("Disco", DiscoSchema);

module.exports = Disco;