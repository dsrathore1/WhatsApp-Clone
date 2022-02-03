import './App.css';
import Sidebar from '../src/Components/Sidebar/Sidebar';
import Chat from '../src/Components/Chats/Chats.jsx';

function App() {
  return (
    <div className="app">
      <div className="app_body">
        {/* sidebar */}
        <Sidebar />
        {/* chats */}
        <Chat />
      </div>

    </div>
  );
}

export default App;
