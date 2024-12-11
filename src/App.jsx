import React, { useState, useEffect } from 'react';
import { 
  Fish,
  Shell,
  Anchor,
  Waves,
  Plus,
  Lock,
  Trophy,
  X,
  Twitter,
  ExternalLink,
  Home,
  Brain,
  Clock,
  Zap,
  Database,
  Droplets
} from 'lucide-react';
import { Card, CardContent } from './components/ui/card';

// Loading Screen Component
const LoadingScreen = () => {
  const [progress, setProgress] = useState({
    systemLoad: 0,
    memoryUsage: 0,
    neuralSync: 0,
    quantumBits: 0
  });
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => ({
        systemLoad: Math.min(prev.systemLoad + 5, 87),
        memoryUsage: Math.min(prev.memoryUsage + 3, 54),
        neuralSync: Math.min(prev.neuralSync + 4, 72),
        quantumBits: Math.min(prev.quantumBits + 3, 54),
      }));
    }, 100);

    const logMessages = [
      'Initializing marine neural network...',
      'Loading quantum ocean patterns...',
      'Calibrating wave frequencies...',
      'Establishing aquatic quantum protocols...',
      'Loading marine behavioral patterns...',
      'Initializing coral stabilizers...',
    ];

    logMessages.forEach((message, index) => {
      setTimeout(() => {
        setLogs(prev => [...prev, { time: new Date().toISOString(), message }]);
      }, index * 1000);
    });

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900 via-black to-emerald-900">
      <div className="w-full max-w-4xl p-8">
        <h1 className="text-4xl font-bold tracking-wider mb-8 text-center font-orbitron text-emerald-400">
          <span className="inline-block transform hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(52,211,153,0.7)]">
            INITIALIZING AQUAVERSE
          </span>
        </h1>
        
        <div className="grid grid-cols-2 gap-6 mb-8">
          {Object.entries(progress).map(([key, value]) => (
            <div key={key} className="bg-black/20 border border-emerald-400/30 p-6 rounded-lg">
              <div className="flex justify-between mb-2">
                <span className="text-emerald-400 font-orbitron">
                  {key.replace(/([A-Z])/g, ' $1').toUpperCase()}
                </span>
                <span className="text-emerald-400">{value}%</span>
              </div>
              <div className="w-full bg-emerald-900/30 rounded-full h-2">
                <div 
                  className="h-2 bg-emerald-400 rounded-full transition-all duration-500"
                  style={{ width: `${value}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="bg-black/20 border border-emerald-400/30 rounded-lg p-4">
          <div className="h-48 overflow-y-auto space-y-2">
            {logs.map((log, index) => (
              <div key={index} className="text-sm font-mono flex gap-2 text-emerald-400/70">
                <span>[{log.time.substring(11, 23)}]</span>
                <span>{log.message}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Game Card Component
const GameCard = ({ icon: Icon, title, description, status, marketCap, onClick, isComingSoon }) => (
  <Card className="bg-black/20 border-emerald-400/30 hover:border-emerald-400/60 transition-all duration-300 flex flex-col">
    <CardContent className="p-6 flex flex-col h-full relative">
      {!isComingSoon ? (
        <>
          <div className="absolute top-6 left-6">
            <Icon className="w-8 h-8 text-emerald-400" />
          </div>
          <div className="absolute top-6 right-6">
            {status === 'locked' && <Lock className="w-5 h-5 text-emerald-400/50" />}
          </div>
          
          <div className="mt-16">
            <h3 className="text-xl font-medium text-emerald-400 mb-3 font-orbitron">{title}</h3>
            <p className="text-emerald-400/70 text-sm mb-6 leading-relaxed">{description}</p>
            {marketCap && (
              <div className="text-yellow-400 text-sm mb-4">
                Unlocks at {marketCap} Market Cap
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center h-full text-center">
          <Icon className="w-12 h-12 text-emerald-400 mb-4" />
          <h3 className="text-xl font-medium text-emerald-400 mb-3 font-orbitron">{title}</h3>
          <p className="text-emerald-400/70 text-sm">{description}</p>
        </div>
      )}
      
      {!isComingSoon && (
        <button
          onClick={onClick}
          className={`w-full p-3 rounded-lg font-medium transition-all duration-300 mt-auto ${
            status === 'locked' 
              ? 'border border-emerald-400/30 text-emerald-400/50 hover:border-emerald-400/50'
              : 'bg-emerald-400 text-black hover:bg-emerald-300'
          }`}
        >
          {status === 'locked' ? 'Locked' : 'Play Now'}
        </button>
      )}
    </CardContent>
  </Card>
);

// Building Card Component
const BuildingCard = ({ icon: Icon, name, description, owned, rate, cost, onPurchase, canAfford }) => (
  <Card className="bg-black/20 border-emerald-400/30 hover:border-emerald-400/60 transition-all duration-300">
    <CardContent className="p-6 relative">
      {/* Header row with icon and name - Added pt-4 for top padding */}
      <div className="flex items-center gap-3 mb-4 pt-4">
        <Icon className="w-6 h-6 text-emerald-400" />
        <h3 className="text-lg text-emerald-400 font-chakra tracking-wide">{name}</h3>
      </div>
      
      {/* Building info with proper spacing */}
      <div className="space-y-2">
        <p className="text-emerald-400/70">Owned: {owned}</p>
        <p className="text-emerald-400/70">{description}</p>
        <p className="text-emerald-400">+{rate} $WAVE/s</p>
      </div>

      {/* Cost button */}
      <button 
        onClick={onPurchase}
        disabled={!canAfford}
        className={`absolute top-6 right-6 px-4 py-2 rounded-lg font-chakra ${
          canAfford 
            ? 'bg-emerald-900 text-emerald-400 hover:bg-emerald-900/70'
            : 'bg-gray-800/50 text-gray-600'
        }`}
      >
        {cost} $WAVE
      </button>
    </CardContent>
  </Card>
);

// Updated Mini Game Component (More Interesting)
const MiniGame = ({ onClose, onScore }) => {
  const [position, setPosition] = useState({ x: 50, y: 85 });
  const [bullets, setBullets] = useState([]);
  const [enemies, setEnemies] = useState([]);
  const [score, setScore] = useState(0);

  // Handle mouse movement for player
  const handleMove = (e) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - bounds.left) / bounds.width) * 100;
    setPosition({ x, y: 85 });
  };

  // Handle shooting
  const handleClick = () => {
    setBullets(prev => [...prev, {
      id: Date.now(),
      x: position.x,
      y: position.y,
      speed: 5
    }]);
  };

  // Move bullets and check collisions
  useEffect(() => {
    const interval = setInterval(() => {
      setBullets(prev => prev
        .map(bullet => ({ ...bullet, y: bullet.y - bullet.speed }))
        .filter(bullet => bullet.y > 0)
      );

      setEnemies(prev => {
        const remaining = [];
        prev.forEach(enemy => {
          let hit = false;
          bullets.forEach(bullet => {
            const distance = Math.hypot(bullet.x - enemy.x, bullet.y - enemy.y);
            if (distance < 5) {
              hit = true;
              setScore(s => s + enemy.points);
              onScore(enemy.points);
            }
          });
          if (!hit) remaining.push({
            ...enemy,
            y: enemy.y + enemy.speed
          });
        });
        return remaining;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [bullets]);

  // Spawn enemies
  useEffect(() => {
    const interval = setInterval(() => {
      if (enemies.length < 5) {
        setEnemies(prev => [...prev, {
          id: Date.now(),
          x: Math.random() * 90 + 5,
          y: 0,
          speed: 0.5 + Math.random() * 0.5,
          points: 10,
          type: Math.random() > 0.8 ? 'fast' : 'normal'
        }]);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [enemies.length]);

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
      <div className="bg-blue-900/90 border border-emerald-400/30 rounded-lg max-w-2xl w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl text-emerald-400 font-orbitron">Coral Defense</h2>
          <div className="flex items-center gap-4">
            <span className="text-emerald-400 font-orbitron">Score: {score}</span>
            <button onClick={onClose}>
              <X className="w-6 h-6 text-emerald-400" />
            </button>
          </div>
        </div>

        <div 
          className="w-full h-96 bg-blue-900/50 rounded-lg relative cursor-crosshair"
          onMouseMove={handleMove}
          onClick={handleClick}
        >
          {/* Player */}
          <div 
            className="absolute bottom-0 transform -translate-x-1/2"
            style={{ left: `${position.x}%` }}
          >
            <Fish className="text-emerald-400 w-8 h-8" />
          </div>

          {/* Bullets */}
          {bullets.map(bullet => (
            <div
              key={bullet.id}
              className="absolute w-2 h-2 bg-emerald-400 rounded-full transform -translate-x-1/2"
              style={{ left: `${bullet.x}%`, top: `${bullet.y}%` }}
            />
          ))}

          {/* Enemies */}
          {enemies.map(enemy => (
            <div
              key={enemy.id}
              className="absolute transform -translate-x-1/2"
              style={{ left: `${enemy.x}%`, top: `${enemy.y}%` }}
            >
              <Shell className={`w-6 h-6 ${
                enemy.type === 'fast' ? 'text-red-400' : 'text-yellow-400'
              }`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('games');
  const [balance, setBalance] = useState(10.0);
  const [showGame, setShowGame] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [buildings, setBuildings] = useState({
    coralNursery: 0,
    bioLab: 0,
    currentGenerator: 0,
    neuralHub: 0,
    timeManipulator: 0,
    energyCore: 0
  });

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setBalance(prev => prev + 
        buildings.coralNursery * 0.5 +
        buildings.bioLab * 2 +
        buildings.currentGenerator * 5 +
        buildings.neuralHub * 8 +
        buildings.timeManipulator * 12 +
        buildings.energyCore * 20
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [buildings]);

  const games = [
    {
      icon: Fish,
      title: 'Coral Defense',
      description: 'Protect your reef from invaders! Command your guardian fish and shoot down enemies to earn $WAVE tokens.',
      status: 'active'
    },
    {
      icon: Trophy,
      title: 'Deep Arena',
      description: 'Train your sea creatures and battle other players in the quantum arena. Climb the leaderboard!',
      status: 'locked',
      marketCap: '300K'
    },
    {
      icon: Anchor,
      title: 'Quantum Trench',
      description: 'Build and manage your deep-sea research station in this strategic simulation game.',
      status: 'locked',
      marketCap: '500K'
    },
    {
      icon: Brain,
      title: 'Marine Evolution',
      description: 'Coming soon: Guide the evolution of your marine species through advanced genetic algorithms.',
      status: 'locked',
      marketCap: '1M'
    },
    {
      icon: Waves,
      title: 'Ocean Network',
      description: 'Coming soon: Connect your marine life to the neural network and unlock their true potential.',
      status: 'locked',
      marketCap: '2M'
    },
    {
      icon: Plus,
      title: 'More Games Coming Soon',
      description: 'Stay tuned for more exciting ocean-based gaming experiences!',
      status: 'locked',
      isComingSoon: true
    }
  ];

  const buildingTypes = [
    {
      icon: Home,
      name: 'Coral Nursery',
      description: 'Basic coral growing facility',
      rate: 0.5,
      cost: 10,
      key: 'coralNursery'
    },
    {
      icon: Database,
      name: 'Bio Lab',
      description: 'Research facility for marine genetics',
      rate: 2,
      cost: 50,
      key: 'bioLab'
    },
    {
      icon: Droplets,
      name: 'Current Generator',
      description: 'Generates artificial currents',
      rate: 5,
      cost: 250,
      key: 'currentGenerator'
    },
    {
      icon: Brain,
      name: 'Neural Hub',
      description: 'AI processing center',
      rate: 8,
      cost: 500,
      key: 'neuralHub'
    },
    {
      icon: Clock,
      name: 'Time Manipulator',
      description: 'Accelerates evolution',
      rate: 12,
      cost: 1000,
      key: 'timeManipulator'
    },
    {
      icon: Zap,
      name: 'Energy Core',
      description: 'Powers advanced facilities',
      rate: 20,
      cost: 2000,
      key: 'energyCore'
    }
  ];

  const socialLinks = [
    {
      href: "https://twitter.com/aquaverse",
      icon: Twitter,
      label: "Twitter"
    },
    {
      href: "https://pump.fun",
      icon: ExternalLink,
      label: "pump.fun"
    }
  ];

  const handleGameScore = (points) => {
    setBalance(prev => prev + points);
  };

  const handleBuildingPurchase = (buildingKey, cost) => {
    if (balance >= cost) {
      setBalance(prev => prev - cost);
      setBuildings(prev => ({
        ...prev,
        [buildingKey]: prev[buildingKey] + 1
      }));
    }
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900 via-black to-emerald-900">
      {/* Top Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 bg-black/50 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-emerald-400/50 text-emerald-400 hover:border-emerald-400 transition-all"
              >
                <link.icon className="w-4 h-4" />
                <span className="font-orbitron">{link.label}</span>
              </a>
            ))}
          </div>
          <button className="px-4 py-2 rounded-lg border border-emerald-400/50 text-emerald-400 hover:border-emerald-400 transition-all font-orbitron">
            Connect Wallet
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-8 pt-24">
        {/* Main Title with Glow Effect */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-emerald-400 mb-4 animate-pulse-slow font-orbitron">
            <span className="inline-block transform hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(52,211,153,0.7)]">
              AquaVerse
            </span>
          </h1>
          <p className="text-emerald-400/70 text-lg">
            Experience the future of blockchain gaming with our collection of AI-powered ocean games
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-12">
          <button
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 font-orbitron ${
              activeTab === 'games' 
                ? 'bg-emerald-400 text-black'
                : 'border border-emerald-400/50 text-emerald-400 hover:border-emerald-400'
            }`}
            onClick={() => setActiveTab('games')}
          >
            Games
          </button>
          <button
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 font-chakra ${
              activeTab === 'buildings'
                ? 'bg-emerald-400 text-black'
                : 'border border-emerald-400/50 text-emerald-400 hover:border-emerald-400'
            }`}
            onClick={() => setActiveTab('buildings')}
          >
            Buildings
          </button>
        </div>

        {/* Content */}
        {activeTab === 'games' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {games.map((game, index) => (
              <GameCard
                key={index}
                {...game}
                onClick={() => game.status === 'active' && setShowGame(true)}
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
            {buildingTypes.map((building) => (
              <BuildingCard
                key={building.key}
                {...building}
                owned={buildings[building.key]}
                canAfford={balance >= building.cost}
                onPurchase={() => handleBuildingPurchase(building.key, building.cost)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-emerald-900/50 backdrop-blur-sm p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Shell className="w-5 h-5 text-yellow-400" />
            <span className="text-emerald-400 font-orbitron">Total Earnings</span>
            <span className="text-yellow-400 font-bold font-orbitron">{balance.toFixed(1)} $WAVE</span>
          </div>
          <button 
            onClick={() => setShowModal(true)}
            className="px-4 py-2 bg-emerald-400 text-black rounded-lg hover:bg-emerald-300 transition-all"
          >
            Convert to Token
          </button>
        </div>
      </div>

      {/* Modals */}
      {showGame && (
        <MiniGame
          onClose={() => setShowGame(false)}
          onScore={handleGameScore}
        />
      )}

{showModal && (
  <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
    <div className="bg-blue-950 border border-emerald-400/30 rounded-lg max-w-md w-full p-8">
      <h2 className="text-2xl text-emerald-400 mb-6 font-orbitron">Convert $WAVE to Tokens</h2>
      
      <p className="text-emerald-400/70 mb-8 leading-relaxed">
        Token conversion will be available soon! You'll be able to convert your earned $WAVE to our official tokens at a rate to be announced.
      </p>
      
      <div className="text-lg text-emerald-400 mb-8 font-orbitron">
        Your Balance: {balance.toFixed(1)} $WAVE
      </div>

      <button
        onClick={() => setShowModal(false)}
        className="w-full p-3 rounded-lg bg-emerald-400 text-black hover:bg-emerald-300 transition-all font-orbitron"
      >
        Close
      </button>
    </div>
  </div>
)}
    </div>
  );
};

export default App;
