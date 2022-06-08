import '../Produit/Produit.css'

// const produits = [
//     {name : 'Pomme' ,id:1},
//     {name : 'Groseille' ,id:2},
//     {name : 'Framboise' ,id:3}
// ]

// export default function Produit(){
//     return (
//         <div className='produit'>

//     {
//         produits.map(produit =>(
//             <span key={produit.id}> {produit.name}</span>
//         ))
//     }

//         </div>
//     )
// } 

// creer un tableau produit
// image , titre, description, id , prix , avis
// le composant produit devra afficher une card avec les infromation de chaque produit 
// créer un autre composant CardProduit qui devra afficher une card avec les iformation de chaque produit qui lui sont passés en props

const produits = [
    {
      image: 'https://c.shld.net/rpx/i/s/i/spin/10000003/prod_2305917712',
      id: 1,
      titre: 'Echo Dot',
      prix: '30€',
      description: 'lorem8(je sais ça marche pas en jsx)',
      avis:'⭐⭐⭐⭐⭐'

    },
    {
      image: 'https://live.staticflickr.com/1701/24066310330_b7bfcd0c0a_n.jpg',
      id: 2,
      titre: 'Fire TV',
      prix: '70€',
      description: 'lorem8(je sais ça marche pas en jsx)',
      avis:'⭐⭐⭐⭐⭐'
    },
    {
      image:
        'https://www.bhphotovideo.com/images/images2500x2500/fitbit_fb507rgpk_versa_2_health_1501923.jpg',
      id: 3,
      titre: 'Fitbit Versa ',
      prix: '120€',
      description: 'lorem8(je sais ça marche pas en jsx)',
      avis:'⭐⭐⭐⭐⭐'
    },
  ];


export default function Produit(){
    return (
        <div className='produit'>
<ul>
    {
        produits.map(produit =>(
            
            <figure key={produit.id}> <img src={produit.image}></img> <figcaption><h2>{produit.titre}</h2><p>{produit.prix}</p><p>{produit.description}</p><p>{produit.avis}</p></figcaption></figure>
        ))
    }
</ul>
        </div>
    )
} 
