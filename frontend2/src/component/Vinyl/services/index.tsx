import axios, { AxiosResponse } from "axios";

const baseUrl: String = process.env.REACT_APP_BASE_URL as string;

export interface Disco {
    _id: string;
    titulo: string;
    artista: string;
    precio: number;
    imagen: string;
}

export async function getDiscos(): Promise<AxiosResponse<Disco[]>> {
    try {
    const response = await axios({
        url: `${baseUrl}/api/discos`,
        method: "GET",
    });
    return response;
    } catch (e) {
    console.log(e);
    throw e; // Para propagar el error a los llamadores de la función
    }
}