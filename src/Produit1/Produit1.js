import '../Produit1/Produit1.css'


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


  export default function Produit1(){
    return (
        <div className='produit1'>
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