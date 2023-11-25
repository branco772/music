import NavBar from '../../../components/navBar3.0';
import Sidebar from '../../../components/Sidebar'; // Importa el componente Sidebar
import Principal from '../../../components/principal2.0';

export default function Dashboard() {
  return (
    <div>
      <NavBar />
      <div style={{ display: 'flex' }}>
        <main style={{ flex: 1 }}>
          <Principal />
        </main>
        <Sidebar /> {/* Usa el componente Sidebar aquí */}
      </div>
    </div>
  );
}