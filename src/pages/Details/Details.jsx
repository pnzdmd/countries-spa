import { useParams, useNavigate } from 'react-router-dom';

const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      Details
      {name}
    </div>
  );
};

export default Details;
