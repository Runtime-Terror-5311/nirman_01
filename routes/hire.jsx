import { useParams } from 'react-router-dom';

const Hire = ({ type }) => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold capitalize">{type} Hire</h1>
      <p>This is the {type} hire page.</p>
    </div>
  );
};
export default Hire;
