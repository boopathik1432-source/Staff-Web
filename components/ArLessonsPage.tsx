"use client";

import React, { useState } from "react";
import {
  Boxes, BookOpen, Clock3, Eye, Grid2X2, List, MoreVertical,
  Plus, Search, ChevronDown, ChevronRight, Sparkles,
  Upload, FileUp, BarChart3, Quote, Palette
} from "lucide-react";
import NavigationShell from "./NavigationShell";

interface ArLessonItem {
  id: number;
  title: string;
  subject: string;
  status: "Published" | "Draft" | "In Progress" | "Scheduled";
  description: string;
  duration: string;
  views: number;
  type: string;
  theme: string;
  visualType: string;
}

const lessonsData: ArLessonItem[] = [
  {
    id: 1,
    title: "1. Human Heart Anatomy",
    subject: "Biology",
    status: "Published",
    description: "Explore the 3D model of human heart and understand its structure and function.",
    duration: "8 min",
    views: 102,
    type: "3D Model",
    theme: "cyan",
    visualType: "heart"
  },
  {
    id: 2,
    title: "2. Solar System",
    subject: "Physics",
    status: "Draft",
    description: "Discover the planets, moons and solar system in 3D.",
    duration: "10 min",
    views: 88,
    type: "3D Model",
    theme: "orange",
    visualType: "solar"
  },
  {
    id: 3,
    title: "3. Atomic Structure",
    subject: "Chemistry",
    status: "Published",
    description: "Explore atoms, electrons and molecular structures in 3D.",
    duration: "7 min",
    views: 64,
    type: "3D Model",
    theme: "cyan",
    visualType: "atom"
  },
  {
    id: 4,
    title: "4. 3D Geometry Shapes",
    subject: "Mathematics",
    status: "In Progress",
    description: "Visualize 3D shapes, angles and geometric properties.",
    duration: "6 min",
    views: 48,
    type: "3D Model",
    theme: "blue",
    visualType: "geometry"
  },
  {
    id: 5,
    title: "5. Computer Components",
    subject: "Technology",
    status: "Published",
    description: "Explore internal parts of a computer in 3D with labels.",
    duration: "9 min",
    views: 72,
    type: "3D Model",
    theme: "cyan",
    visualType: "computer"
  },
  {
    id: 6,
    title: "6. Earth Layers",
    subject: "Geography",
    status: "Published",
    description: "Explore the layers of the Earth with 3D animation.",
    duration: "8 min",
    views: 59,
    type: "3D Model",
    theme: "teal",
    visualType: "earth"
  },
  {
    id: 7,
    title: "7. Parts of Speech",
    subject: "Language",
    status: "Scheduled",
    description: "Learn parts of speech with interactive 3D examples.",
    duration: "7 min",
    views: 41,
    type: "3D Model",
    theme: "pink",
    visualType: "speech"
  },
  {
    id: 8,
    title: "8. 3D Art Gallery",
    subject: "Arts & Design",
    status: "Published",
    description: "Explore famous art pieces in 3D interactive view.",
    duration: "9 min",
    views: 33,
    type: "3D Model",
    theme: "cyan",
    visualType: "sculpture"
  }
];

const recentActivity = [
  { title: "Human Heart Anatomy", action: "Published", time: "2 hours ago", color: "text-[#0ea5e9]", bg: "bg-[#e0f2fe]" },
  { title: "Solar System", action: "Edited", time: "4 hours ago", color: "text-[#f59e0b]", bg: "bg-[#fef3c7]" },
  { title: "Atomic Structure", action: "Created", time: "6 hours ago", color: "text-[#6366f1]", bg: "bg-[#e0e7ff]" },
  { title: "3D Geometry Shapes", action: "Published", time: "8 hours ago", color: "text-[#ec4899]", bg: "bg-[#fce7f3]" },
  { title: "Computer Components", action: "Viewed", time: "12 hours ago", color: "text-[#06b6d4]", bg: "bg-[#cffafe]" }
];

