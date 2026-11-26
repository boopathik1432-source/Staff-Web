"use client";

import React, { useState } from "react";
import {
  Bell, Check, Users, HelpCircle, Sparkles, Target, Calendar,
  AlertTriangle, MessageSquare, FolderUp, CheckCheck,
  Archive, Mail, Clock, ChevronRight, Filter, ChevronDown
} from "lucide-react";
import NavigationShell from "./NavigationShell";

interface NotificationItem {
  id: number;
  title: string;
  description: string;
  time: string;
  tag: string;
  category: "System" | "Student" | "Content" | "Other";
  iconTone: "blue" | "pink" | "teal" | "orange" | "purple" | "red" | "cyan" | "violet";
  icon: React.ComponentType<{ size?: number; className?: string }>;
  unread: boolean;
}

const notificationsData: NotificationItem[] = [
  {
    id: 1,
    title: "New Student Registered",
    description: "Aravind Kumar has been registered successfully. Department: CSE, Year: III.",
    time: "2 hours ago",
    tag: "Student",
    category: "Student",
    iconTone: "blue",
    icon: Users,
    unread: true
  },
  {
    id: 2,
    title: "Quiz Completed",
    description: "Mathematics Quiz - II Year was completed by 12 students.",
    time: "3 hours ago",
    tag: "Quiz",
    category: "Content",
    iconTone: "pink",
    icon: HelpCircle,
    unread: true
  },
  {
    id: 3,
    title: "New AI Content Generated",
    description: "3D Model content for \"Human Heart Anatomy\" has been generated successfully.",
    time: "4 hours ago",
    tag: "AI Content",
    category: "Content",
    iconTone: "teal",
    icon: Sparkles,
    unread: true
  },
  {
    id: 4,
    title: "AR Lesson Published",
    description: "Solar System Quiz AR lesson is now live for Class 10.",
    time: "5 hours ago",
    tag: "AR Lesson",
    category: "Content",
    iconTone: "orange",
    icon: Target,
    unread: true
  },
  {
    id: 5,
    title: "Attendance Updated",
    description: "Today's attendance for Class 10 - 42/48 (88%).",
    time: "6 hours ago",
    tag: "Attendance",
    category: "Student",
    iconTone: "purple",
    icon: Calendar,
    unread: true
  },
  {
    id: 6,
    title: "System Alert",
    description: "Database backup completed successfully.",
    time: "8 hours ago",
    tag: "System",
    category: "System",
    iconTone: "red",
    icon: AlertTriangle,
    unread: true
  },
  {
    id: 7,
    title: "New Message",
    description: "Priya Dharshini sent a message regarding the Physics project.",
    time: "10 hours ago",
    tag: "Communication",
    category: "Other",
    iconTone: "cyan",
    icon: MessageSquare,
    unread: true
  },
  {
    id: 8,
    title: "New File Uploaded",
    description: "3D_Models.zip has been uploaded to Files section.",
    time: "12 hours ago",
    tag: "File",
    category: "Other",
    iconTone: "violet",
    icon: FolderUp,
    unread: true
  }
];

const sideActivities = [
  { title: "Aravind Kumar registered", time: "2 hours ago", tone: "blue", icon: Users },
  { title: "Quiz completed (12 students)", time: "3 hours ago", tone: "pink", icon: HelpCircle },
  { title: "AI content generated", time: "4 hours ago", tone: "teal", icon: Sparkles },
  { title: "AR lesson published", time: "5 hours ago", tone: "orange", icon: Target },
];

