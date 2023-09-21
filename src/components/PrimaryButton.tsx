export const PrimaryButton = (
  props: {
    title: string,
    onClick: () => void
  }) => (
  <>
    <link rel="stylesheet" href={process.env.PUBLIC_URL + '/css/buttons.css'} />

    <button className="primaryButton" onClick={props.onClick}>
      { props.title }
    </button>
  </>
);