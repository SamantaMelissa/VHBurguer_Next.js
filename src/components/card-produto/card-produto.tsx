import styles from "./card-produto.module.css"

const CardProduto = () => {
    return (
        <article className={styles.card_produto}>
            <img src="/imgs/HamburguerAlcatraComBacon.png" alt="Produto vendido pela loja."
                className={styles.img_produto} />
            <h3 className={styles.titulo_produto}>X-Salada</h3>
            <p className={styles.desc_produto}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore earum itaque repellat voluptas reprehenderit exercitationem sequi quo. Perspiciatis qui accusamus, nesciunt saepe nostrum ut non exercitationem sapiente similique dolor impedit.</p>
            <div className={styles.campo_itens}>
                <p className={styles.valor_produto}>R$20,00</p>
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