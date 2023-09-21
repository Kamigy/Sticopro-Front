import { useEffect, useState } from "react";
import { Input } from "../components/Input";
import axios from 'axios';
import { PrimaryButton } from "../components/PrimaryButton";

export default function Wrapper(props: any) {
    useEffect(() => {
        document.title = props.title;
    });

    const [selectedImage, setSelectedImage] = useState<any>(null);
    const [message, setMessage] = useState<string | null>(null);

    const [nom, setNom] = useState('');
    const [description, setDescription] = useState('');
    const [couleur, setCouleur] = useState('');
    const [categorie, setCategorie] = useState('');
    const [image, setImage] = useState<File | null>(null);


    const handleSubmit = async () => {
        try {
          const formData = new FormData();
          formData.append('data', JSON.stringify({
            Name: nom,
            Description: description,
            Color: couleur,
            Type: categorie,
          }));

          if(image) {
            formData.append('files.image', image);
          }
      
          const response = await axios.post('http://185.228.231.169:1337/api/wine-bottles', formData , {
            headers: {
                'Authorization': `Bearer a1df87a2e47809f5b8eeabc0cdbed733bba95ca8c1b63e06790c095c3d7bf95892d7d137b2374d42fb9795ca7da797002edb7e58dee3296aa687becfb06dd2fbb0fd72ffca17018a8e9c007335265a49f86374151f605ee6a4e23bb32484a5f1a87027591d3538f087672359838f83bb4293adc805b45d6a680be6d411e835e8`,
                "Content-Type": "multipart/form-data",
            }
          });
          console.log('Réponse du serveur', response.data);

        setNom('');
        setDescription('');
        setCouleur('');
        setCategorie('');
        setImage(null);
        setSelectedImage(null);

        setMessage('La fiche a été créée avec succès');
        } catch (error) {
          console.error('Une erreur est survenue', error);

          setMessage('Une erreur est survenue lors de la création de la fiche');
        }
      };
      
      
      const handleImageChange = (e: any) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
            const reader = new FileReader();
            
            reader.onload = function (e) {
                setSelectedImage(e.target?.result);
            }
    
            reader.readAsDataURL(e.target.files[0]);
        }
    };
    

    return (
        <>
            <link rel="stylesheet" href={process.env.PUBLIC_URL + '/css/addcard.css'} />
            
            <header></header>

            <div className="title">Ajouter une carte</div>

            <div className="carte">

                <Input type="text" value={nom} onChange={(e: any) => setNom(e.target.value)} placeholder="Nom du Vin" required/>

                <div className="dropdowns">

                    <div className="select-container">

                        <select value={couleur} onChange={(e) => setCouleur(e.target.value)}>
                            <option value="" disabled selected>Couleur du vin</option>
                            <option>Rouge</option>
                            <option>Blanc</option>
                            <option>Rosé</option>
                        </select>

                    </div>

                    <div className="select-container">

                        <select value={categorie} onChange={(e) => setCategorie(e.target.value)}>
                            <option value="" disabled selected>Catégorie</option>
                            <option>Mousseux</option>
                            <option>Tranquille</option>
                        </select>

                    </div>

                </div>

            </div>
                
            {/* <div className="content">
                <div className="addImage-wrapper">
                    <div className="addImage-input">
                        <input type="file" accept="image/*" className="addImage-input-selector" onChange={handleImageChange} />
                        <div className="add-symbol">+</div>
                        Ajouter une image
                    </div>

                    {selectedImage && 
                    <div className="addImage-image">
                        <img src={selectedImage} alt="Selected" />
                    </div>
                    }
                </div>

                <textarea className="addDescription" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Ajouter une description"></textarea>

                <PrimaryButton title="Ajouter la carte" onClick={handleSubmit}></PrimaryButton>

                {message && <div className="message">{message}</div>}

            </div> */}
        </>
    );
}
