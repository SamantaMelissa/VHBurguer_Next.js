import DataRow from "@/components/data-row/data-row";
import Footer from "@/components/footer/footer";
import SubHeader from "@/components/sub-header/sub-header"

const Historico = () => {
    return (
        <>
            <SubHeader />
            <main>
                {/* cabecalho cm titulo */}
                <table>
                    <DataRow />
                    <DataRow />
                    <DataRow />
                    <DataRow />
                    <DataRow />
                </table>
            </main>
            <Footer />
        </>
    )
}

export default Historico;