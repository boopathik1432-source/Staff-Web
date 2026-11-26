"use client";

import React, { useState } from "react";
import {
  QrCode, BookOpen, Boxes, Network, Target, HelpCircle, Link as LinkIcon,
  Sparkles, Download, Printer, Check, ChevronDown, Smartphone, Layers,
  BarChart3, TrendingUp, MoreVertical, Edit2, Eye, ExternalLink, Zap
} from "lucide-react";
import NavigationShell from "./NavigationShell";

const contentTypes = [
  { id: "subject", title: "Subject", desc: "Share subject learning resources", icon: BookOpen, color: "text-blue-500", bg: "bg-blue-50" },
  { id: "unit", title: "Unit", desc: "Share unit content", icon: Boxes, color: "text-cyan-500", bg: "bg-cyan-50" },
  { id: "topic", title: "Topic", desc: "Share topic lessons", icon: Network, color: "text-purple-500", bg: "bg-purple-50" },
  { id: "ar-lesson", title: "AR Lesson", desc: "Launch AR experience", icon: Target, color: "text-indigo-500", bg: "bg-indigo-50" },
  { id: "quiz", title: "Quiz", desc: "Start quiz session", icon: HelpCircle, color: "text-pink-500", bg: "bg-pink-50" },
  { id: "custom", title: "Custom Link", desc: "Any URL or resource", icon: LinkIcon, color: "text-teal-500", bg: "bg-teal-50" },
];

const colorThemes = [
  { id: "blue", hex: "#0284c7" },
  { id: "purple", hex: "#7c3aed" },
  { id: "pink", hex: "#ec4899" },
  { id: "orange", hex: "#f97316" },
  { id: "cyan", hex: "#06b6d4" },
  { id: "dark", hex: "#0f172a" },
];

const styles = [
  { id: "default", label: "Default" },
  { id: "circular", label: "Circular" },
  { id: "gradient", label: "Gradient" },
  { id: "neon", label: "Neon" },
  { id: "custom", label: "Custom" },
];

const recentQRs = [
  {
    id: 1,
    title: "Linear Equations - Learn & Explore",
    tag: "Topic",
    date: "Today, 10:24 AM",
    scans: "524 scans",
    tone: "blue"
  },
  {
    id: 2,
    title: "Human Heart Anatomy",
    tag: "AR Lesson",
    date: "Yesterday, 3:12 PM",
    scans: "312 scans",
    tone: "pink"
  },
  {
    id: 3,
    title: "Solar System Quiz",
    tag: "Quiz",
    date: "26 Oct 2026",
    scans: "276 scans",
    tone: "orange"
  },
  {
    id: 4,
    title: "Algebra Basics",
    tag: "Subject",
    date: "25 Oct 2026",
    scans: "186 scans",
    tone: "purple"
  },
  {
    id: 5,
    title: "3D Geometry Shapes",
    tag: "AR Lesson",
    date: "24 Oct 2026",
    scans: "156 scans",
    tone: "cyan"
  }
];

