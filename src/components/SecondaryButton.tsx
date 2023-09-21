export const SecondaryButton = (props: {
  title: string,
  onClick: () => void
}) => (
  <>
    <link rel="stylesheet" href={process.env.PUBLIC_URL + '/css/buttons.css'} />

    <button className="secondaryButton" onClick={props.onClick}>
    { props.title }
    </button>
  </>
);