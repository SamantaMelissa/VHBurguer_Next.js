import { api } from "./api";

type Produto = {
    nome: string,
    descricao: string,
    preco: string,
    imagem: File | null,
    categoriasId: number[],
    imagemUrl: string
}

export async function cadastrarProduto(dados: Produto){
    try{
        const formData = new FormData();

        formData.append("nome", dados.nome);
        formData.append("descricao", dados.descricao);
        formData.append("preco", dados.preco);
        if(dados.imagem){
            formData.append("imagem", dados.imagem);
        }
        dados.categoriasId.forEach((id) => {
            formData.append("categoriaIds", id.toString());
        })

        await api.post("Produto", formData);

        // console.log("eba deu bom!! 🍔🥳🤪😎")

    }catch(error: any){
        throw new Error(error.response.data);
    }
}

export async function listarProduto(){
    try{
        const response = await api.get("Produto");

        const produtos = response.data.map((produto : Produto) => ({
            ...produto,
            imagemUrl: `${api.defaults.baseURL}${produto.imagemUrl}`
        }))

        return produtos;

    } catch(error: any){
        throw new Error(error.response.data);
    }
}

export async function listarPorId(id: number){
    try {
        const response = await api.get("Produto/" + id);

        const produto = {
            ...response.data,
            imagemUrl: `${api.defaults.baseURL}${response.data.imagemUrl}`
        };

        return produto;
        
    } catch (error: any) {
        throw new Error(error.response.data)
    }
}

export async function excluirProduto(produtoId : number){
    try {
        await api.delete("Produto/" + produtoId)
    } catch (error: any) {
        throw new Error(error.response.data)
    }
}