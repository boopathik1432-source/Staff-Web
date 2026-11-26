"use client";

import React, { useState } from "react";
import {
  Settings, User, Palette, Lock, Bell, Database, Edit2, Globe, Clock,
  Calendar, Check, Shield, KeyRound, Smartphone, LogIn, HardDrive,
  Download, Upload, Trash2, RotateCcw, Server, ArrowRight, Sparkles,
  ChevronDown, ChevronRight, CheckCircle2, Mail
} from "lucide-react";
import NavigationShell from "./NavigationShell";

const tabs = [
  { id: "general", label: "General", icon: Settings },
  { id: "account", label: "Account", icon: User },
  { id: "appearance", label: "Appearance", icon: Palette },
  { id: "security", label: "Security", icon: Lock },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "backup", label: "Data & Backup", icon: Database },
];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("general");
  const [appName, setAppName] = useState("RIXA AR Smart Learning");
  const [language, setLanguage] = useState("English");
  const [timezone, setTimezone] = useState("Asia/Kolkata (IST)");
  const [dateFormat, setDateFormat] = useState("DD MMM YYYY");
  const [timeFormat, setTimeFormat] = useState("12 Hour (AM/PM)");
  const [autoSave, setAutoSave] = useState(true);

  // Performance toggles
  const [realtimeSync, setRealtimeSync] = useState(true);
  const [load3D, setLoad3D] = useState(true);
  const [highGraphics, setHighGraphics] = useState(false);

  // Account details
  const [fullName, setFullName] = useState("Staff Member");
  const [email, setEmail] = useState("user@rixa.com");
  const [phone, setPhone] = useState("+91 98765 43210");
  const [role, setRole] = useState("Admin");

  // Security toggles
  const [twoFactor, setTwoFactor] = useState(false);
  const [autoBackup, setAutoBackup] = useState(true);

  return (
    <NavigationShell
      activePage="Settings"
      showGreeting
      searchPlaceholder="Search settings, features, or help..."
      greetingSubtitle="Create · Manage · Share  |  RIXA Settings"
      notificationCount={8}
    >
      <div className="settings-page-container">

        {/* 1. TOP LAYOUT: Hero Banner + Account Information Card */}
        <section className="settings-top-layout">
          {/* Main Hero Banner */}
          <div className="settings-hero-card glass-panel">
            <div className="settings-hero-copy">
              <span className="settings-badge-tag">
                <Sparkles size={11} /> System Settings
              </span>
              <h2 className="settings-hero-title">Settings</h2>
              <p className="settings-hero-sub">
                Customize your RIXA AR Smart Learning experience. Manage your account, platform preferences, and more.
              </p>
            </div>

            {/* Right: 3D Holographic Gear & Shield & Lock Stage */}
            <div className="settings-hero-visual">
              {/* Handwritten Quote */}
              <div className="settings-handwritten-quote">
                <span>Better Settings</span>
                <span>Better Learning</span>
              </div>

              {/* 3D Visual Cluster */}
              <div className="gear-shield-cluster">
                {/* Floating Lock */}
                <div className="floating-holo-lock">
                  <Lock size={16} className="text-white drop-shadow-[0_0_8px_#38bdf8]" />
                </div>

                {/* 3D Cyan Gear */}
                <div className="holo-3d-gear">
                  <div className="gear-tooth t1" />
                  <div className="gear-tooth t2" />
                  <div className="gear-tooth t3" />
                  <div className="gear-tooth t4" />
                  <div className="gear-center">
                    <Settings size={22} className="text-[#0284c7]" />
                  </div>
                </div>

                {/* 3D Glowing Shield */}
                <div className="holo-3d-shield">
                  <Check size={18} className="text-white font-black stroke-[3]" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Top: Account Information Card */}
          <div className="account-info-card glass-panel">
            <div className="flex items-center justify-between mb-2">
              <h3 className="card-heading flex items-center gap-1.5">
                <Settings size={13} className="text-blue-500" />
                Account Information
              </h3>
              <button className="text-[9px] font-semibold text-[#0284c7] hover:underline">View Profile</button>
            </div>

            <div className="account-avatar-summary">
              <div className="account-profile-photo-circle">
                <div className="user-photo-img">
                  <span>SM</span>
                </div>
              </div>
              <div>
                <strong className="text-[12px] font-bold text-[#172d69] block leading-tight">Staff Member</strong>
                <span className="text-[8px] text-slate-500 font-semibold">Admin</span>
              </div>
            </div>

            <div className="account-meta-details mt-2 pt-2 border-t border-slate-100">
              <div className="acc-meta-row">
                <Mail size={11} className="text-slate-400" />
                <span>user@rixa.com</span>
              </div>
              <div className="acc-meta-row">
                <HardDrive size={11} className="text-slate-400" />
                <span>RIXA AR Smart Learning</span>
              </div>
              <div className="acc-meta-row">
                <Calendar size={11} className="text-slate-400" />
                <span>Joined 26 Oct 2026</span>
              </div>
            </div>
          </div>
        </section>

        {/* 2. SETTINGS NAVIGATION TABS */}
        <div className="settings-tabs-bar glass-panel">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`settings-tab-btn ${isActive ? "tab-active" : ""}`}
              >
                <Icon size={12} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* 3. MAIN WORKSPACE: General Settings (Left) + Account & Security (Center) + Quick Actions & System Info (Right) */}
        <div className="settings-main-layout">
          {/* Left Column: General Settings & Performance */}
          <div className="settings-column">
            {/* General Settings Card */}
            <div className="settings-card glass-panel">
              <div className="mb-3">
                <h3 className="section-title">General Settings</h3>
                <p className="section-sub">Manage your basic application settings and preferences.</p>
              </div>

              <div className="settings-fields-list">
                {/* Application Name */}
                <div className="setting-field-row">
                  <div className="field-icon-orb bg-purple-50 text-purple-600">
                    <HardDrive size={13} />
                  </div>
                  <div className="field-meta">
                    <label className="field-label">Application Name</label>
                    <span className="field-desc">This will be shown in the browser title and header.</span>
                  </div>
                  <div className="field-input-box">
                    <span className="text-[8.5px] font-bold text-[#172d69]">{appName}</span>
                    <button className="text-slate-400 hover:text-blue-600" aria-label="Edit name"><Edit2 size={11} /></button>
                  </div>
                </div>

                {/* Default Language */}
                <div className="setting-field-row">
                  <div className="field-icon-orb bg-cyan-50 text-cyan-600">
                    <Globe size={13} />
                  </div>
                  <div className="field-meta">
                    <label className="field-label">Default Language</label>
                    <span className="field-desc">Set your preferred language for the platform.</span>
                  </div>
                  <div className="field-dropdown-box">
                    <span>{language}</span>
                    <ChevronDown size={11} className="text-slate-400" />
                  </div>
                </div>

                {/* Timezone */}
                <div className="setting-field-row">
                  <div className="field-icon-orb bg-blue-50 text-blue-600">
                    <Clock size={13} />
                  </div>
                  <div className="field-meta">
                    <label className="field-label">Timezone</label>
                    <span className="field-desc">Choose your timezone for accurate time and date.</span>
                  </div>
                  <div className="field-dropdown-box">
                    <span>{timezone}</span>
                    <ChevronDown size={11} className="text-slate-400" />
                  </div>
                </div>

                {/* Date Format */}
                <div className="setting-field-row">
                  <div className="field-icon-orb bg-teal-50 text-teal-600">
                    <Calendar size={13} />
                  </div>
                  <div className="field-meta">
                    <label className="field-label">Date Format</label>
                    <span className="field-desc">Select how dates will be displayed.</span>
                  </div>
                  <div className="field-dropdown-box">
                    <span>{dateFormat}</span>
                    <ChevronDown size={11} className="text-slate-400" />
                  </div>
                </div>

                {/* Time Format */}
                <div className="setting-field-row">
                  <div className="field-icon-orb bg-indigo-50 text-indigo-600">
                    <Clock size={13} />
                  </div>
                  <div className="field-meta">
                    <label className="field-label">Time Format</label>
                    <span className="field-desc">Choose 12 or 24 hour format.</span>
                  </div>
                  <div className="field-dropdown-box">
                    <span>{timeFormat}</span>
                    <ChevronDown size={11} className="text-slate-400" />
                  </div>
                </div>

                {/* Auto Save Toggle */}
                <div className="setting-field-row">
                  <div className="field-icon-orb bg-pink-50 text-pink-600">
                    <CheckCircle2 size={13} />
                  </div>
                  <div className="field-meta">
                    <label className="field-label">Auto Save</label>
                    <span className="field-desc">Automatically save your work while editing.</span>
                  </div>
                  <label className="switch-container">
                    <input
                      type="checkbox"
                      checked={autoSave}
                      onChange={(e) => setAutoSave(e.target.checked)}
                      className="switch-input"
                    />
                    <span className="switch-slider" />
                  </label>
                </div>
              </div>
            </div>

            {/* Performance Settings Card */}
            <div className="settings-card glass-panel mt-3">
              <div className="mb-2">
                <h3 className="section-title">Performance Settings</h3>
                <p className="section-sub">Optimize your platform performance and experience.</p>
              </div>

              <div className="settings-fields-list">
                {/* Enable Real-time Sync */}
                <div className="setting-field-row">
                  <div className="field-icon-orb bg-cyan-50 text-cyan-600">
                    <HardDrive size={13} />
                  </div>
                  <div className="field-meta">
                    <label className="field-label">Enable Real-time Sync</label>
                    <span className="field-desc">Sync data across all devices instantly.</span>
                  </div>
                  <label className="switch-container">
                    <input
                      type="checkbox"
                      checked={realtimeSync}
                      onChange={(e) => setRealtimeSync(e.target.checked)}
                      className="switch-input"
                    />
                    <span className="switch-slider" />
                  </label>
                </div>

                {/* Load 3D Models */}
                <div className="setting-field-row">
                  <div className="field-icon-orb bg-blue-50 text-blue-600">
                    <HardDrive size={13} />
                  </div>
                  <div className="field-meta">
                    <label className="field-label">Load 3D Models</label>
                    <span className="field-desc">Enable 3D model loading for AR lessons.</span>
                  </div>
                  <label className="switch-container">
                    <input
                      type="checkbox"
                      checked={load3D}
                      onChange={(e) => setLoad3D(e.target.checked)}
                      className="switch-input"
                    />
                    <span className="switch-slider" />
                  </label>
                </div>

                {/* High Quality Graphics */}
                <div className="setting-field-row">
                  <div className="field-icon-orb bg-teal-50 text-teal-600">
                    <Sparkles size={13} />
                  </div>
                  <div className="field-meta">
                    <label className="field-label">High Quality Graphics</label>
                    <span className="field-desc">Better visuals (may use more data).</span>
                  </div>
                  <label className="switch-container">
                    <input
                      type="checkbox"
                      checked={highGraphics}
                      onChange={(e) => setHighGraphics(e.target.checked)}
                      className="switch-input"
                    />
                    <span className="switch-slider" />
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Center Column: Account Settings + Security + Backup */}
          <div className="settings-column">
            {/* Account Settings Card */}
            <div className="settings-card glass-panel">
              <div className="mb-3">
                <h3 className="section-title">Account Settings</h3>
                <p className="section-sub">Manage your account and personal information.</p>
              </div>

              {/* Profile Photo Row */}
              <div className="profile-photo-edit-row mb-3">
                <div className="profile-photo-circle">
                  <span>SM</span>
                </div>
                <div className="min-w-0 flex-1">
                  <strong className="text-[9.5px] font-bold text-[#172d69] block">Profile Photo</strong>
                  <span className="text-[7.5px] text-slate-500">Update your profile picture.</span>
                </div>
                <button className="change-photo-btn">Change Photo</button>
              </div>

              <div className="settings-fields-list">
                {/* Full Name */}
                <div className="setting-field-row">
                  <div className="field-icon-orb bg-blue-50 text-blue-600"><User size={13} /></div>
                  <div className="field-meta">
                    <label className="field-label">Full Name</label>
                    <span className="field-desc">{fullName}</span>
                  </div>
                  <button className="text-slate-400 hover:text-blue-600" aria-label="Edit full name"><Edit2 size={11} /></button>
                </div>

                {/* Email Address */}
                <div className="setting-field-row">
                  <div className="field-icon-orb bg-purple-50 text-purple-600"><Mail size={13} /></div>
                  <div className="field-meta">
                    <label className="field-label">Email Address</label>
                    <span className="field-desc">{email}</span>
                  </div>
                  <button className="text-slate-400 hover:text-blue-600" aria-label="Edit email"><Edit2 size={11} /></button>
                </div>

                {/* Phone Number */}
                <div className="setting-field-row">
                  <div className="field-icon-orb bg-emerald-50 text-emerald-600"><Smartphone size={13} /></div>
                  <div className="field-meta">
                    <label className="field-label">Phone Number</label>
                    <span className="field-desc">{phone}</span>
                  </div>
                  <button className="text-slate-400 hover:text-blue-600" aria-label="Edit phone"><Edit2 size={11} /></button>
                </div>

                {/* Role */}
                <div className="setting-field-row">
                  <div className="field-icon-orb bg-pink-50 text-pink-600"><Shield size={13} /></div>
                  <div className="field-meta">
                    <label className="field-label">Role</label>
                    <span className="field-desc">{role}</span>
                  </div>
                  <ChevronDown size={11} className="text-slate-400" />
                </div>
              </div>
            </div>

            {/* Security Settings Card */}
            <div className="settings-card glass-panel mt-3">
              <div className="mb-2">
                <h3 className="section-title">Security Settings</h3>
                <p className="section-sub">Keep your account safe and secure.</p>
              </div>

              <div className="settings-fields-list">
                {/* Change Password */}
                <div className="setting-field-row action-row">
                  <div className="field-icon-orb bg-blue-50 text-blue-600"><KeyRound size={13} /></div>
                  <div className="field-meta">
                    <label className="field-label">Change Password</label>
                    <span className="field-desc">Update your password regularly.</span>
                  </div>
                  <ChevronRight size={13} className="text-slate-400" />
                </div>

                {/* Two-Factor Authentication */}
                <div className="setting-field-row">
                  <div className="field-icon-orb bg-cyan-50 text-cyan-600"><Shield size={13} /></div>
                  <div className="field-meta">
                    <label className="field-label">Two-Factor Authentication</label>
                    <span className="field-desc">Add an extra layer of security.</span>
                  </div>
                  <label className="switch-container">
                    <input
                      type="checkbox"
                      checked={twoFactor}
                      onChange={(e) => setTwoFactor(e.target.checked)}
                      className="switch-input"
                    />
                    <span className="switch-slider" />
                  </label>
                </div>

                {/* Login Activity */}
                <div className="setting-field-row action-row">
                  <div className="field-icon-orb bg-purple-50 text-purple-600"><LogIn size={13} /></div>
                  <div className="field-meta">
                    <label className="field-label">Login Activity</label>
                    <span className="field-desc">View your recent login sessions.</span>
                  </div>
                  <ChevronRight size={13} className="text-slate-400" />
                </div>
              </div>
            </div>

            {/* Data & Backup Card */}
            <div className="settings-card glass-panel mt-3">
              <div className="mb-2">
                <h3 className="section-title">Data &amp; Backup</h3>
                <p className="section-sub">Manage your data and backup preferences.</p>
              </div>

              <div className="settings-fields-list">
                {/* Auto Backup */}
                <div className="setting-field-row">
                  <div className="field-icon-orb bg-blue-50 text-blue-600"><Database size={13} /></div>
                  <div className="field-meta">
                    <label className="field-label">Auto Backup</label>
                    <span className="field-desc">Automatically backup your data.</span>
                  </div>
                  <label className="switch-container">
                    <input
                      type="checkbox"
                      checked={autoBackup}
                      onChange={(e) => setAutoBackup(e.target.checked)}
                      className="switch-input"
                    />
                    <span className="switch-slider" />
                  </label>
                </div>

                {/* Export Data */}
                <div className="setting-field-row">
                  <div className="field-icon-orb bg-pink-50 text-pink-600"><Download size={13} /></div>
                  <div className="field-meta">
                    <label className="field-label">Export Data</label>
                    <span className="field-desc">Download your data in different formats.</span>
                  </div>
                  <button className="export-action-btn">
                    <Download size={10} />
                    <span>Export</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Actions + System Information + Motivational Card */}
          <aside className="settings-column">
            {/* Quick Actions 4 Buttons Grid */}
            <div className="settings-card glass-panel">
              <div className="mb-2">
                <h3 className="section-title flex items-center gap-1.5">
                  <HardDrive size={13} className="text-blue-500" />
                  Quick Actions
                </h3>
                <p className="section-sub">Manage your platform easily.</p>
              </div>

              <div className="quick-actions-quad">
                <button className="quick-action-tile">
                  <div className="qa-icon-orb bg-blue-50 text-blue-600"><Download size={14} /></div>
                  <strong className="qa-title">Export Data</strong>
                  <span className="qa-sub">Download Reports</span>
                </button>

                <button className="quick-action-tile">
                  <div className="qa-icon-orb bg-purple-50 text-purple-600"><Upload size={14} /></div>
                  <strong className="qa-title">Import Data</strong>
                  <span className="qa-sub">Upload Files</span>
                </button>

                <button className="quick-action-tile">
                  <div className="qa-icon-orb bg-pink-50 text-pink-600"><Trash2 size={14} /></div>
                  <strong className="qa-title">Clear Cache</strong>
                  <span className="qa-sub">Free Up Space</span>
                </button>

                <button className="quick-action-tile">
                  <div className="qa-icon-orb bg-cyan-50 text-cyan-600"><RotateCcw size={14} /></div>
                  <strong className="qa-title">Reset Settings</strong>
                  <span className="qa-sub">Restore Default</span>
                </button>
              </div>
            </div>

            {/* System Information Card */}
            <div className="settings-card glass-panel mt-3">
              <div className="mb-2">
                <h3 className="section-title flex items-center gap-1.5">
                  <Server size={13} className="text-blue-500" />
                  System Information
                </h3>
                <p className="section-sub">Current system details and status.</p>
              </div>

              <div className="system-info-list">
                <div className="sys-info-row">
                  <div className="sys-icon-orb bg-blue-50 text-blue-600"><HardDrive size={11} /></div>
                  <span className="sys-label">Platform Version</span>
                  <strong className="sys-val">v1.0.0</strong>
                </div>

                <div className="sys-info-row">
                  <div className="sys-icon-orb bg-emerald-50 text-emerald-600"><Database size={11} /></div>
                  <span className="sys-label">Database Status</span>
                  <div className="flex items-center gap-1.5 ml-auto">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <strong className="sys-val text-emerald-600">Connected</strong>
                  </div>
                </div>

                <div className="sys-info-row">
                  <div className="sys-icon-orb bg-cyan-50 text-cyan-600"><Server size={11} /></div>
                  <span className="sys-label">Server Status</span>
                  <div className="flex items-center gap-1.5 ml-auto">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <strong className="sys-val text-emerald-600">Online</strong>
                  </div>
                </div>

                <div className="sys-info-row flex-col items-start gap-1">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                      <div className="sys-icon-orb bg-purple-50 text-purple-600"><HardDrive size={11} /></div>
                      <span className="sys-label">Storage Used</span>
                    </div>
                    <strong className="sys-val">2.4 GB / 10 GB <small className="text-slate-400 font-normal">24%</small></strong>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden mt-1">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" style={{ width: "24%" }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Motivational Learning Never Stops Card */}
            <div className="learning-never-stops-card glass-panel mt-3">
              <div className="hologram-cube-asset">
                <div className="cube-books-stack" />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-[11px] font-black text-[#172d69] leading-tight">Learning Never Stops</h4>
                <p className="text-[7.5px] text-slate-500 mt-0.5">— RIXA AR Smart Learning</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-[10px] font-black text-[#0284c7]">RIXA</span>
                  <button className="arrow-circle-btn" aria-label="Go">
                    <ArrowRight size={11} />
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Footer */}
        <footer className="dashboard-footer mt-2">
          <span>RIXA AR Smart Learning &nbsp;|&nbsp; Version 1.0.0</span>
          <span className="hidden sm:flex">
            <i></i> System Online &nbsp;|&nbsp; 26 Oct 2026 &nbsp;|&nbsp; 10:45 AM
          </span>
        </footer>

      </div>
    </NavigationShell>
  );
}
