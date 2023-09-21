import { useEffect, useState } from "react";
import { SecondaryButton } from "../components/SecondaryButton";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function Wrapper(props: any) {

  const [activeFilter, setActiveFilter] = useState<string>("Rouge");
  const [wineCards, setWineCards] = useState<any[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    document.title = props.title;
    const fetchWineCards = async () => {
      try {
        const response = await axios.get('http://10.25.130.204:1337/api/wine-bottles', {
          headers: {
            'Authorization': `Bearer a1df87a2e47809f5b8eeabc0cdbed733bba95ca8c1b63e06790c095c3d7bf95892d7d137b2374d42fb9795ca7da797002edb7e58dee3296aa687becfb06dd2fbb0fd72ffca17018a8e9c007335265a49f86374151f605ee6a4e23bb32484a5f1a87027591d3538f087672359838f83bb4293adc805b45d6a680be6d411e835e8`,
          },
        });
        console.log(response.data)
        setWineCards(response.data.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données', error);
      }
    };

    fetchWineCards();
  });

  return (
    <>
      <link rel="stylesheet" href={process.env.PUBLIC_URL + '/css/home.css'} />

      <div className="title">Mes cartes vins</div>

      <div className="carte">

        <div className="filterOptions">
          {["Rouge", "Blanc", "Rosé"].map((filter) => (
              <div
                key={filter}
                className={`filterOption ${filter === activeFilter ? "active" : ""}`}
                onClick={() => setActiveFilter(filter)}>
                {filter}
              </div>
          ))}
        </div>

        <div className="select-container">
          <select>
              <option value="Mousseux">Type de vins</option>
              <option value="Mousseux">Mousseux</option>
              <option value="Autre">Autre</option>
          </select>
        </div>

        { wineCards.length === 0 
          ?
          <p>Tu n’as ajouté <b>aucun vin {activeFilter}</b> dans la catégorie “{activeFilter}”. Ajoute ton <b>premier {activeFilter}</b> en cliquant sur le bouton ci-dessous !</p>
          :
          <div className="wineCardsContainer">
            {
              wineCards
              .filter(card => card.attributes.Color === activeFilter)
              .map((card, index) => (
                <div key={index} className="wineCard">
                  <img src={`10.25.130.204:1337/${card.attributes.image?.url}`} alt={card.attributes.Name} />
                  <div>{card.attributes.Name}</div>
                </div>
              ))
            }
          </div>
        }

        <SecondaryButton title="Ajouter une carte vin" onClick={() => navigate('/addcard')}></SecondaryButton>

      </div>
    </>
  );
}