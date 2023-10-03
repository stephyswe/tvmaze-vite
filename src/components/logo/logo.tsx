import { useNavigate } from 'react-router-dom';
import './logo.css';

export default function Logo() {
  const navigate = useNavigate();
  return (
    <div aria-hidden="true" onClick={() => navigate('/')} className="logo-container">
      <img data-testid="logo" alt="logo" className="logo" src="https://static.tvmaze.com/images/tvm-header-logo.png" />
    </div>
  );
}
