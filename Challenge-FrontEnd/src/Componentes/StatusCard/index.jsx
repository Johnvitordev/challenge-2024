import React from 'react';
import './StatusCard.css'; 

const StatusCard = ({ titulo, number, percentage, iconUrl, unidade, theme  }) => {
    // Calcula o perímetro do círculo
    const radius = 35; // Raio do círculo
    const circumference = 2 * Math.PI * radius;

    // Calcula o comprimento da linha de progresso
    const strokeDasharraybase = `${(75 / 100) * circumference } ${circumference}`;
    const strokeDasharraycalc = `${(percentage / 100 * 75 /100 ) * circumference } ${circumference}`;

    return (
        <div className={`status-card ${theme === 'dark' ? 'escuro' : ''}`}>
            <div className="status-icon" style={{ backgroundImage: `url(${iconUrl})` }}></div>
            <p className={`status-title ${theme === 'dark' ? 'escuro' : ''}`}>{titulo}</p>
            <div className="status-circle">
                <svg width="112" height="112" viewBox="0 0 100 100">
                    
                    <circle
                        cx="50"
                        cy="50"
                        r={radius}
                        fill="none"
                        stroke="#848080b7"
                        strokeWidth="8"
                        strokeDasharray={strokeDasharraybase}
                        strokeLinecap='round'
                        transform="rotate(-225 50 50)" // Roda o círculo para iniciar do topo
                    />
                    <circle
                        cx="50"
                        cy="50"
                        r={radius}
                        fill="none"
                        stroke={theme === 'dark' ? "#fff" : '#045FCC'}
                        strokeWidth="8"
                        strokeDasharray={strokeDasharraycalc}
                        strokeLinecap='round'
                        transform="rotate(-225 50 50)" // Roda o círculo para iniciar do topo
                        
                    />
                </svg>
                <span className="status-number">{number}{unidade}</span>
            </div>
        </div>
    );
}

export default StatusCard;