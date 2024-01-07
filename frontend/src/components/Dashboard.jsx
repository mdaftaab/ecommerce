import { useSelector } from 'react-redux';

const Dashboard = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userId = useSelector((state) => state.auth.userId);

  if (!isAuthenticated) {
    // Redirect to login if not authenticated
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome to your dashboard, User {userId}!</p>
      {/* Add other dashboard content */}
    </div>
  );
};

export default Dashboard;
