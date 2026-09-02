import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState } from "react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";

const links = [
  ["Home", "/"], ["Math", "/math"], ["Physics", "/physics"],
  ["Learn", "/learn"], ["About", "/about"], ["Contact", "/contact"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const navClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors ${isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"}`;

  return <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
    <div className="section-container flex min-h-[64px] items-center justify-between gap-6">
      <Link to="/" className="text-base font-bold tracking-tight text-foreground sm:text-lg">{site.name}</Link>
      <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
        {links.map(([label, path]) => <NavLink key={path} to={path} className={navClass}>{label}</NavLink>)}
      </nav>
      <Button asChild className="hidden sm:inline-flex"><Link to="/contact">Start a Conversation <ArrowRight /></Link></Button>
      <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">
        {open ? <X /> : <Menu />}
      </Button>
    </div>
    {open && <nav className="border-t border-border bg-background px-4 py-4 lg:hidden" aria-label="Mobile navigation">
      <div className="section-container flex flex-col gap-3">
        {links.map(([label, path]) => <NavLink key={path} to={path} className={navClass} onClick={() => setOpen(false)}>{label}</NavLink>)}
        <Button asChild><Link to="/contact" onClick={() => setOpen(false)}>Start a Conversation <ArrowRight /></Link></Button>
      </div>
    </nav>}
  </header>;
}

export function SiteFooter() {
  return <footer className="border-t border-border bg-foreground py-7 text-background">
    <div className="section-container flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
      <div><p className="font-semibold">{site.name}</p><p className="mt-1 text-sm text-background/70">Math & Physics, taught for understanding.</p></div>
      <p className="text-sm text-background/70">© {new Date().getFullYear()} {site.teacherName}. All rights reserved.</p>
    </div>
  </footer>;
}

export function PageShell({ children }: { children: ReactNode }) {
  return <div className="min-h-screen bg-background text-foreground"><SiteHeader /><main>{children}</main><SiteFooter /></div>;
}
