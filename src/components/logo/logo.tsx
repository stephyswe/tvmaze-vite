import { useNavigate } from 'react-router-dom';
import './logo.css';

export default function Logo() {
  const navigate = useNavigate();
  return (
    <div aria-hidden="true" onClick={() => navigate('/')} className="hover:cursor-pointer">
      <img
        alt="logo"
        className="logo"
        src="https://p26-semi-asset.byteimg.com/tos-cn-i-acvclvrq33/788d4c86a223444e9805d9c29a4b0942.png"
      />
    </div>
  );
}
