import Footer from "@/components/footer/footer";
import SubHeader from "@/components/sub-header/sub-header"
import styles from "./produto.module.css"
import { useEffect, useState } from "react";
import { listarCategoria } from "../api/categoriaService";

interface Categoria{
  categoriaID: number,
  nome: string
}

const Produto = () => {

  const[categorias, setCategorias] = useState<Categoria[]>([]);

  async function listarCatagoriaEmProduto(){
    const lista = await listarCategoria();
    setCategorias(lista.data);
    console.log(lista.data);
  }

  //quando produto for renderizado, a funcao listarCatagoriaEmProduto acontece
  useEffect(()=>{
    listarCatagoriaEmProduto();
  }, [])




  return (
    <>
      <SubHeader />
      <main className={styles.main_produto}>
        <section className={`${styles.section_flex} layout_guide`}>
            <h1>Criar produto</h1>
            <form className={styles.formulario_produto}>
              <div className={styles.campo_form}>
                <label htmlFor="">Nome do produto</label>
                <input type="text" />
              </div>
              <div className={styles.campo_form}>
                <label htmlFor="">Descrição</label>
                <textarea></textarea>
              </div>
              <div className={styles.campo_form}>
                <label htmlFor="">Preço(R$)</label>
                <input type="text" />
              </div>
              <div className={styles.campo_form}>
                <label htmlFor="">Categoria</label>
                <select>
                 {categorias.map((item) => (
                  <option value={item.categoriaID} key={item.categoriaID}>{item.nome}</option>
                 )
                 )}
                </select>

                <a href="">Criar categoria</a>
              </div>
              <div className={styles.campo_form}>
                <label htmlFor="">Imagem do produto</label>
                <input
                  type="file"
                />
              </div>
              <button type="submit" id={styles.btn_salvar}>Salvar</button>
            </form>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Produto;