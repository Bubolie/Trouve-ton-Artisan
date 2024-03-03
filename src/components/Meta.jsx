import { Helmet } from "react-helmet";

const Meta = (props) => {
  return (
    <Helmet>
      <title>{props.title}</title>
      <meta name="description" content={props.content} />
    </Helmet>
  );
};

export default Meta;
