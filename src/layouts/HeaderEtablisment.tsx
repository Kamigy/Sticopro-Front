export const Header = ({ title, picture }: any) => (
  <>
    <link rel="stylesheet" href={process.env.PUBLIC_URL + '/css/header.css'} />

    <header className="header">

      <img src={process.env.PUBLIC_URL + '/pictures/sticopro--glass-iso-color.svg'} alt="arrow"/>

      <div className="title">

        {title}

      </div>
        
    </header>
  </>
);