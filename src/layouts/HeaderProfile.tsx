import { useNavigate } from "react-router-dom";

export const HeaderProfile = ({ title, picture, navgiate }: any) => {
  const navigate = useNavigate(); 
  return (
    <>
      <link rel="stylesheet" href={process.env.PUBLIC_URL + '/css/headerProfile.css'} />

      <header className="header">
        
        <div className="position-absolute top-0 end-0 btn me-3 mt-4 fw-bold btnDeco" onClick={() => navigate('/login')}>Déconnexion</div>

        <div className="position-absolute top-100 start-50 translate-middle mb-3">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png" alt="" className="img-thumbnail rounded-circle img-taille" />
        </div>

      </header>
    </>
  );
};
