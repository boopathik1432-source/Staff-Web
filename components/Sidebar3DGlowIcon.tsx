import React from "react";

export type SidebarIconKey =
  | "Dashboard"
  | "Subjects"
  | "Units"
  | "Topics"
  | "AI Content"
  | "AR Lessons"
  | "Quiz Builder"
  | "QR Generator"
  | "Students"
  | "Analytics"
  | "Notifications"
  | "Settings";

interface GlowIconProps {
  name: SidebarIconKey;
  active?: boolean;
}

export default function Sidebar3DGlowIcon({ name, active = false }: GlowIconProps) {
  switch (name) {
    case "Dashboard":
      return (
        <span className={`sidebar-3d-orb ${active ? "active" : ""}`}>
          <svg viewBox="0 0 24 24" className="sidebar-3d-svg">
            <defs>
              <linearGradient id="db-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#2563eb" />
              </linearGradient>
              <filter id="db-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#38bdf8" floodOpacity="0.8" />
              </filter>
            </defs>
            <path
              d="M3 10.5L12 3l9 7.5V20a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 13 20v-4.5h-2V20A1.5 1.5 0 0 1 9.5 21.5h-5A1.5 1.5 0 0 1 3 20v-9.5z"
              fill="url(#db-grad)"
              filter="url(#db-glow)"
            />
          </svg>
        </span>
      );

    case "Subjects":
      return (
        <span className={`sidebar-3d-orb ${active ? "active" : ""}`}>
          <svg viewBox="0 0 24 24" className="sidebar-3d-svg">
            <defs>
              <linearGradient id="subj-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>
              <filter id="subj-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#38bdf8" floodOpacity="0.8" />
              </filter>
            </defs>
            <path
              d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20V4.5A2.5 2.5 0 0 0 17.5 2h-11A2.5 2.5 0 0 0 4 4.5v15z"
              fill="none"
              stroke="url(#subj-grad)"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#subj-glow)"
            />
            <path
              d="M7 6h8M7 9h6"
              stroke="#38bdf8"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </span>
      );

    case "Units":
      return (
        <span className={`sidebar-3d-orb ${active ? "active" : ""}`}>
          {/* Isometric 3D Stacked Cubes */}
          <svg viewBox="0 0 24 24" className="sidebar-3d-svg">
            <defs>
              <linearGradient id="cube-top" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#67e8f9" />
                <stop offset="100%" stopColor="#38bdf8" />
              </linearGradient>
              <linearGradient id="cube-left" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0284c7" />
                <stop offset="100%" stopColor="#0369a1" />
              </linearGradient>
              <linearGradient id="cube-right" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>
              <filter id="cube-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#38bdf8" floodOpacity="0.85" />
              </filter>
            </defs>
            {/* Top cube */}
            <g transform="translate(0, -2)" filter="url(#cube-glow)">
              <polygon points="12,2 17,5 12,8 7,5" fill="url(#cube-top)" />
              <polygon points="7,5 12,8 12,13 7,10" fill="url(#cube-left)" />
              <polygon points="12,8 17,5 17,10 12,13" fill="url(#cube-right)" />
            </g>
            {/* Bottom-left cube */}
            <g transform="translate(-4, 5)">
              <polygon points="9,6 14,9 9,12 4,9" fill="url(#cube-top)" />
              <polygon points="4,9 9,12 9,16 4,13" fill="url(#cube-left)" />
              <polygon points="9,12 14,9 14,13 9,16" fill="url(#cube-right)" />
            </g>
            {/* Bottom-right cube */}
            <g transform="translate(4, 5)">
              <polygon points="15,6 20,9 15,12 10,9" fill="url(#cube-top)" />
              <polygon points="10,9 15,12 15,16 10,13" fill="url(#cube-left)" />
              <polygon points="15,12 20,9 20,13 15,16" fill="url(#cube-right)" />
            </g>
          </svg>
        </span>
      );

    case "Topics":
      return (
        <span className={`sidebar-3d-orb ${active ? "active" : ""}`}>
          {/* Glowing Network Nodes */}
          <svg viewBox="0 0 24 24" className="sidebar-3d-svg">
            <defs>
              <radialGradient id="node-center" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#67e8f9" />
                <stop offset="100%" stopColor="#0284c7" />
              </radialGradient>
              <filter id="node-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#38bdf8" floodOpacity="0.9" />
              </filter>
            </defs>
            <line x1="12" y1="12" x2="6" y2="6" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
            <line x1="12" y1="12" x2="18" y2="6" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
            <line x1="12" y1="12" x2="6" y2="18" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
            <line x1="12" y1="12" x2="18" y2="18" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
            
            <circle cx="12" cy="12" r="4" fill="url(#node-center)" filter="url(#node-glow)" />
            <circle cx="6" cy="6" r="2.5" fill="#38bdf8" filter="url(#node-glow)" />
            <circle cx="18" cy="6" r="2.5" fill="#38bdf8" filter="url(#node-glow)" />
            <circle cx="6" cy="18" r="2.5" fill="#38bdf8" filter="url(#node-glow)" />
            <circle cx="18" cy="18" r="2.5" fill="#38bdf8" filter="url(#node-glow)" />
          </svg>
        </span>
      );

    case "AI Content":
      return (
        <span className={`sidebar-3d-orb ${active ? "active" : ""}`}>
          {/* Glowing Brain / AI Circuit */}
          <svg viewBox="0 0 24 24" className="sidebar-3d-svg">
            <defs>
              <linearGradient id="ai-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#2563eb" />
              </linearGradient>
              <filter id="ai-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#38bdf8" floodOpacity="0.85" />
              </filter>
            </defs>
            <rect x="5" y="5" width="14" height="14" rx="3.5" fill="url(#ai-grad)" filter="url(#ai-glow)" />
            <circle cx="12" cy="12" r="3" fill="#ffffff" />
            <circle cx="12" cy="12" r="1.5" fill="#0284c7" />
            <path d="M12 2v3M12 19v3M2 12h3M19 12h3M7 2v3M17 2v3M7 19v3M17 19v3" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </span>
      );

    case "AR Lessons":
      return (
        <span className={`sidebar-3d-orb ${active ? "active" : ""}`}>
          {/* 3D Wireframe AR Cube */}
          <svg viewBox="0 0 24 24" className="sidebar-3d-svg">
            <defs>
              <linearGradient id="ar-cube" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#67e8f9" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>
              <filter id="ar-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#38bdf8" floodOpacity="0.9" />
              </filter>
            </defs>
            {/* Isometric Outer Cube */}
            <polygon points="12,2 21,7 12,12 3,7" fill="url(#ar-cube)" opacity="0.9" filter="url(#ar-glow)" />
            <polygon points="3,7 12,12 12,22 3,17" fill="#0284c7" opacity="0.95" />
            <polygon points="12,12 21,7 21,17 12,22" fill="#0369a1" opacity="0.85" />
            {/* Inner Core Accent */}
            <circle cx="12" cy="12" r="2.5" fill="#ffffff" filter="url(#ar-glow)" />
          </svg>
        </span>
      );

    case "Quiz Builder":
      return (
        <span className={`sidebar-3d-orb ${active ? "active" : ""}`}>
          {/* 3D Quiz Clipboard with Glowing Checkmark */}
          <svg viewBox="0 0 24 24" className="sidebar-3d-svg">
            <defs>
              <linearGradient id="quiz-board" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>
              <filter id="quiz-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#38bdf8" floodOpacity="0.85" />
              </filter>
            </defs>
            <rect x="4" y="4" width="16" height="18" rx="3" fill="url(#quiz-board)" filter="url(#quiz-glow)" />
            <rect x="9" y="2" width="6" height="3" rx="1.5" fill="#ffffff" />
            <path d="M8 9h8M8 12h5" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
            <circle cx="15" cy="16" r="3.5" fill="#ffffff" />
            <path d="M13.8 16l1 1 1.7-2" stroke="#0284c7" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      );

    case "QR Generator":
      return (
        <span className={`sidebar-3d-orb ${active ? "active" : ""}`}>
          {/* 3D Holographic QR Matrix */}
          <svg viewBox="0 0 24 24" className="sidebar-3d-svg">
            <defs>
              <linearGradient id="qr-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>
              <filter id="qr-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#38bdf8" floodOpacity="0.85" />
              </filter>
            </defs>
            {/* 3 Corners */}
            <rect x="3" y="3" width="7" height="7" rx="1.5" fill="none" stroke="url(#qr-grad)" strokeWidth="2" filter="url(#qr-glow)" />
            <rect x="5" y="5" width="3" height="3" rx="0.5" fill="#38bdf8" />
            
            <rect x="14" y="3" width="7" height="7" rx="1.5" fill="none" stroke="url(#qr-grad)" strokeWidth="2" filter="url(#qr-glow)" />
            <rect x="16" y="5" width="3" height="3" rx="0.5" fill="#38bdf8" />
            
            <rect x="3" y="14" width="7" height="7" rx="1.5" fill="none" stroke="url(#qr-grad)" strokeWidth="2" filter="url(#qr-glow)" />
            <rect x="5" y="16" width="3" height="3" rx="0.5" fill="#38bdf8" />
            
            <rect x="14" y="14" width="3" height="3" fill="#38bdf8" rx="0.5" />
            <rect x="18" y="14" width="3" height="3" fill="#38bdf8" rx="0.5" />
            <rect x="14" y="18" width="7" height="3" fill="#38bdf8" rx="0.5" />
          </svg>
        </span>
      );

    case "Students":
      return (
        <span className={`sidebar-3d-orb ${active ? "active" : ""}`}>
          {/* 3D Student / Users Cluster */}
          <svg viewBox="0 0 24 24" className="sidebar-3d-svg">
            <defs>
              <linearGradient id="stud-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#67e8f9" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>
              <filter id="stud-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#38bdf8" floodOpacity="0.85" />
              </filter>
            </defs>
            {/* Center User */}
            <circle cx="12" cy="7" r="3.5" fill="url(#stud-grad)" filter="url(#stud-glow)" />
            <path d="M6 19a6 6 0 0 1 12 0v1H6v-1z" fill="url(#stud-grad)" filter="url(#stud-glow)" />
            {/* Side User Silhouette */}
            <circle cx="19" cy="8" r="2.5" fill="#38bdf8" opacity="0.8" />
            <path d="M19 14a4 4 0 0 1 3 4v1h-3v-1a4 4 0 0 0-1-2.8" fill="#38bdf8" opacity="0.8" />
          </svg>
        </span>
      );

    case "Analytics":
      return (
        <span className={`sidebar-3d-orb ${active ? "active" : ""}`}>
          {/* 3D Ascending Analytics Chart Bars */}
          <svg viewBox="0 0 24 24" className="sidebar-3d-svg">
            <defs>
              <linearGradient id="bar-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>
              <filter id="chart-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#38bdf8" floodOpacity="0.85" />
              </filter>
            </defs>
            <rect x="3" y="14" width="4.5" height="7" rx="1.5" fill="url(#bar-grad)" filter="url(#chart-glow)" />
            <rect x="9.75" y="9" width="4.5" height="12" rx="1.5" fill="url(#bar-grad)" filter="url(#chart-glow)" />
            <rect x="16.5" y="4" width="4.5" height="17" rx="1.5" fill="url(#bar-grad)" filter="url(#chart-glow)" />
            <path d="M4 11l6-5 5 3 6-6" fill="none" stroke="#67e8f9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      );

    case "Notifications":
      return (
        <span className={`sidebar-3d-orb ${active ? "active" : ""}`}>
          {/* 3D Glowing Bell with Ring Waves */}
          <svg viewBox="0 0 24 24" className="sidebar-3d-svg">
            <defs>
              <linearGradient id="bell-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>
              <filter id="bell-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#38bdf8" floodOpacity="0.9" />
              </filter>
            </defs>
            <path
              d="M12 2a3 3 0 0 0-3 3v.68C6.67 6.8 5 9.17 5 12v4l-2 2v1h18v-1l-2-2v-4c0-2.83-1.67-5.2-4-6.32V5a3 3 0 0 0-3-3z"
              fill="url(#bell-grad)"
              filter="url(#bell-glow)"
            />
            <path d="M10 20a2 2 0 0 0 4 0" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" />
            <circle cx="18" cy="5" r="2" fill="#f43f5e" />
          </svg>
        </span>
      );

    case "Settings":
      return (
        <span className={`sidebar-3d-orb ${active ? "active" : ""}`}>
          {/* 3D Cyan Gear */}
          <svg viewBox="0 0 24 24" className="sidebar-3d-svg">
            <defs>
              <linearGradient id="gear-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#67e8f9" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>
              <filter id="gear-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#38bdf8" floodOpacity="0.9" />
              </filter>
            </defs>
            <path
              d="M19.4 13a7.8 7.8 0 0 0 .05-1 7.8 7.8 0 0 0-.05-1l2.1-1.6a.5.5 0 0 0 .12-.64l-2-3.46a.5.5 0 0 0-.6-.22l-2.48 1a7.6 7.6 0 0 0-1.74-1l-.38-2.65A.5.5 0 0 0 13.92 2h-3.84a.5.5 0 0 0-.49.42l-.38 2.65a7.6 7.6 0 0 0-1.74 1l-2.48-1a.5.5 0 0 0-.6.22l-2 3.46a.5.5 0 0 0 .12.64L4.6 11a7.8 7.8 0 0 0-.05 1 7.8 7.8 0 0 0 .05 1l-2.1 1.6a.5.5 0 0 0-.12.64l2 3.46a.5.5 0 0 0 .6.22l2.48-1a7.6 7.6 0 0 0 1.74 1l.38 2.65a.5.5 0 0 0 .49.42h3.84a.5.5 0 0 0 .49-.42l.38-2.65a7.6 7.6 0 0 0 1.74-1l2.48 1a.5.5 0 0 0 .6-.22l2-3.46a.5.5 0 0 0-.12-.64L19.4 13z"
              fill="url(#gear-grad)"
              filter="url(#gear-glow)"
            />
            <circle cx="12" cy="12" r="3.5" fill="#ffffff" />
            <circle cx="12" cy="12" r="1.5" fill="#0284c7" />
          </svg>
        </span>
      );

    default:
      return null;
  }
}
