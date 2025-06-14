import { useParams } from 'react-router-dom';

const Services = ({ type }) => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold capitalize">{type} Service</h1>
      <p>This is the {type} service page.</p>
    </div>
  );
};
export default Services;
