import { useParams } from "react-router-dom";

export default function withRouter(Component) {
  return (props) => {
    const params = useParams();
    return <Component {...props} params={params} />;
  };
}
