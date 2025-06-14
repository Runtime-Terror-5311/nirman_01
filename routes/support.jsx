import { useParams } from 'react-router-dom';

const Support = ({ type }) => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold capitalize">{type} Support</h1>
      <p>This is the {type} support page.</p>
    </div>
  );
};
export default Support;
