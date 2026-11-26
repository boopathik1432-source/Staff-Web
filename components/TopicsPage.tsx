"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft, BookOpen, Clock3, Grid2X2, List, MoreVertical,
  Plus, Search, ChevronDown, ChevronRight, Sparkles, Target,
  Boxes, FileUp, Bot, CheckCircle2, ArrowRight, Layers,
  Compass, Upload, TrendingUp, Check, Cpu
} from "lucide-react";
import NavigationShell from "./NavigationShell";

interface TopicItem {
  id: number;
  num: string;
  title: string;
  status: "Completed" | "In Progress" | "Not Started";
  description: string;
  lessons: string;
  duration: string;
  visualType: string;
}

const topicsData: TopicItem[] = [
  {
    id: 1,
    num: "01",
    title: "1. Variables and Expressions",
    status: "Completed",
    description: "Learn about variables, algebraic expressions and their uses.",
    lessons: "3 Lessons",
    duration: "45 min",
    visualType: "variables"
  },
  {
    id: 2,
    num: "02",
    title: "2. Linear Equations",
    status: "In Progress",
    description: "Solve linear equations with one variable and multiple steps.",
    lessons: "4 Lessons",
    duration: "1 hr 20 min",
    visualType: "linear"
  },
  {
    id: 3,
    num: "03",
    title: "3. Inequalities",
    status: "Not Started",
    description: "Understand and solve linear inequalities.",
    lessons: "3 Lessons",
    duration: "50 min",
    visualType: "inequalities"
  },
  {
    id: 4,
    num: "04",
    title: "4. Quadratic Equations",
    status: "Not Started",
    description: "Learn quadratic equations and factorization methods.",
    lessons: "4 Lessons",
    duration: "1 hr 15 min",
    visualType: "quadratic"
  },
  {
    id: 5,
    num: "05",
    title: "5. Polynomials",
    status: "Completed",
    description: "Explore polynomials and their operations.",
    lessons: "3 Lessons",
    duration: "55 min",
    visualType: "polynomials"
  },
  {
    id: 6,
    num: "06",
    title: "6. Functions",
    status: "In Progress",
    description: "Understand functions, domain and range.",
    lessons: "4 Lessons",
    duration: "1 hr 10 min",
    visualType: "functions"
  },
  {
    id: 7,
    num: "07",
    title: "7. Sequences and Series",
    status: "Not Started",
    description: "Learn about arithmetic and geometric sequences.",
    lessons: "3 Lessons",
    duration: "50 min",
    visualType: "sigma"
  },
  {
    id: 8,
    num: "08",
    title: "8. Logarithms",
    status: "Not Started",
    description: "Understand logarithms and their applications.",
    lessons: "4 Lessons",
    duration: "1 hr 5 min",
    visualType: "logarithms"
  }
];

const topicActivities = [
  { title: "Topic 1 completed", sub: "Variables and Expressions", time: "2 hours ago", icon: Check, color: "text-[#10b981]", bg: "bg-[#d1fae5]" },
  { title: "New topic created", sub: "Polynomials", time: "5 hours ago", icon: Plus, color: "text-[#3b82f6]", bg: "bg-[#dbeafe]" },
  { title: "AI content generated", sub: "Linear Equations", time: "1 day ago", icon: Sparkles, color: "text-[#8b5cf6]", bg: "bg-[#ede9fe]" },
  { title: "3D model attached", sub: "Quadratic Equations", time: "1 day ago", icon: Boxes, color: "text-[#06b6d4]", bg: "bg-[#cffafe]" }
];

