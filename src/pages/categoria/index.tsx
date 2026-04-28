import Footer from "@/components/footer/footer"
import styles from './categoria.module.css'
import Link from 'next/link'
import SubHeader from "@/components/sub-header/sub-header"
import { useState } from "react"
import { cadastrarCategoria } from "../api/categoriaService"

const Categoria = () => {

    const[categoria, setCategoria] = useState<string>("");

    function cadastrar(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        cadastrarCategoria(categoria);
    }
    // console.log(categoria);
    return(
        <>
            <SubHeader/>
                <main id={styles.main}>
                    <h1>CRIAR CATEGORIA</h1>
                    <form action="" id={styles.formulario} onSubmit={cadastrar}>
                        <div id={styles.campo_formulario}>
                            <label htmlFor="">Nome Categoria</label>
                            <input type="text" placeholder="Digite a categoria"
                            value={categoria} onChange={(e) => setCategoria(e.target.value)}/>
                        </div>
                        <div id={styles.alinharBotoes}>
                            <button id={styles.botaoSalvar}>Salvar</button>
                            <Link href='/produto' id={styles.botaoCancelar}>Cancelar</Link>
                        </div>
                    </form>
                </main>
            <Footer/>
        </>
    )
}

export default Categoria