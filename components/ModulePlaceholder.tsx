"use client";

import { ArrowRight, Construction, Sparkles } from "lucide-react";
import NavigationShell from "./NavigationShell";

export default function ModulePlaceholder({ module }: { module: string }) {
  const title = module.replaceAll("-", " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
  return <NavigationShell activePage={title}><div className="module-placeholder glass-panel"><div className="module-placeholder-icon"><Construction size={32} /></div><p className="eyebrow">RIXA WORKSPACE</p><h2>{title}</h2><p>This workspace is ready for your learning content and management tools.</p><button className="hero-button"><Sparkles size={14} /> Start Building <ArrowRight size={14} /></button></div></NavigationShell>;
}
