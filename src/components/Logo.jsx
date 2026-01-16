import React from 'react';
import logoImg from '../assets/cbl-logo-ref.png';

const Logo = () => {
    return (
        <div className="logo-container">
            <img src={logoImg} alt="CodeBlazeLabs Logo" className="logo-img" />
            <div className="logo-text">
                {/* <span>Code</span> */}
                <span className="text-bold">CodeBlazeLabs</span>
            </div>
            <style>{`
        .logo-container {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            text-decoration: none;
        }
        .logo-text {
            display: flex;
            flex-direction: column;
            line-height: 1;
            font-family: 'JetBrains Mono', monospace;
            font-size: 1.1rem;
            color: #fff;
        }
        .text-bold {
            font-weight: 800;
        }
        .logo-img {
            width: 40px;
            height: 40px;
            object-fit: contain;
            animation: pulse-fire 3s infinite ease-in-out;
        }
        @keyframes pulse-fire {
          0% { filter: drop-shadow(0 0 0 rgba(255, 69, 0, 0)); transform: scale(1); }
          50% { filter: drop-shadow(0 0 10px rgba(255, 69, 0, 0.5)); transform: scale(1.05); }
          100% { filter: drop-shadow(0 0 0 rgba(255, 69, 0, 0)); transform: scale(1); }
        }
      `}</style>
        </div>
    );
};

export default Logo;