function TopicVisual({ visualType }: { visualType: string }) {
  switch (visualType) {
    case "variables":
      return (
        <div className="topic-model-canvas">
          <div className="variables-3d relative flex items-center justify-center">
            <span className="text-3xl font-black bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(217,70,239,0.8)]">
              x
            </span>
            <div className="absolute -top-1 -right-3 text-xs font-black text-cyan-400 drop-shadow-[0_0_8px_#22d3ee]">
              y²
            </div>
            <div className="absolute -bottom-1 -left-3 text-xs font-bold text-pink-400 drop-shadow-[0_0_8px_#f472b6]">
              + z
            </div>
          </div>
        </div>
      );

    case "linear":
      return (
        <div className="topic-model-canvas">
          <div className="linear-tablet-3d relative flex items-center justify-center w-16 h-12 rounded-xl bg-gradient-to-br from-cyan-400/90 to-blue-600/90 border border-white shadow-[0_0_18px_rgba(6,182,212,0.85)]">
            <span className="text-sm font-black text-white tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
              a + b
            </span>
            <div className="absolute -inset-1 rounded-xl border border-cyan-300/40 -z-10 animate-pulse" />
          </div>
        </div>
      );

    case "inequalities":
      return (
        <div className="topic-model-canvas">
          <div className="ineq-3d relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-purple-500/20 to-pink-500/30 border border-pink-400/60 shadow-[0_0_16px_rgba(236,72,153,0.6)]">
            <span className="text-2xl font-black text-pink-500 drop-shadow-[0_0_10px_#ec4899]">
              ≠
            </span>
            <span className="absolute text-xs font-bold text-cyan-400 top-1 right-2">≤</span>
            <span className="absolute text-xs font-bold text-purple-400 bottom-1 left-2">≥</span>
          </div>
        </div>
      );

    case "quadratic":
      return (
        <div className="topic-model-canvas">
          <div className="quad-parabola relative flex items-center justify-center w-16 h-14">
            <svg viewBox="0 0 100 80" className="w-16 h-14 drop-shadow-[0_0_12px_rgba(56,189,248,0.9)]">
              <defs>
                <linearGradient id="parabGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="50%" stopColor="#818cf8" />
                  <stop offset="100%" stopColor="#c084fc" />
                </linearGradient>
              </defs>
              <line x1="10" y1="65" x2="90" y2="65" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 2" />
              <line x1="50" y1="10" x2="50" y2="75" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 2" />
              <path d="M15 15 Q50 85 85 15" stroke="url(#parabGrad)" strokeWidth="3" fill="none" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      );

    case "polynomials":
      return (
        <div className="topic-model-canvas">
          <div className="poly-prism relative flex items-center justify-center">
            <svg viewBox="0 0 100 90" className="w-16 h-15 drop-shadow-[0_0_15px_rgba(236,72,153,0.85)]">
              <defs>
                <linearGradient id="polyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f43f5e" />
                  <stop offset="50%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
              <polygon points="50,12 15,75 85,75" fill="none" stroke="url(#polyGrad)" strokeWidth="6" strokeLinejoin="round" />
              <polygon points="50,26 28,68 72,68" fill="url(#polyGrad)" opacity="0.3" />
            </svg>
          </div>
        </div>
      );

    case "functions":
      return (
        <div className="topic-model-canvas">
          <div className="func-cube relative flex items-center justify-center">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-cyan-400/80 to-blue-600/80 border border-white shadow-[0_0_16px_rgba(6,182,212,0.8)] transform -rotate-12 flex items-center justify-center">
              <span className="text-xs font-mono font-black text-white">f(x)</span>
            </div>
          </div>
        </div>
      );

    case "sigma":
      return (
        <div className="topic-model-canvas">
          <div className="sigma-3d relative flex items-center justify-center">
            <span className="text-3xl font-serif font-black bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_14px_rgba(168,85,247,0.85)]">
              ∑
            </span>
          </div>
        </div>
      );

    case "logarithms":
      return (
        <div className="topic-model-canvas">
          <div className="log-chart-3d relative flex items-end justify-center gap-1.5 h-12 w-16">
            <div className="w-2.5 h-4 rounded-t bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
            <div className="w-2.5 h-7 rounded-t bg-blue-500 shadow-[0_0_8px_#3b82f6]" />
            <div className="w-2.5 h-10 rounded-t bg-purple-500 shadow-[0_0_8px_#a855f7]" />
            <div className="w-2.5 h-12 rounded-t bg-pink-500 shadow-[0_0_8px_#ec4899]" />
          </div>
        </div>
      );

    default:
      return <div className="topic-model-canvas"><Boxes className="w-10 h-10 text-cyan-400" /></div>;
  }
}

