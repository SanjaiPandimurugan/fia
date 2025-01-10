import Header from './Header';
import FirstRow from './FirstRow';
import ParatoSection from './ParatoSection';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Header */}
      <div className="sticky top-0 z-50">
        <Header />
      </div>

      {/* Main Content */}
      <div className="p-4">
        {/* First Row Component */}
        <FirstRow />

        {/* Parato Section */}
        <div className="grid grid-cols-2 gap-6 mt-6">
          <ParatoSection />
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 