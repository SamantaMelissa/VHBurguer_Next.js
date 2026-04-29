import { api } from "./api";

export async function cadastrarCategoria(nome: string){
    try{
        await api.post("Categoria", {nome});
        // console.log("eba deu certo 🤗")
    }catch(error: any){
        // console.log(error.response.data)
        throw new Error(error.response.data);
    }
}