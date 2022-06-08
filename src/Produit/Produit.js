import '../Produit/Produit.css'

const produits = [
    {name : 'Pomme' ,id:1},
    {name : 'Groseille' ,id:2},
    {name : 'Framboise' ,id:3}
]

export default function Produit(){
    return (
        <div className='produit'>

    {
        produits.map(produit =>(
            <span key={produit.id}> {produit.name}</span>
        ))
    }

        </div>
    )
} 