function CardVisual({ visualType }: { visualType: string }) {
  switch (visualType) {
    case "heart":
      return (
        <div className="ar-model-canvas">
          <div className="heart-3d-wrap relative flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-red-400/25 blur-md" />
            <svg viewBox="0 0 100 100" className="w-16 h-16 relative z-10 drop-shadow-[0_0_18px_rgba(239,68,68,0.95)]">
              <defs>
                <linearGradient id="heartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ff1744" />
                  <stop offset="40%" stopColor="#d50000" />
                  <stop offset="100%" stopColor="#880e4f" />
                </linearGradient>
                <linearGradient id="vesselBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00b0ff" />
                  <stop offset="100%" stopColor="#004e92" />
                </linearGradient>
              </defs>
              <path d="M42 32 C38 18 48 12 56 12 C62 12 68 18 64 30" stroke="url(#vesselBlue)" strokeWidth="8" fill="none" strokeLinecap="round" />
              <path d="M52 28 C56 14 68 12 76 16 C82 20 80 28 72 34" stroke="#ff3d00" strokeWidth="6" fill="none" strokeLinecap="round" />
              <path d="M50 82 C22 60 14 46 20 30 C26 14 44 18 50 28 C56 18 74 14 80 30 C86 46 78 60 50 82 Z" fill="url(#heartGrad)" />
              <path d="M46 36 Q38 52 35 66" stroke="#ff80ab" strokeWidth="2.5" fill="none" opacity="0.85" strokeLinecap="round" />
              <path d="M54 36 Q62 50 64 68" stroke="#ff4081" strokeWidth="2" fill="none" opacity="0.8" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      );

    case "solar":
      return (
        <div className="ar-model-canvas">
          <div className="solar-3d-wrap">
            <div className="sun-sphere" />
            <div className="orbit-ring orbit-ring-1">
              <span className="planet-dot planet-1" />
            </div>
            <div className="orbit-ring orbit-ring-2">
              <span className="planet-dot planet-2" />
            </div>
            <div className="orbit-ring orbit-ring-3">
              <span className="planet-dot planet-3" />
            </div>
          </div>
        </div>
      );

    case "atom":
      return (
        <div className="ar-model-canvas">
          <div className="atom-3d-wrap">
            <div className="atom-core" />
            <div className="electron-orbit orbit-a">
              <span className="electron-dot" />
            </div>
            <div className="electron-orbit orbit-b">
              <span className="electron-dot" />
            </div>
            <div className="electron-orbit orbit-c">
              <span className="electron-dot" />
            </div>
          </div>
        </div>
      );

    case "geometry":
      return (
        <div className="ar-model-canvas">
          <div className="geometry-3d-wrap relative flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-16 h-16 drop-shadow-[0_0_15px_rgba(168,85,247,0.85)]">
              <defs>
                <linearGradient id="geomCyan" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#0369a1" />
                </linearGradient>
                <linearGradient id="geomPurple" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#c084fc" />
                  <stop offset="100%" stopColor="#6b21a8" />
                </linearGradient>
                <linearGradient id="geomPink" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f472b6" />
                  <stop offset="100%" stopColor="#be185d" />
                </linearGradient>
              </defs>
              <polygon points="50,15 20,78 50,85" fill="url(#geomPurple)" opacity="0.9" />
              <polygon points="50,15 80,72 50,85" fill="url(#geomPink)" opacity="0.85" />
              <polygon points="30,35 10,75 35,80" fill="url(#geomCyan)" opacity="0.75" />
            </svg>
          </div>
        </div>
      );

    case "computer":
      return (
        <div className="ar-model-canvas">
          <div className="pc-3d-wrap">
            <div className="pc-chassis">
              <div className="pc-gpu-light" />
              <div className="pc-fan-glow" />
            </div>
          </div>
        </div>
      );

    case "earth":
      return (
        <div className="ar-model-canvas">
          <div className="earth-cutaway-wrap">
            <div className="earth-mantle" />
            <div className="earth-inner-core" />
          </div>
        </div>
      );

    case "speech":
      return (
        <div className="ar-model-canvas">
          <div className="speech-bubbles-wrap">
            <span className="speech-pill sp-noun">Noun</span>
            <span className="speech-pill sp-verb">Verb</span>
            <span className="speech-pill sp-adj">Adjective</span>
            <span className="speech-pill sp-adv">Adverb</span>
          </div>
        </div>
      );

    case "sculpture":
      return (
        <div className="ar-model-canvas">
          <div className="statue-bust flex flex-col items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-16 h-16 drop-shadow-[0_0_16px_rgba(56,189,248,0.9)]">
              <defs>
                <linearGradient id="sculptureGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#e0f2fe" />
                  <stop offset="45%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#1e40af" />
                </linearGradient>
              </defs>
              <path d="M50 18 C40 18 36 24 36 34 C36 44 42 48 44 54 L40 64 L30 68 L25 82 L75 82 L70 68 L60 64 L56 54 C58 48 64 44 64 34 C64 24 60 18 50 18 Z" fill="url(#sculptureGrad)" />
              <ellipse cx="50" cy="84" rx="26" ry="5" fill="#0284c7" opacity="0.8" />
            </svg>
          </div>
        </div>
      );

    default:
      return <div className="ar-model-canvas"><Boxes className="w-12 h-12 text-cyan-400" /></div>;
  }
}

