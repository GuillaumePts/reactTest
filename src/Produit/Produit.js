import '../produit/Produit.css'

const produits = [
    {name : 'Pomme' ,id:1},
    {name : 'Groseille' ,id:2},
    {name : 'Framboise' ,id:3}
]

export default function Produit(){
    return (
        <div className='produit'>
<ul>
    {
        produits.map(produit =>(
            <a key={produit.produit}> {produit.produit} </a>
        ))
    }
</ul>
        </div>
    )
}