export default function QrGeneratorPage() {
  const [selectedType, setSelectedType] = useState("subject");
  const [selectedStyle, setSelectedStyle] = useState("default");
  const [selectedTheme, setSelectedTheme] = useState("blue");
  const [title, setTitle] = useState("Linear Equations - Learn & Explore");
  const [description, setDescription] = useState("Scan the QR code to access interactive learning content, 3D models and AR experience.");
  const [addLogo, setAddLogo] = useState(true);
  const [showTitle, setShowTitle] = useState(true);
  const [showDesc, setShowDesc] = useState(true);
  const [size, setSize] = useState("Medium (512px)");

  return (
    <NavigationShell activePage="QR Generator" showGreeting searchPlaceholder="Search QR codes, subjects, topics...">
      <div className="qr-page-container">

        {/* 1. TOP LAYOUT: Hero Card + Quick Stats Right Column */}
        <div className="qr-top-layout">
          {/* Main Hero Card */}
          <div className="qr-hero-card glass-panel">
            <div className="qr-hero-copy">
              <span className="qr-badge-tag">
                <Sparkles size={11} /> QR GENERATOR
              </span>
              <h2 className="qr-hero-title">Create Your QR Code</h2>
              <p className="qr-hero-sub">
                Generate QR codes for subjects, lessons, AR content, quizzes and more.
              </p>

              <div className="qr-hero-pills">
                <span className="qr-pill">
                  <Zap size={12} className="text-cyan-500" /> Fast &amp; Easy
                </span>
                <span className="qr-pill">
                  <Check size={12} className="text-blue-500" /> High Quality
                </span>
                <span className="qr-pill">
                  <Sparkles size={12} className="text-purple-500" /> Customizable
                </span>
                <span className="qr-pill">
                  <BarChart3 size={12} className="text-teal-500" /> Trackable
                </span>
              </div>
            </div>

            {/* 3D Visual Stage: Hologram QR Card + Smartphone */}
            <div className="qr-hero-visual">
              {/* Floating Mini Icons */}
              <div className="floating-qr-icon icon-link">
                <LinkIcon size={12} className="text-white" />
              </div>
              <div className="floating-qr-icon icon-scan">
                <QrCode size={12} className="text-white" />
              </div>

              {/* 3D Holographic Card */}
              <div className="hologram-qr-card">
                <div className="qr-matrix-preview mini">
                  <div className="matrix-corner top-left" />
                  <div className="matrix-corner top-right" />
                  <div className="matrix-corner bottom-left" />
                  <div className="matrix-dots" />
                </div>
              </div>

              {/* 3D Smartphone Device */}
              <div className="smartphone-3d-wrap">
                <div className="phone-screen">
                  <div className="phone-speaker" />
                  <div className="phone-qr-display">
                    <QrCode size={40} className="text-[#0284c7] drop-shadow-[0_0_8px_#38bdf8]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Top Right: Quick Stats Card */}
          <div className="qr-stats-card glass-panel">
            <div className="card-header-row flex items-center justify-between">
              <h3 className="card-heading">Quick Stats</h3>
              <button className="text-[9px] font-semibold text-[#0284c7] hover:underline">View All</button>
            </div>

            <div className="qr-stats-grid">
              <div className="qr-stat-box">
                <div className="flex items-center justify-between">
                  <span className="stat-label">Total QR Codes</span>
                  <QrCode size={13} className="text-cyan-500" />
                </div>
                <strong className="stat-num">124</strong>
                <span className="stat-trend green">↑ 12%</span>
              </div>

              <div className="qr-stat-box">
                <div className="flex items-center justify-between">
                  <span className="stat-label">Active Links</span>
                  <LinkIcon size={13} className="text-blue-500" />
                </div>
                <strong className="stat-num">108</strong>
                <span className="stat-trend green">↑ 18%</span>
              </div>

              <div className="qr-stat-box">
                <div className="flex items-center justify-between">
                  <span className="stat-label">Total Scans</span>
                  <Zap size={13} className="text-purple-500" />
                </div>
                <strong className="stat-num">2,843</strong>
                <span className="stat-trend green">↑ 32%</span>
              </div>

              <div className="qr-stat-box">
                <div className="flex items-center justify-between">
                  <span className="stat-label">Most Scanned</span>
                  <Sparkles size={13} className="text-amber-500" />
                </div>
                <strong className="stat-num text-[13px] mt-1">Mathematics</strong>
                <span className="stat-trend gray">425 scans</span>
              </div>
            </div>

            {/* Scan Analytics Mini Bar Chart */}
            <div className="scan-analytics-section">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[8px] font-bold text-slate-700">Scan Analytics</span>
              </div>
              <div className="scan-bars-chart">
                <div className="bar-col"><span style={{ height: "40%" }} /><small>Mon</small></div>
                <div className="bar-col"><span style={{ height: "55%" }} /><small>Tue</small></div>
                <div className="bar-col"><span style={{ height: "45%" }} /><small>Wed</small></div>
                <div className="bar-col"><span style={{ height: "70%" }} /><small>Thu</small></div>
                <div className="bar-col"><span style={{ height: "60%" }} /><small>Fri</small></div>
                <div className="bar-col"><span style={{ height: "90%" }} /><small>Sat</small></div>
                <div className="bar-col"><span style={{ height: "100%" }} /><small>Sun</small></div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. SELECT CONTENT TYPE (6 CARDS ROW) */}
        <section className="qr-content-type-section">
          <div className="mb-2">
            <h3 className="section-title">Select Content Type</h3>
            <p className="section-sub">Choose what you want to create a QR code for.</p>
          </div>

          <div className="content-type-grid">
            {contentTypes.map((item) => {
              const Icon = item.icon;
              const isSelected = selectedType === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedType(item.id)}
                  className={`content-type-card glass-panel ${isSelected ? "type-active" : ""}`}
                >
                  <div className={`type-icon-orb ${item.bg} ${item.color}`}>
                    <Icon size={18} />
                  </div>
                  <h4 className="type-title">{item.title}</h4>
                  <p className="type-desc">{item.desc}</p>
                </button>
              );
            })}
          </div>
        </section>

        {/* 3. MAIN WORKSPACE: Generate Form (Left/Center) + Live Preview (Right Center) + Right Sidebar */}
        <div className="qr-main-layout">
          {/* Left/Center Workspace: Form + Live Preview */}
          <div className="qr-creation-deck">
            {/* Form Card */}
            <div className="qr-form-card glass-panel">
              <div className="mb-3">
                <h3 className="section-title">Generate QR Code</h3>
                <p className="section-sub">Select the details and customize your QR code.</p>
              </div>

              {/* Subject, Unit, Topic Selectors */}
              <div className="qr-dropdowns-row">
                <div className="qr-field-group">
                  <label>Subject</label>
                  <div className="qr-custom-select">
                    <BookOpen size={13} className="text-blue-500" />
                    <span>Mathematics</span>
                    <ChevronDown size={13} className="ml-auto text-slate-400" />
                  </div>
                </div>

                <div className="qr-field-group">
                  <label>Unit</label>
                  <div className="qr-custom-select">
                    <Boxes size={13} className="text-purple-500" />
                    <span>Unit 2 - Linear Equations</span>
                    <ChevronDown size={13} className="ml-auto text-slate-400" />
                  </div>
                </div>

                <div className="qr-field-group">
                  <label>Topic</label>
                  <div className="qr-custom-select">
                    <Network size={13} className="text-cyan-500" />
                    <span>Linear Equations</span>
                    <ChevronDown size={13} className="ml-auto text-slate-400" />
                  </div>
                </div>
              </div>

              {/* QR Title Input */}
              <div className="qr-input-group mt-3">
                <div className="flex items-center justify-between">
                  <label>QR Title</label>
                  <span className="char-count">{title.length}/50</span>
                </div>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter QR title..."
                  className="qr-text-input"
                />
              </div>

              {/* Description Input */}
              <div className="qr-input-group mt-2">
                <div className="flex items-center justify-between">
                  <label>Description (Optional)</label>
                  <span className="char-count">{description.length}/200</span>
                </div>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Scan the QR code to access interactive learning content..."
                  rows={2}
                  className="qr-textarea-input"
                />
              </div>

              {/* Design Customization */}
              <div className="qr-customization-section mt-3">
                <div className="mb-2">
                  <h4 className="text-[10px] font-bold text-[#172d69]">Design Customization</h4>
                  <p className="text-[7.5px] text-slate-500">Choose your QR code style, colors and settings.</p>
                </div>

                <div className="customization-controls-row">
                  {/* Style Presets */}
                  <div className="custom-col">
                    <label className="text-[8px] font-semibold text-slate-600 block mb-1">Style</label>
                    <div className="style-preset-buttons">
                      {styles.map((s) => (
                        <button
                          key={s.id}
                          onClick={() => setSelectedStyle(s.id)}
                          className={`style-pill-btn ${selectedStyle === s.id ? "active" : ""}`}
                        >
                          {s.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Color Theme */}
                  <div className="custom-col">
                    <label className="text-[8px] font-semibold text-slate-600 block mb-1">Color Theme</label>
                    <div className="color-palette-wrap">
                      {colorThemes.map((c) => (
                        <button
                          key={c.id}
                          onClick={() => setSelectedTheme(c.id)}
                          style={{ backgroundColor: c.hex }}
                          className={`color-swatch-circle ${selectedTheme === c.id ? "ring-2 ring-offset-2 ring-blue-500 scale-110" : ""}`}
                          aria-label={c.id}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Size Dropdown */}
                  <div className="custom-col size-col">
                    <label className="text-[8px] font-semibold text-slate-600 block mb-1">Size</label>
                    <div className="qr-size-select">
                      <span>{size}</span>
                      <ChevronDown size={11} className="text-slate-400" />
                    </div>
                  </div>
                </div>

                {/* Toggles Row */}
                <div className="toggles-subrow mt-3">
                  <label className="qr-toggle-label">
                    <span>Add Logo</span>
                    <input
                      type="checkbox"
                      checked={addLogo}
                      onChange={(e) => setAddLogo(e.target.checked)}
                      className="qr-switch"
                    />
                  </label>

                  <label className="qr-toggle-label">
                    <span>Show Title</span>
                    <input
                      type="checkbox"
                      checked={showTitle}
                      onChange={(e) => setShowTitle(e.target.checked)}
                      className="qr-switch"
                    />
                  </label>

                  <label className="qr-toggle-label">
                    <span>Show Description</span>
                    <input
                      type="checkbox"
                      checked={showDesc}
                      onChange={(e) => setShowDesc(e.target.checked)}
                      className="qr-switch"
                    />
                  </label>

                  <button className="generate-qr-cta-btn ml-auto">
                    <QrCode size={13} />
                    <span>Generate QR Code</span>
                    <span className="text-[10px]">→</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Live Preview Card */}
            <div className="qr-preview-card glass-panel">
              <div className="mb-2 text-center">
                <h3 className="section-title">Live Preview</h3>
                <p className="section-sub">Your QR code will look like this.</p>
              </div>

              {/* Rendered QR Card */}
              <div className="rendered-qr-display-box">
                <div className="qr-glowing-frame">
                  {/* Stylized QR Code with Logo Center */}
                  <div className="qr-interactive-code">
                    <div className="qr-matrix-corner top-l" />
                    <div className="qr-matrix-corner top-r" />
                    <div className="qr-matrix-corner bot-l" />
                    
                    {/* QR Pixel Grid Illusion */}
                    <div className="qr-pixel-body">
                      <div className="qr-row r1" />
                      <div className="qr-row r2" />
                      <div className="qr-row r3" />
                      <div className="qr-row r4" />
                      <div className="qr-row r5" />
                      <div className="qr-row r6" />
                    </div>

                    {addLogo && (
                      <div className="qr-center-brand-logo">
                        <span>RIXA</span>
                      </div>
                    )}
                  </div>
                </div>

                {showTitle && <h4 className="preview-qr-title">{title}</h4>}
                {showDesc && <p className="preview-qr-desc">{description}</p>}

                {/* Preview Actions */}
                <div className="preview-action-buttons">
                  <button className="preview-btn download">
                    <Download size={12} />
                    <span>Download PNG</span>
                  </button>
                  <button className="preview-btn print">
                    <Printer size={12} />
                    <span>Print</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Recent Generated QRs + AI Assistant Card */}
          <aside className="qr-side-column">
            {/* Recent Generated QR Codes Card */}
            <div className="qr-recents-card glass-panel">
              <div className="flex items-center justify-between mb-2">
                <h4 className="side-heading">Recent Generated QR Codes</h4>
                <button className="text-[9px] font-semibold text-[#0284c7] hover:underline">View All</button>
              </div>

              <div className="qr-recents-list">
                {recentQRs.map((qr) => (
                  <div key={qr.id} className="qr-recent-row">
                    <div className={`qr-row-badge tone-${qr.tone}`}>
                      <QrCode size={14} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="qr-recent-title truncate">{qr.title}</p>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="qr-tag-pill">{qr.tag}</span>
                        <span className="qr-meta-text">{qr.date}</span>
                        <span className="qr-scans-count">{qr.scans}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-slate-400">
                      <button className="hover:text-blue-600" aria-label="Download"><Download size={11} /></button>
                      <button className="hover:text-purple-600" aria-label="Edit"><Edit2 size={11} /></button>
                      <button className="hover:text-slate-700" aria-label="More"><MoreVertical size={11} /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Assistant Callout Card */}
            <div className="qr-ai-callout-card glass-panel">
              <div className="qr-ai-robot-avatar">
                <div className="robot-visor-screen" />
              </div>

              <div className="qr-ai-quote-content">
                <p className="qr-ai-quote">
                  “A small QR code can open a big world of learning.”
                </p>
                <span className="qr-ai-signature">— RIXA</span>
              </div>
            </div>
          </aside>
        </div>

        {/* Footer */}
        <footer className="dashboard-footer mt-2">
          <span>RIXA AR Smart Learning &nbsp;|&nbsp; QR Generator</span>
          <span className="hidden sm:flex">
            <i></i> System Online &nbsp;|&nbsp; 10:45 AM &nbsp;|&nbsp; 26 Oct 2026
          </span>
        </footer>

      </div>
    </NavigationShell>
  );
}