export default function NotificationsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [unreadOnly, setUnreadOnly] = useState(true);
  const [filterSystem, setFilterSystem] = useState(false);
  const [filterStudent, setFilterStudent] = useState(false);
  const [filterContent, setFilterContent] = useState(false);
  const [filterOther, setFilterOther] = useState(false);

  const filteredList = notificationsData.filter((item) => {
    if (activeFilter === "Unread" && !item.unread) return false;
    if (activeFilter === "System" && item.category !== "System") return false;
    if (activeFilter === "Student" && item.category !== "Student") return false;
    if (activeFilter === "Content" && item.category !== "Content") return false;
    if (activeFilter === "Other" && item.category !== "Other") return false;
    return true;
  });

  return (
    <NavigationShell
      activePage="Notifications"
      showGreeting
      searchPlaceholder="Search notifications, messages, or keywords..."
      greetingSubtitle="Create · Manage · Share  |  RIXA Notifications"
      notificationCount={8}
    >
      <div className="notif-page-container">

        {/* 1. TOP LAYOUT: Hero Card + Notification Summary Column */}
        <section className="notif-top-layout">
          {/* Main Hero Card */}
          <div className="notif-hero-card glass-panel">
            <div className="notif-hero-visual-left">
              {/* 3D Giant Bell with motion waves */}
              <div className="giant-3d-bell-wrap">
                <div className="giant-bell-glow" />
                <div className="giant-bell-body">
                  <div className="giant-bell-handle" />
                  <div className="giant-bell-dome" />
                  <div className="giant-bell-rim" />
                  <div className="giant-bell-clapper" />
                </div>
                <div className="bell-sound-wave wave-1" />
                <div className="bell-sound-wave wave-2" />
              </div>
            </div>

            <div className="notif-hero-copy">
              <h2 className="notif-hero-title">Notifications</h2>
              <p className="notif-hero-sub">
                Stay updated with the latest activities, alerts and important updates from RIXA AR Smart Learning.
              </p>

              {/* Category Filter Pills on Hero */}
              <div className="notif-hero-pills">
                <button
                  onClick={() => setActiveFilter("All")}
                  className={`notif-pill ${activeFilter === "All" ? "pill-active" : ""}`}
                >
                  All <b className="pill-count">8</b>
                </button>
                <button
                  onClick={() => setActiveFilter("Unread")}
                  className={`notif-pill ${activeFilter === "Unread" ? "pill-active" : ""}`}
                >
                  Unread <b className="pill-count">8</b>
                </button>
                <button
                  onClick={() => setActiveFilter("System")}
                  className={`notif-pill ${activeFilter === "System" ? "pill-active" : ""}`}
                >
                  System <b className="pill-count">3</b>
                </button>
                <button
                  onClick={() => setActiveFilter("Student")}
                  className={`notif-pill ${activeFilter === "Student" ? "pill-active" : ""}`}
                >
                  Student <b className="pill-count">2</b>
                </button>
                <button
                  onClick={() => setActiveFilter("Content")}
                  className={`notif-pill ${activeFilter === "Content" ? "pill-active" : ""}`}
                >
                  Content <b className="pill-count">1</b>
                </button>
                <button
                  onClick={() => setActiveFilter("Other")}
                  className={`notif-pill ${activeFilter === "Other" ? "pill-active" : ""}`}
                >
                  Other <b className="pill-count">2</b>
                </button>
              </div>
            </div>

            {/* 3D Holographic Laptop Visual */}
            <div className="notif-hero-visual-right">
              <div className="holo-laptop-3d">
                <div className="laptop-screen">
                  <div className="laptop-bell-orb">
                    <Bell size={24} className="text-white drop-shadow-[0_0_8px_#38bdf8]" />
                  </div>
                  <div className="laptop-scan-rings" />
                </div>
                <div className="laptop-base" />
              </div>
              {/* Floating ambient envelopes */}
              <div className="floating-envelope env-1">✉</div>
              <div className="floating-envelope env-2">✉</div>
            </div>
          </div>

          {/* Right Column Top: Notification Summary 4-Box Grid */}
          <div className="notif-summary-card glass-panel">
            <div className="flex items-center justify-between mb-2">
              <h3 className="card-heading flex items-center gap-1.5">
                <span className="w-1.5 h-3.5 bg-blue-500 rounded-sm" />
                Notification Summary
              </h3>
              <button className="text-[9px] font-semibold text-[#0284c7] hover:underline">View All</button>
            </div>

            <div className="summary-boxes-grid">
              <div className="summary-box">
                <div className="flex items-center justify-between">
                  <span className="summary-label">Total</span>
                  <div className="summary-icon-orb bg-cyan-50 text-cyan-600">
                    <Bell size={12} />
                  </div>
                </div>
                <strong className="summary-num">8</strong>
                <span className="summary-trend">↑ 2 today</span>
              </div>

              <div className="summary-box">
                <div className="flex items-center justify-between">
                  <span className="summary-label">Unread</span>
                  <div className="summary-icon-orb bg-pink-50 text-pink-600">
                    <Mail size={12} />
                  </div>
                </div>
                <strong className="summary-num">8</strong>
                <span className="summary-trend">↑ 2 today</span>
              </div>

              <div className="summary-box">
                <div className="flex items-center justify-between">
                  <span className="summary-label">Read</span>
                  <div className="summary-icon-orb bg-blue-50 text-blue-600">
                    <Clock size={12} />
                  </div>
                </div>
                <strong className="summary-num">0</strong>
                <span className="summary-sub">0 today</span>
              </div>

              <div className="summary-box">
                <div className="flex items-center justify-between">
                  <span className="summary-label">Archived</span>
                  <div className="summary-icon-orb bg-purple-50 text-purple-600">
                    <Archive size={12} />
                  </div>
                </div>
                <strong className="summary-num">0</strong>
                <span className="summary-sub">0 today</span>
              </div>
            </div>
          </div>
        </section>

        {/* 2. MAIN BOTTOM SECTION: Notifications List (Left/Center) + Right Sidebar (Quick Filters + Activity + Mascot) */}
        <div className="notif-bottom-layout">
          {/* Left/Center: Notifications Feed */}
          <div className="notif-feed-card glass-panel">
            <div className="flex items-center justify-end mb-2">
              <button className="mark-all-btn">
                <CheckCheck size={12} />
                <span>Mark all as read</span>
              </button>
            </div>

            <div className="notif-items-list">
              {filteredList.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div key={item.id} className="notif-row-card glass-panel">
                    <div className={`notif-icon-bubble tone-${item.iconTone}`}>
                      <IconComponent size={14} />
                    </div>

                    <div className="notif-body-copy min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="notif-row-title">{item.title}</h4>
                      </div>
                      <p className="notif-row-desc">{item.description}</p>
                      <span className="notif-row-time">🕒 {item.time}</span>
                    </div>

                    <div className="notif-row-right">
                      <span className={`notif-tag-pill tag-${item.iconTone}`}>
                        {item.tag}
                      </span>
                      {item.unread && <span className="unread-dot" />}
                      <ChevronRight size={13} className="text-slate-300 ml-1" />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pagination Row */}
            <div className="table-pagination-row mt-3">
              <div className="page-buttons ml-auto">
                <button className="page-btn">&lt;</button>
                <button className="page-btn active">1</button>
                <button className="page-btn">2</button>
                <button className="page-btn">3</button>
                <button className="page-btn">&gt;</button>
              </div>
            </div>
          </div>

          {/* Right Sidebar: Quick Filters + Recent Activity + Quote */}
          <aside className="notif-side-column">
            {/* Quick Filters Card */}
            <div className="quick-filters-card glass-panel">
              <div className="flex items-center justify-between mb-2">
                <h4 className="side-heading flex items-center gap-1.5">
                  <Filter size={11} className="text-blue-500" />
                  Quick Filters
                </h4>
                <button className="text-[9px] font-semibold text-[#0284c7] flex items-center">
                  All <ChevronDown size={10} className="ml-0.5" />
                </button>
              </div>

              <div className="filters-checkbox-list">
                <label className="filter-checkbox-row">
                  <input
                    type="checkbox"
                    checked={unreadOnly}
                    onChange={(e) => setUnreadOnly(e.target.checked)}
                    className="notif-check"
                  />
                  <span className="filter-text">Unread Only</span>
                  <b className="filter-badge">8</b>
                </label>

                <label className="filter-checkbox-row">
                  <input
                    type="checkbox"
                    checked={filterSystem}
                    onChange={(e) => setFilterSystem(e.target.checked)}
                    className="notif-check"
                  />
                  <span className="filter-text">System Notifications</span>
                  <b className="filter-badge">3</b>
                </label>

                <label className="filter-checkbox-row">
                  <input
                    type="checkbox"
                    checked={filterStudent}
                    onChange={(e) => setFilterStudent(e.target.checked)}
                    className="notif-check"
                  />
                  <span className="filter-text">Student Notifications</span>
                  <b className="filter-badge">2</b>
                </label>

                <label className="filter-checkbox-row">
                  <input
                    type="checkbox"
                    checked={filterContent}
                    onChange={(e) => setFilterContent(e.target.checked)}
                    className="notif-check"
                  />
                  <span className="filter-text">Content Updates</span>
                  <b className="filter-badge">1</b>
                </label>

                <label className="filter-checkbox-row">
                  <input
                    type="checkbox"
                    checked={filterOther}
                    onChange={(e) => setFilterOther(e.target.checked)}
                    className="notif-check"
                  />
                  <span className="filter-text">Other Notifications</span>
                  <b className="filter-badge">2</b>
                </label>
              </div>
            </div>

            {/* Recent Activity Card */}
            <div className="notif-recent-activity-card glass-panel">
              <div className="flex items-center justify-between mb-2">
                <h4 className="side-heading flex items-center gap-1.5">
                  <span className="text-blue-500">〰</span>
                  Recent Activity
                </h4>
                <button className="text-[9px] font-semibold text-[#0284c7] hover:underline">View All</button>
              </div>

              <div className="notif-activities-list">
                {sideActivities.map((act, i) => {
                  const ActIcon = act.icon;
                  return (
                    <div key={i} className="notif-act-item">
                      <div className={`act-icon-bubble tone-${act.tone}`}>
                        <ActIcon size={11} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="act-title truncate">{act.title}</p>
                      </div>
                      <span className="act-time">{act.time}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* AI Assistant Mascot Quote Card */}
            <div className="notif-ai-quote-card glass-panel">
              <div className="quote-content-flex">
                <p className="notif-quote-text">
                  “Small notifications create big changes in learning journeys.”
                </p>
                <span className="notif-quote-author">— RIXA</span>
              </div>

              <div className="notif-robot-mascot">
                <div className="mascot-face-screen" />
              </div>
            </div>
          </aside>
        </div>

        {/* Footer */}
        <footer className="dashboard-footer mt-2">
          <span>RIXA AR Smart Learning &nbsp;|&nbsp; Notifications</span>
          <span className="hidden sm:flex">
            <i></i> System Online &nbsp;|&nbsp; 10:45 AM &nbsp;|&nbsp; 26 Oct 2026
          </span>
        </footer>

      </div>
    </NavigationShell>
  );
}

