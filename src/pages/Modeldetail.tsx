import { useParams, Navigate } from 'react-router-dom';
import CarModelPage from './Models';
import { models } from './TestDrivePage/data/models';

const ModelDetail = () => {
  const { id } = useParams<{ id: string }>();
  const modelId = parseInt(id || '0', 10);
  const modelExists = models.find(m => m.id === modelId);
  
  if (!modelExists) {
    return <Navigate to="/models" replace />;
  }
  
  return <CarModelPage modelId={modelId} />;
};

export default ModelDetail;