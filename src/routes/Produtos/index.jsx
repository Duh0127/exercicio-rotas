import { listaProdutos } from "../../components/listaProdutos"
import { Link } from "react-router-dom"

export default function Produtos(){
    return(
        <main>
            <h1>MINHA LISTA DE PRODUTOS</h1>
            {listaProdutos.map(prod => (
                <div key={prod.id}>
                    <Link to={`/produtos/editar/${prod.id}`}>
                        Editar o produto - '{prod.nome.toUpperCase()}'
                    </Link>
                </div>
            ))}
        </main>
    )
}