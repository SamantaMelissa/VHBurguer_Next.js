import Footer from "@/components/footer/footer"
import SubHeader from "@/components/sub-header/sub-header"
import styles from "./detalhe-produto.module.css"

const DetalheProduto = () => {
    return (
        <>
            <SubHeader />
            <main className={styles.main_detalhes}>
                <section className={`${styles.detalhes} layout_guide`}>
                    <article className={styles.card_detalhes} aria-label="Card de detalhes do produto">
                        <h1 id="titulo-detalhes-produto" className={styles.detalhes_titulo}>Detalhes do X-Bacon</h1>
                        {/* <!-- “Selo” do preço (estrela + cifrão) --> */}
                        <figure className={styles.card_detalhes_imagem} >
                            <img
                                src="/imgs/HamburguerAlcatraComBacon.png"
                                alt="Hambúrguer sobre uma tábua de madeira, com pão, carne, queijo, bacon, alface, tomate e cebola roxa." />
                            {/* src={produto?.imagemUrl} alt={produto?.nome} /> */}
                        </figure>


                        <div className={styles.card_detalhes_infos}>
                            <div className={`${styles.card_detalhes_col} ${styles.card_detalhes_col_esq}`}>
                                <div className={styles.campo}>
                                    <h2 className={styles.campo_titulo}>Nome do produto</h2>
                                    <p className={styles.campo_valor}>X-bacon</p>
                                </div>

                                <div className={styles.campo}>
                                    <h2 className={styles.campo_titulo}>Descrição</h2>
                                    <p className={styles.campo_valor}>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum placeat qui molestiae. Minus dolores expedita, quo veritatis nihil necessitatibus, numquam amet tenetur at quia labore exercitationem, ipsam explicabo neque similique.
                                    </p>
                                </div>
                            </div>

                            <div className={`${styles.card_detalhes_col} ${styles.card_detalhes_col_dir}`}>
                                <div className={styles.campo}>
                                    <h2 className={styles.campo_titulo}>Preço (R$)</h2>
                                    <p className={styles.campo_valor}>
                                        <span className={styles.preco_atual}>R$20,00</span>
                                        <span className={styles.preco_anterior}>R$20,00</span>
                                    </p>
                                </div>

                                <div className={styles.campo}>
                                    <h2 className={styles.campo_titulo}>Categoria</h2>
                                    <ul className={styles.campo_lista}>
                                        <li>categoria 1</li>
                                        <li>categoria 2</li>
                                        <li>categoria 3</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </article>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default DetalheProduto