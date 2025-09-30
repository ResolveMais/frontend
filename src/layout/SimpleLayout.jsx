import { Outlet } from 'react-router-dom';

const SimpleLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default SimpleLayout; // ← Isso é essencial