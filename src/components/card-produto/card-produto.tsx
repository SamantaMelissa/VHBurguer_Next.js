import { formatarPreco } from "@/utils/formatacao";
import styles from "./card-produto.module.css"

type Produto = {
    titulo: string,
    descricao: string,
    img: string,
    preco: number
}

const CardProduto = ({titulo, descricao, img, preco} : Produto) => {
    return (
        <article className={styles.card_produto}>
            <img src={img} alt="Produto vendido pela loja."
                className={styles.img_produto} />
            <h3 className={styles.titulo_produto}>{titulo}</h3>
            <p className={styles.desc_produto}>{descricao}</p>
            <div className={styles.campo_itens}>
                <p className={styles.valor_produto}>{formatarPreco(preco)}</p>
                <button>
                    <img src="/imgs/trash.svg" alt="ícone que representa exclusão" />
                </button>
                <button>
                    <img src="/imgs/editar.svg" alt="ícone que representa edição" />
                </button>
            </div>
        </article>
    )
}

export default CardProduto;