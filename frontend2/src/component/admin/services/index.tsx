import axios, { AxiosResponse } from "axios";

const baseUrl: string | undefined = process.env.REACT_APP_BASE_URL;

export interface DiscoData {
  titulo: string;
  artista: string;
  precio: number;
}

export async function getDiscos(): Promise<AxiosResponse<DiscoData[]>> {
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

export async function saveDiscos(discosData: DiscoData): Promise<AxiosResponse<any>> {
  try {
    const response: AxiosResponse<any> = await axios({
      url: `${baseUrl}/api/discos`,
      method: "POST",
      data: discosData,
      headers: { 'Content-Type': 'application/json' }
    });
    return response;
  } catch (e) {
    console.log(e);
    throw e;
  }
}

export async function updateDiscos(titulo: string, datosNuevos: any): Promise<AxiosResponse<any>> {
  try {
    const response: AxiosResponse<any> = await axios({
      url: `${baseUrl}/api/discos/${titulo}`,
      method: "PUT",
      data: datosNuevos,
    });
    return response;
  } catch (e) {
    console.log(e);
    throw e;
  }
}

export async function deleteDisco(titulo: string): Promise<AxiosResponse<any>> {
  try {
    const response: AxiosResponse<any> = await axios({
      url: `${baseUrl}/api/discos/${titulo}`,
      method: "DELETE",
    });
    return response;
  } catch (e) {
    console.log(e);
    throw e;
  }
}