import styles from "./lista-produto.module.css";

import CardProduto from "../card-produto/card-produto";

const ListaProduto = () => {
    return (
        <>
            <div id={styles.campo_btn}>
                <div id={styles.filtros}>
                    <button>
                        <span id={styles.btn_filtrar__text}>Filtrar</span>
                        <svg id={styles.btn_filtrar__icon} viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M4 6h16M4 12h16M4 18h16" fill="none" stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round" />
                            <circle cx="9" cy="6" r="2" fill="currentColor" />
                            <circle cx="15" cy="12" r="2" fill="currentColor" />
                            <circle cx="11" cy="18" r="2" fill="currentColor" />
                        </svg>
                    </button>
                </div>

                <div id="btn_cardapio">
                    <button>Todas as promoções</button>
                    <button>Adicionar produto</button>
                </div>

            </div >
            <CardProduto />
            <CardProduto />
            <CardProduto />
        </>
    )
}

export default ListaProduto;