export default function TopicsPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filtered = topicsData.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase()) ||
                          item.description.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "All Status" || item.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <NavigationShell activePage="Topics" showGreeting>
      <div className="topics-page-container">

        {/* 1. BREADCRUMBS ROW */}
        <nav className="topics-breadcrumbs">
          <Link href="/subjects" className="crumb-back">
            <ArrowLeft size={13} />
            <span>Subjects</span>
          </Link>
          <span className="crumb-sep">&gt;</span>
          <span className="crumb-link">Mathematics</span>
          <span className="crumb-sep">&gt;</span>
          <span className="crumb-link">Units</span>
          <span className="crumb-sep">&gt;</span>
          <span className="crumb-link">Algebra</span>
          <span className="crumb-sep">&gt;</span>
          <span className="crumb-active">Topics</span>
        </nav>

        {/* 2. TOP HERO SECTION: Algebra Unit Hero + Right Unit Overview Card */}
        <section className="topics-hero-layout">
          {/* Main Algebra Hero Banner */}
          <div className="topics-hero-card glass-panel">
            {/* Left 3D Visual Book & Floating Math Symbols */}
            <div className="hero-math-visual">
              <div className="open-book-wrap">
                <div className="book-3d-base">
                  <div className="book-page page-left" />
                  <div className="book-page page-right" />
                  <div className="book-glow" />
                </div>
                {/* Floating Math Symbols around Book */}
                <span className="math-symbol sym-pi">π</span>
                <span className="math-symbol sym-sigma">∑</span>
                <span className="math-symbol sym-alpha">α</span>
                <span className="math-symbol sym-bars" />
              </div>
            </div>

            {/* Middle Copy */}
            <div className="topics-hero-copy">
              <span className="subject-eyebrow">Mathematics</span>
              <div className="flex items-center gap-2.5 my-1">
                <h2 className="unit-title">Algebra</h2>
                <span className="unit-number-pill">Unit 2</span>
              </div>
              <p className="unit-desc">
                Understand variables, expressions, equations and inequalities.
              </p>

              {/* Meta pills */}
              <div className="topics-hero-meta">
                <span className="topic-meta-pill">
                  <Boxes size={12} className="text-cyan-500" /> 5 Topics
                </span>
                <span className="topic-meta-pill">
                  <BookOpen size={12} className="text-purple-500" /> 16 Lessons
                </span>
                <span className="topic-meta-pill status-in-prog">
                  <span className="status-dot green" /> In Progress
                </span>
              </div>
            </div>

            {/* Right Radial Progress: 68% Completed */}
            <div className="hero-progress-right">
              <div className="topic-radial-wrap">
                <div className="topic-radial-circle">
                  <div className="topic-radial-inner">
                    <b>68%</b>
                    <span>Completed</span>
                  </div>
                </div>
              </div>
              <div className="bg-floating-pi">π</div>
            </div>
          </div>

          {/* Right Panel: Unit Overview */}
          <div className="unit-overview-card glass-panel">
            <div className="unit-card-header">
              <BookOpen size={15} className="text-[#0284c7]" />
              <h3 className="unit-card-title">Unit Overview</h3>
            </div>

            <div className="unit-stats-list">
              <div className="unit-stat-row">
                <span className="stat-bullet cyan"><Boxes size={11} /></span>
                <span className="stat-text">Total Topics</span>
                <b className="stat-num">8</b>
              </div>
              <div className="unit-stat-row">
                <span className="stat-bullet green"><CheckCircle2 size={11} /></span>
                <span className="stat-text">Completed</span>
                <b className="stat-num">3</b>
              </div>
              <div className="unit-stat-row">
                <span className="stat-bullet blue"><Compass size={11} /></span>
                <span className="stat-text">In Progress</span>
                <b className="stat-num">1</b>
              </div>
              <div className="unit-stat-row">
                <span className="stat-bullet gray"><Clock3 size={11} /></span>
                <span className="stat-text">Not Started</span>
                <b className="stat-num">4</b>
              </div>
            </div>

            {/* Overall Progress Bar */}
            <div className="overall-progress-bar-wrap">
              <div className="progress-bar-bg">
                <div className="progress-bar-fill" style={{ width: "37%" }} />
              </div>
              <span className="progress-bar-label">37% Overall Progress</span>
            </div>
          </div>
        </section>

        {/* 3. TOOLBAR: Search, Filters & Add New Topic */}
        <div className="topics-toolbar-row">
          <div className="topic-search-wrap">
            <Search size={14} />
            <input
              type="text"
              placeholder="Search topics..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search topics"
            />
          </div>

          <div className="topic-filters-wrap">
            <div className="topic-select-pill">
              <span>All Topics</span>
              <ChevronDown size={13} />
            </div>

            <div className="topic-select-pill">
              <span>All Status</span>
              <ChevronDown size={13} />
            </div>
          </div>

          <div className="topics-toolbar-actions">
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

            <button className="create-topic-btn">
              <Plus size={15} />
              <span>Add New Topic</span>
            </button>
          </div>
        </div>

        {/* 4. MAIN BODY: 8 Topic Cards Grid + Right Sidebar */}
        <section className="topics-main-layout">
          {/* 8 Topic Cards */}
          <div className={`topics-cards-grid ${viewMode === "list" ? "topics-cards-list" : ""}`}>
            {filtered.map((item) => (
              <div key={item.id} className={`topic-card topic-card-${item.visualType} glass-panel`}>
                {/* Card Top: Number 01..08, Status badge & More menu */}
                <div className="topic-card-top">
                  <div className="topic-card-visual">
                    <TopicVisual visualType={item.visualType} />
                  </div>
                  <span className={`topic-status-badge status-${item.status.toLowerCase().replace(" ", "-")}`}>
                    {item.status}
                  </span>
                  <button className="topic-more-btn" aria-label="More options">
                    <MoreVertical size={14} />
                  </button>
                </div>

                <span className="topic-card-num">Topic {item.num}</span>

                <div className="topic-card-info">
                  <h4 className="topic-card-name">{item.title}</h4>
                </div>

                {/* Metadata: Lessons, Duration */}
                <div className="topic-card-meta">
                  <span><Boxes size={11} /> {item.lessons}</span>
                  <span><Clock3 size={11} /> {item.duration}</span>
                </div>

                {/* Action Buttons: View & Manage */}
                <div className="topic-card-actions">
                  <button className="topic-btn-view">View</button>
                  <button className="topic-btn-manage">Manage</button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Sidebar: Quick Actions, Recent Activity & Quote Card */}
          <aside className="topics-side-panel">
            {/* Quick Actions Card */}
            <div className="topic-side-card glass-panel">
              <div className="side-card-title flex items-center gap-2">
                <Sparkles size={14} className="text-cyan-600" />
                <h3>Quick Actions</h3>
              </div>
              <div className="topic-quick-links">
                <button className="topic-quick-item">
                  <Plus size={13} className="text-cyan-500" />
                  <span>Add New Topic</span>
                  <ChevronRight size={13} className="ml-auto text-slate-400" />
                </button>
                <button className="topic-quick-item">
                  <Upload size={13} className="text-blue-500" />
                  <span>Upload Resources</span>
                  <ChevronRight size={13} className="ml-auto text-slate-400" />
                </button>
                <button className="topic-quick-item">
                  <Bot size={13} className="text-purple-500" />
                  <span>Import from AI</span>
                  <ChevronRight size={13} className="ml-auto text-slate-400" />
                </button>
                <button className="topic-quick-item">
                  <FileUp size={13} className="text-cyan-600" />
                  <span>View Unit Details</span>
                  <ChevronRight size={13} className="ml-auto text-slate-400" />
                </button>
              </div>
            </div>

            {/* Recent Activity Card */}
            <div className="topic-side-card glass-panel">
              <div className="side-card-title flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingUp size={14} className="text-[#0284c7]" />
                  <h3>Recent Activity</h3>
                </div>
                <button className="text-[9px] font-semibold text-[#0284c7] hover:underline">View All</button>
              </div>

              <div className="topic-activity-list">
                {topicActivities.map((act) => (
                  <div key={act.title} className="topic-act-row">
                    <div className={`topic-act-icon ${act.color} ${act.bg}`}>
                      <act.icon size={13} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="topic-act-title truncate">{act.title}</p>
                      <p className="topic-act-sub truncate">{act.sub}</p>
                    </div>
                    <span className="topic-act-time">{act.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote of the Day Card */}
            <div className="topic-quote-card glass-panel">
              <div className="quote-orbit-visual">
                <div className="orbit-core-sphere" />
                <div className="orbit-ellipse ring-1" />
                <div className="orbit-ellipse ring-2" />
              </div>
              <div className="quote-body">
                <p className="quote-phrase">
                  “Smaller steps build bigger understanding.”
                </p>
                <span className="quote-sig">— RIXA</span>
              </div>
            </div>
          </aside>
        </section>

        {/* 5. FOOTER */}
        <footer className="dashboard-footer mt-4">
          <span>RIXA AR Smart Learning &nbsp;/&nbsp; Mathematics &nbsp;/&nbsp; Algebra &nbsp;/&nbsp; Topics</span>
          <span className="hidden sm:flex">
            <i></i> System Online &nbsp;|&nbsp; 10:45 AM &nbsp;|&nbsp; 26 Oct 2026
          </span>
        </footer>

      </div>
    </NavigationShell>
  );
}
