import "./stage.scss"

const Stage = (props) => {
  return (
    <div className="container">
      <p className="my-2">
        <span className="bg-stage">Etape {props.number}</span> : {props.description}
      </p>
    </div>
  );
};

export default Stage;
