"use client";
import Link from "next/link";
import { useState } from "react";
export function Header() {
 const [open,setOpen]=useState(false);
 const links=[["Services","/services"],["Solutions","/solutions"],["Our work","/work"],["About","/about"],["Insights","/insights"]];
 return <header className="header"><div className="shell nav"><Link href="/" className="brand" onClick={()=>setOpen(false)}><span className="brand-icon">SB</span><span>SAP<span className="brand-light">BRIDGE</span><small>TECHNOLOGIES</small></span></Link><button className="menu-toggle" onClick={()=>setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>{open?"✕":"☰"}</button><nav className={open?"nav-links open":"nav-links"}>{links.map(([label,href])=><Link key={href} href={href} onClick={()=>setOpen(false)}>{label}</Link>)}<Link className="nav-cta" href="/contact" onClick={()=>setOpen(false)}>Let’s talk <span>↗</span></Link></nav></div></header>;
}