export default function ArLessonsPage() {
  const [search, setSearch] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("All Subjects");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filtered = lessonsData.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase()) ||
                          item.description.toLowerCase().includes(search.toLowerCase());
    const matchesSubject = selectedSubject === "All Subjects" || item.subject === selectedSubject;
    return matchesSearch && matchesSubject;
  });

  return (
    <NavigationShell activePage="AR Lessons" showGreeting>
      <div className="ar-page-container">

        {/* TOOLBAR: Search, Filters, View Mode & Create Lesson Button */}
        <div className="ar-toolbar-row">
          <div className="ar-search-wrap">
            <Search size={14} />
            <input
              type="text"
              placeholder="Search AR lessons..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search AR lessons"
            />
          </div>

          <div className="ar-filter-group">
            <div className="ar-select-pill">
              <span>{selectedSubject}</span>
              <ChevronDown size={13} />
            </div>

            <div className="ar-select-pill">
              <span>All Units</span>
              <ChevronDown size={13} />
            </div>

            <div className="ar-select-pill">
              <span>All Topics</span>
              <ChevronDown size={13} />
            </div>
          </div>

          <div className="ar-toolbar-actions">
            <div className="view-toggle">
              <button
                onClick={() => setViewMode("grid")}
                className={viewMode === "grid" ? "view-active" : ""}
                aria-label="Grid view"
              >
                <Grid2X2 size={15} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={viewMode === "list" ? "view-active" : ""}
                aria-label="List view"
              >
                <List size={15} />
              </button>
            </div>

            <button className="create-lesson-btn">
              <Plus size={15} />
              <span>Create AR Lesson</span>
            </button>
          </div>
        </div>

        {/* MAIN BODY: 8 AR Lesson Cards + Right Sidebar (Recent Activity + Quote) */}
        <section className="ar-main-layout">
          {/* 8 AR Lesson Cards */}
          <div className={`ar-cards-grid ${viewMode === "list" ? "ar-cards-list" : ""}`}>
            {filtered.map((item) => (
              <div
                key={item.id}
                className="ar-lesson-card glass-panel"
              >
                {/* Card Top: Subject pill, Status badge & More menu */}
                <div className="ar-card-top-bar">
                  <span className={`ar-subject-pill pill-${item.theme}`}>{item.subject}</span>
                  <span className={`ar-status-badge status-${item.status.toLowerCase().replace(" ", "-")}`}>
                    {item.status}
                  </span>
                  <button className="ar-more-btn" aria-label="More options">
                    <MoreVertical size={14} />
                  </button>
                </div>

                {/* 3D Visual Model Stage */}
                <div className="ar-card-stage">
                  <CardVisual visualType={item.visualType} />
                </div>

                {/* Title & Description */}
                <div className="ar-card-info">
                  <h4 className="ar-card-name">{item.title}</h4>
                  <p className="ar-card-desc">{item.description}</p>
                </div>

                {/* Metadata Row: 3D Model, Duration, Views */}
                <div className="ar-card-meta">
                  <span><Boxes size={11} /> {item.type}</span>
                  <span><Clock3 size={11} /> {item.duration}</span>
                  <span><Eye size={11} /> {item.views} views</span>
                </div>

                {/* Action Buttons: View & Edit */}
                <div className="ar-card-actions">
                  <button className="ar-btn-view">View</button>
                  <button className="ar-btn-edit">Edit</button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side Column: Recent Activity & Quote Card */}
          <aside className="ar-side-column">
            {/* Recent Activity Card */}
            <div className="ar-activity-card glass-panel">
              <div className="ar-card-header flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <h3 className="ar-card-title">Recent Activity</h3>
                </div>
                <button className="text-[9px] font-semibold text-[#0284c7] hover:underline">View All</button>
              </div>

              <div className="ar-activity-list">
                {recentActivity.map((act) => {
                  const orbTone = act.color.includes("0ea5e9") ? "cyan" :
                                  act.color.includes("f59e0b") ? "orange" :
                                  act.color.includes("6366f1") ? "purple" :
                                  act.color.includes("ec4899") ? "pink" : "teal";
                  return (
                    <div key={act.title} className="ar-activity-row">
                      <div className={`glow-sphere-orb ${orbTone} mini-orb`}>
                        <Boxes size={12} className="relative z-10" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="activity-title truncate">{act.title}</p>
                        <p className="activity-meta">{act.action} · {act.time}</p>
                      </div>
                      <ChevronRight size={13} className="text-slate-400 shrink-0" />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quote of the Day Card with Robot Mascot */}
            <div className="ar-quote-card glass-panel">
              <div className="quote-content">
                <Quote size={20} className="text-cyan-500/70 mb-1" />
                <p className="quote-text">
                  “Education is not the filling of a pail, but the lighting of a fire.”
                </p>
                <p className="quote-author">— William Butler Yeats</p>
              </div>

              <div className="quote-mascot">
                <div className="robot-3d-avatar">
                  <div className="avatar-eyes-glow" />
                </div>
              </div>
            </div>
          </aside>
        </section>

        {/* BOTTOM SECTION: Quick Actions + Featured AR Lesson Builder */}
        <section className="ar-bottom-layout">
          {/* Quick Actions (4-grid items) */}
          <div className="ar-quick-actions-box glass-panel">
            <h3 className="quick-actions-heading">Quick Actions</h3>
            <div className="ar-quick-grid">
              <button className="ar-quick-btn">
                <div className="glow-sphere-orb cyan mini-orb">
                  <Upload size={14} className="relative z-10" />
                </div>
                <div className="text-left">
                  <strong className="block text-[10px] font-bold text-[#1e3a8a]">Add 3D Model</strong>
                  <span className="block text-[8px] text-[#64748b]">Upload GLB/GLTF</span>
                </div>
              </button>

              <button className="ar-quick-btn">
                <div className="glow-sphere-orb purple mini-orb">
                  <Sparkles size={14} className="relative z-10" />
                </div>
                <div className="text-left">
                  <strong className="block text-[10px] font-bold text-[#1e3a8a]">Create Lesson</strong>
                  <span className="block text-[8px] text-[#64748b]">Build new AR lesson</span>
                </div>
              </button>

              <button className="ar-quick-btn">
                <div className="glow-sphere-orb blue mini-orb">
                  <FileUp size={14} className="relative z-10" />
                </div>
                <div className="text-left">
                  <strong className="block text-[10px] font-bold text-[#1e3a8a]">Import Resource</strong>
                  <span className="block text-[8px] text-[#64748b]">From existing file</span>
                </div>
              </button>

              <button className="ar-quick-btn">
                <div className="glow-sphere-orb teal mini-orb">
                  <BarChart3 size={14} className="relative z-10" />
                </div>
                <div className="text-left">
                  <strong className="block text-[10px] font-bold text-[#1e3a8a]">View Analytics</strong>
                  <span className="block text-[8px] text-[#64748b]">Lesson performance</span>
                </div>
              </button>
            </div>
          </div>

          {/* Featured AR Lesson Builder Banner */}
          <div className="ar-builder-banner glass-panel">
            <div className="builder-copy">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-[10px] font-extrabold text-[#0284c7]">Featured</span>
                <span className="bg-[#10b981] text-white text-[8px] font-bold px-1.5 py-0.2 rounded-full">NEW</span>
              </div>
              <h3 className="builder-title">AR Lesson Builder</h3>
              <p className="builder-desc">
                Create interactive AR lessons with 3D models, interactive elements and AI assistance.
              </p>
              <button className="builder-cta-btn">
                <span>Start Building</span>
              </button>
            </div>

            <div className="builder-visual">
              <div className="holographic-platform">
                <div className="platform-grid" />
                <div className="platform-dino-hologram" />
              </div>
            </div>
          </div>
        </section>

        {/* Page Footer */}
        <footer className="dashboard-footer mt-4">
          <span>RIXA AR Smart Learning &nbsp;|&nbsp; AR Lessons</span>
          <span className="hidden sm:flex">
            <i></i> System Online &nbsp;|&nbsp; 10:45 AM &nbsp;|&nbsp; 26 Oct 2026
          </span>
        </footer>

      </div>
    </NavigationShell>
  );
}
