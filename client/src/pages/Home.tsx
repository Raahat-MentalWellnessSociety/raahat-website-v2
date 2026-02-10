/**
 * RAAHAT - Mental Health and Wellness Society Website
 * 
 * Design: Organic Wellness / Biophilic Design
 * - Nature-inspired flowing shapes and organic curves
 * - Soft, calming color transitions (peach to lavender)
 * - Breathing whitespace for visual tranquility
 * - Gentle animations like deep breathing
 * - FULLY RESPONSIVE: mobile-first approach for all devices
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Heart, 
  Users, 
  MessageCircle, 
  Brain, 
  Sparkles, 
  Shield, 
  Calendar, 
  ArrowRight,
  Menu,
  X,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  MapPin,
  ChevronDown,
  Star,
  Award,
  ExternalLink
} from "lucide-react";
import { useState, useEffect } from "react";

// Image URLs
const IMAGES = {
  logo: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028642573/QpFyIwCNTQuDpvZX.png",
  heroBg: "https://private-us-east-1.manuscdn.com/sessionFile/ZVsB8xR9Plu2xJaKOusiDn/sandbox/m5NBiaiNHEE1Ij3VMwCtyR-img-1_1770187879000_na1fn_cmFhaGF0LWhlcm8tYmc.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWlZzQjh4UjlQbHUyeEphS091c2lEbi9zYW5kYm94L201TkJpYWlOSEVFMUlqM1ZNd0N0eVItaW1nLTFfMTc3MDE4Nzg3OTAwMF9uYTFmbl9jbUZoYUdGMExXaGxjbTh0WW1jLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=H1QzQfpXZ8SZiyjJ-Vsly2M0005f37J5m9cIci2mutCbPSyeN9ftLlgydme19OLiNhbZJ~hMFFvLU5VU~3GO741JGwJBftPLoyIoKePcQNpM3EnqKp6nxJvYUjf5wRAD~t3IKKBisL7Oj8~99VaZXhV3UR7eqKn7ZU3IRVubT8vHz6cAtf0WTSWRqbZmb1YFNewmQoucnEI9UMxPM-29S7VLyRXfj7rEsbq07dnXiwTlrX-7UvIc2yhuchN1IOVbWkJ86POkxcxUXbpG6p9Cf~zxNJxiqx9majWZeW-gX6j-Ao5ZW9d5aSwVhTkO~lIV6gZaY0ql5~0JTzs5ez3oIw__",
  meditation: "https://private-us-east-1.manuscdn.com/sessionFile/ZVsB8xR9Plu2xJaKOusiDn/sandbox/m5NBiaiNHEE1Ij3VMwCtyR-img-2_1770187880000_na1fn_cmFhaGF0LW1lZGl0YXRpb24.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWlZzQjh4UjlQbHUyeEphS091c2lEbi9zYW5kYm94L201TkJpYWlOSEVFMUlqM1ZNd0N0eVItaW1nLTJfMTc3MDE4Nzg4MDAwMF9uYTFmbl9jbUZoYUdGMExXMWxaR2wwWVhScGIyNC5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=DX8YH0hdFPfT73VA7bqmaTd-vX2zPX8vxy7AxmOgs-2vRjFUjEu1bgYT88-2CWJKn3jQB5odefnsTtV8bs1HdaC0zak5qbVPXgv5GsX4lsYLsBzKwdkqXqbsKIQfxifPVeDSQA91dSrdicYImigEfbtWKv7xuiKVrXKd3f8lHm3Ms68TB4JzM3MVVNnr2quGqExfJGbD-F4fwDWDRICri53~ZM17aNK9FRJXPcLHmd~pBCHTVMdcFxsiRJDu3q-yGOS7ofAHA0cMpkYdHll-HLtJFpnVy8fUUVrR7A4YiJyYSue-7qtblCQNcaRd-ZiW2x6bwSCeKjYU2MBCVCVS~w__",
  counseling: "https://private-us-east-1.manuscdn.com/sessionFile/ZVsB8xR9Plu2xJaKOusiDn/sandbox/m5NBiaiNHEE1Ij3VMwCtyR-img-3_1770187888000_na1fn_cmFhaGF0LWNvdW5zZWxpbmc.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWlZzQjh4UjlQbHUyeEphS091c2lEbi9zYW5kYm94L201TkJpYWlOSEVFMUlqM1ZNd0N0eVItaW1nLTNfMTc3MDE4Nzg4ODAwMF9uYTFmbl9jbUZoYUdGMExXTnZkVzV6Wld4cGJtYy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=a5mNbF~nLEIVjBgKArkFncAOmeFMvyPb36eRgwXnDOJVK4kkJGuL85Es7GnHNEOAt62F~lC6IT5KqqPnC~9cn54x10VpGUysBrGPjBoX2xQo~0dvqOJg1RqMQSYRB9LPLuLPkb5kfG~ocqZzuiB3UJmKZ2gKzvhGIBJMogMr4CZR7USO71Vm8eUXoKyQoKcV4E1LyZHjroh21Q06Vy~pkeHA4jK0Bx9UiYV-YQ4Il8xLyzZvndgSmVMvihj2I~vDj9ZzBU3rr5Tdg1DdQVF17agkLY2-6MVojX04Jgw2w5lJFXfKJ67yF2x6vlfJu6Cf5TiTbQySMYvdoVdQJrTxag__",
  community: "https://private-us-east-1.manuscdn.com/sessionFile/ZVsB8xR9Plu2xJaKOusiDn/sandbox/m5NBiaiNHEE1Ij3VMwCtyR-img-4_1770187872000_na1fn_cmFhaGF0LWNvbW11bml0eQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWlZzQjh4UjlQbHUyeEphS091c2lEbi9zYW5kYm94L201TkJpYWlOSEVFMUlqM1ZNd0N0eVItaW1nLTRfMTc3MDE4Nzg3MjAwMF9uYTFmbl9jbUZoYUdGMExXTnZiVzExYm1sMGVRLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=qRcCIPkyI-K0waP96bLmhd01B7htevT3TD1sPXKavXbkWKxHE4VT0MfKvDrm6y4jsn94zSZq63blPokFIuJPuw-i94FnZBL8KLtCtUwUfW3fw2i0JgTOvm7Z2acgQ9JehyEokoGXY~a722siIgTYNa1QzSQze7Pi2tlbO8vnhnXbDfkn8vaD4xRNUcvkp6lbIQ2NO23jBDgeXGRu9AT1XTkEXRlZQbkCwDswS0SDuIQnaFbvJT6TqRnj7VYuKulm48sgXcpS7QGcu7OaK8BIR84Auwn4oEtk0DiZBTqSVrAqmtpRSAS5fvKhyXw04j6DWnDtRaxLPhcTahIBE9G6iw__",
  growth: "https://private-us-east-1.manuscdn.com/sessionFile/ZVsB8xR9Plu2xJaKOusiDn/sandbox/m5NBiaiNHEE1Ij3VMwCtyR-img-5_1770187898000_na1fn_cmFhaGF0LWdyb3d0aA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWlZzQjh4UjlQbHUyeEphS091c2lEbi9zYW5kYm94L201TkJpYWlOSEVFMUlqM1ZNd0N0eVItaW1nLTVfMTc3MDE4Nzg5ODAwMF9uYTFmbl9jbUZoYUdGMExXZHliM2QwYUEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Hwx22jFa1meLb7r2foDPmC6LFLSVG1581l4Gzc2EjA5Y8CEq-EovMHRnX-y30f2n8mrJZot3fSjXKCaioAOLBE-fsd7xbAmn2IMyBEgknFGAuAViY33JhQ84tImm-RB9BulIY7KFDrO3Dh4HJ0ui2T0CmxL9011dl3mnBfcsOaeiyDVi2mXiT0DRBvP2rVmE42tbIOLrZ5scc5gfMVj0~v8fmyxBM8tiBkxCwpTt0iNSe~ukYa8rYYgu3MKIHL0Qp2l-31bVrB7-4qqPhu03tQV-CAmS0wJNalToVcn~0WmEKOZfspqBtM9G4H0ls66kyUYRABp0RQgrSDoEAIbOgw__"
};

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

// Navigation Component - fully responsive with mobile drawer
function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "What We Do" },
    { href: "#benefits", label: "Benefits" },
    { href: "#initiatives", label: "Initiatives" },
    { href: "#council", label: "Council" },
    { href: "#join", label: "Join Us" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#" className="flex items-center gap-2 sm:gap-3 z-50">
            <img src={IMAGES.logo} alt="Raahat Logo" className="h-8 sm:h-10 md:h-12 w-auto" />
            <span className="font-display text-lg sm:text-xl font-semibold text-foreground">
              Raahat
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-primary text-foreground/80"
              >
                {link.label}
              </a>
            ))}
            <Button asChild className="rounded-full px-5 xl:px-6">
              <a href="#join">Join Now</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 z-50 relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Navigation Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-white shadow-2xl z-40 lg:hidden"
          >
            <div className="pt-20 pb-8 px-6 h-full overflow-y-auto">
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block py-3 px-4 text-base font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-xl transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="mt-6 px-4">
                <Button asChild className="w-full rounded-full" size="lg">
                  <a href="#join" onClick={() => setIsMobileMenuOpen(false)}>Join Now</a>
                </Button>
              </div>
              {/* Social links in mobile menu */}
              <div className="mt-8 px-4 pt-6 border-t border-border/50">
                <p className="text-xs text-muted-foreground mb-3">Follow us</p>
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors" aria-label="Instagram">
                    <Instagram className="h-4 w-4 text-primary" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors" aria-label="LinkedIn">
                    <Linkedin className="h-4 w-4 text-primary" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors" aria-label="YouTube">
                    <Youtube className="h-4 w-4 text-primary" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

// Hero Section - responsive typography and spacing
function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${IMAGES.heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/80" />
      
      {/* Floating decorative elements - hidden on small screens for performance */}
      <div className="hidden sm:block absolute top-1/4 left-10 w-16 md:w-20 h-16 md:h-20 rounded-full bg-primary/10 animate-float" style={{ animationDelay: "0s" }} />
      <div className="hidden sm:block absolute top-1/3 right-10 md:right-20 w-12 md:w-16 h-12 md:h-16 rounded-full bg-accent/20 animate-float" style={{ animationDelay: "1s" }} />
      <div className="hidden md:block absolute bottom-1/4 left-1/4 w-12 h-12 rounded-full bg-secondary/30 animate-float" style={{ animationDelay: "2s" }} />

      <div className="container relative z-10 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20">
        <div className="max-w-3xl mx-auto text-center px-2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-4 sm:mb-6">
              <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium">
                IIT Madras BS in Data Science
              </span>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-4 sm:mb-6 leading-tight"
            >
              Find Your <span className="gradient-text">Peace</span> with Raahat
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-base sm:text-lg md:text-xl text-foreground/70 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-2"
            >
              The Mental Health and Wellness Society dedicated to promoting happiness, 
              tranquility, and sanity. You don't have to deal with it alone anymore.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
              <Button asChild size="lg" className="rounded-full px-6 sm:px-8 text-sm sm:text-base">
                <a href="#join">
                  Become a Member <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-6 sm:px-8 text-sm sm:text-base bg-white/50 backdrop-blur-sm">
                <a href="#about">Learn More</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll indicator - hidden on very small screens */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="hidden sm:block absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="flex flex-col items-center text-foreground/50 hover:text-primary transition-colors">
            <span className="text-xs sm:text-sm mb-2">Scroll to explore</span>
            <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// About Section - responsive grid and image positioning
function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute -top-40 -right-40 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-gradient-to-br from-primary/5 to-accent/10 blur-3xl" />
      
      <div className="container relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center"
        >
          {/* Image */}
          <motion.div variants={fadeInUp} className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden soft-shadow">
              <img 
                src={IMAGES.meditation} 
                alt="Raahat community meditation session" 
                className="w-full h-auto"
              />
            </div>
            {/* Floating stat card - responsive positioning */}
            <div className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-6 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 soft-shadow">
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-primary" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-foreground">500+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Students Supported</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div variants={fadeInUp} className="order-1 lg:order-2">
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-accent/50 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              About Raahat
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
              Your Safe Space for Mental Wellness
            </h2>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-foreground/70 leading-relaxed">
              <p>
                The state of one's mind that deserves our attention is mental wellness. 
                A collective effort is necessary to find a solution to this. It is a state of happiness 
                where people discover their abilities and learn how to handle life's stress properly.
              </p>
              <p>
                In today's highly competitive environment, it is not unusual for students to experience 
                social, personal, or academic problems. The growing pressure to excel everywhere often 
                leads to emotional or psychological turmoil, disturbing one's peace of mind.
              </p>
              <p>
                At IIT Madras, these disturbances may surface all the more frequently when one is away 
                from their protective social environment. That's where <strong>Raahat</strong> comes in — 
                we are here to promote happiness, tranquility, and sanity.
              </p>
            </div>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
              <Button asChild className="rounded-full px-5 sm:px-6 w-full sm:w-auto">
                <a href="#services">Our Services</a>
              </Button>
              <a href="#council" className="text-primary font-medium hover:underline flex items-center gap-2 text-sm sm:text-base">
                Meet Our Team <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Services Section - responsive grid
function ServicesSection() {
  const services = [
    {
      icon: MessageCircle,
      title: "Counseling Services",
      description: "Free, confidential counseling sessions with qualified therapists. No medication, only pure interaction in a safe environment.",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Brain,
      title: "Mental Health Assessment",
      description: "Self-assessment tools to understand your mental health better. Tests for anxiety, depression, and social media addiction.",
      color: "bg-chart-1/20 text-chart-1"
    },
    {
      icon: Users,
      title: "Peer Support Groups",
      description: "Connect with fellow students who understand your journey. Share experiences and grow together in a supportive community.",
      color: "bg-chart-3/20 text-chart-3"
    },
    {
      icon: Sparkles,
      title: "Wellness Workshops",
      description: "Regular workshops on stress management, mindfulness, yoga, and other wellness practices to help you thrive.",
      color: "bg-chart-5/20 text-chart-5"
    },
    {
      icon: Shield,
      title: "Safe & Confidential",
      description: "Everything shared with us stays confidential. There is no stigma attached to seeking help — your wellbeing matters.",
      color: "bg-chart-2/20 text-chart-2"
    },
    {
      icon: Calendar,
      title: "Regular Events",
      description: "Mental health awareness campaigns, interactive sessions, and community events throughout the year.",
      color: "bg-accent text-primary"
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-secondary/30 relative">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <motion.span 
            variants={fadeInUp}
            className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6"
          >
            What We Do
          </motion.span>
          <motion.h2 
            variants={fadeInUp}
            className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6"
          >
            Supporting Your Journey
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-sm sm:text-base md:text-lg text-foreground/70 max-w-2xl mx-auto px-2"
          >
            We offer a comprehensive range of services to help you navigate life's challenges 
            and maintain your mental wellness.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="h-full bg-white/80 backdrop-blur-sm border-0 soft-shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1 rounded-xl sm:rounded-2xl">
                <CardContent className="p-5 sm:p-6 md:p-8">
                  <div className={`w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl ${service.color} flex items-center justify-center mb-4 sm:mb-5 md:mb-6`}>
                    <service.icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Benefits Section - responsive layout with stacking on mobile
function BenefitsSection() {
  const benefits = [
    {
      title: "Personal Growth",
      description: "Develop emotional intelligence, resilience, and self-awareness through our programs."
    },
    {
      title: "Community Connection",
      description: "Be part of a supportive community that understands and values mental wellness."
    },
    {
      title: "Skill Development",
      description: "Learn practical coping strategies, stress management, and mindfulness techniques."
    },
    {
      title: "Leadership Opportunities",
      description: "Take on roles within the society and make a real difference in others' lives."
    },
    {
      title: "Exclusive Events",
      description: "Access to workshops, seminars, and events focused on holistic wellbeing."
    },
    {
      title: "Certificate Recognition",
      description: "Receive recognition for your contributions to mental health awareness."
    }
  ];

  return (
    <section id="benefits" className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-40 sm:w-64 h-40 sm:h-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-48 sm:w-80 h-48 sm:h-80 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.span 
              variants={fadeInUp}
              className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-chart-1/20 text-chart-4 text-xs sm:text-sm font-medium mb-4 sm:mb-6"
            >
              Member Benefits
            </motion.span>
            <motion.h2 
              variants={fadeInUp}
              className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight"
            >
              What You Gain as a Member
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-sm sm:text-base md:text-lg text-foreground/70 mb-6 sm:mb-8 md:mb-10"
            >
              Joining Raahat isn't just about receiving support — it's about becoming part of 
              a movement that values mental wellness and personal growth.
            </motion.p>

            <motion.div variants={staggerContainer} className="space-y-3 sm:space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index} 
                  variants={fadeInUp}
                  className="flex gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors"
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base text-foreground mb-0.5 sm:mb-1">{benefit.title}</h4>
                    <p className="text-xs sm:text-sm text-foreground/70">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image - shows below on mobile, right on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden soft-shadow">
              <img 
                src={IMAGES.growth} 
                alt="Personal growth and transformation" 
                className="w-full h-auto"
              />
            </div>
            {/* Decorative elements - smaller on mobile */}
            <div className="absolute -top-3 -left-3 sm:-top-6 sm:-left-6 w-16 sm:w-24 h-16 sm:h-24 rounded-2xl bg-chart-1/20 -z-10" />
            <div className="absolute -bottom-3 -right-3 sm:-bottom-6 sm:-right-6 w-20 sm:w-32 h-20 sm:h-32 rounded-full bg-primary/10 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Initiatives Section - responsive cards
function InitiativesSection() {
  const initiatives = [
    {
      title: "Mental Health Awareness Week",
      description: "Annual campaign featuring workshops, talks, and interactive sessions to break the stigma around mental health.",
      image: IMAGES.community,
      date: "Every October"
    },
    {
      title: "Wellness Wednesdays",
      description: "Weekly sessions focusing on different aspects of mental wellness — from meditation to art therapy.",
      image: IMAGES.meditation,
      date: "Every Wednesday"
    },
    {
      title: "Peer Counselor Training",
      description: "Training program to equip students with basic counseling skills to support their peers.",
      image: IMAGES.counseling,
      date: "Semester-wise"
    }
  ];

  return (
    <section id="initiatives" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-secondary/30 to-white">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <motion.span 
            variants={fadeInUp}
            className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-chart-5/20 text-chart-5 text-xs sm:text-sm font-medium mb-4 sm:mb-6"
          >
            Our Initiatives
          </motion.span>
          <motion.h2 
            variants={fadeInUp}
            className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6"
          >
            Past & Ongoing Activities
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-sm sm:text-base md:text-lg text-foreground/70 max-w-2xl mx-auto px-2"
          >
            Discover the various programs and events we organize to promote mental wellness 
            across our community.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8"
        >
          {initiatives.map((initiative, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="h-full bg-white border-0 soft-shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-2 rounded-xl sm:rounded-2xl overflow-hidden group">
                <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden">
                  <img 
                    src={initiative.image} 
                    alt={initiative.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 px-2.5 sm:px-3 py-1 rounded-full bg-white/90 text-[10px] sm:text-xs font-medium text-foreground">
                    {initiative.date}
                  </span>
                </div>
                <CardContent className="p-4 sm:p-5 md:p-6">
                  <h3 className="font-display text-base sm:text-lg md:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                    {initiative.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-foreground/70 leading-relaxed">
                    {initiative.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Assessment CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 sm:mt-12 md:mt-16 text-center"
        >
          <Card className="bg-gradient-to-r from-primary/10 via-accent/10 to-chart-5/10 border-0 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12">
            <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 sm:mb-4">
              Take Your First Step
            </h3>
            <p className="text-sm sm:text-base text-foreground/70 mb-4 sm:mb-6 max-w-xl mx-auto px-2">
              Awareness is key. Take a quick 5-minute self-assessment to understand your mental health better.
            </p>
            <Button asChild size="lg" className="rounded-full px-6 sm:px-8 text-sm sm:text-base">
              <a href="https://forms.gle/bxcFSdmaU9qoMeUW6" target="_blank" rel="noopener noreferrer">
                Take Assessment <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </Button>
            <p className="text-[10px] sm:text-xs text-muted-foreground mt-3 sm:mt-4">
              Note: This isn't a strict medical examination
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

// Council Section - structured with Founders, Secretary, Deputy Secretary, Event Coordinators
function CouncilSection() {
  // Founders row
  const founders = [
    { name: "Founder 1", role: "Co-Founder", icon: Star },
    { name: "Founder 2", role: "Co-Founder", icon: Star }
  ];

  // Leadership row
  const leadership = [
    { name: "Secretary", role: "Secretary", icon: Award },
    { name: "Deputy Secretary", role: "Deputy Secretary", icon: Shield }
  ];

  // Event Coordinators row
  const coordinators = [
    { name: "Event Coordinator 1", role: "Event Coordinator", icon: Calendar },
    { name: "Event Coordinator 2", role: "Event Coordinator", icon: Calendar }
  ];

  const renderMemberCard = (member: { name: string; role: string; icon: React.ComponentType<{ className?: string }> }, index: number, isFounder?: boolean) => (
    <motion.div key={index} variants={fadeInUp} className="text-center group">
      <div className="relative mb-3 sm:mb-4">
        <div className={`w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 ${isFounder ? 'lg:w-36 lg:h-36' : ''} mx-auto rounded-full bg-gradient-to-br ${isFounder ? 'from-chart-1/30 via-primary/20 to-chart-3/30' : 'from-primary/20 to-accent/30'} flex items-center justify-center overflow-hidden soft-shadow group-hover:shadow-lg transition-all duration-300`}>
          <Users className={`${isFounder ? 'h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14' : 'h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12'} text-primary/50`} />
        </div>
        {/* Decorative ring */}
        <div className={`absolute inset-0 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 ${isFounder ? 'lg:w-36 lg:h-36' : ''} mx-auto rounded-full border-2 ${isFounder ? 'border-chart-1/30' : 'border-primary/20'} scale-110 group-hover:scale-125 transition-transform duration-300`} />
      </div>
      <div className="flex items-center justify-center gap-1.5 mb-1">
        <member.icon className={`h-3 w-3 sm:h-3.5 sm:w-3.5 ${isFounder ? 'text-chart-1' : 'text-primary/70'}`} />
        <span className={`text-[10px] sm:text-xs font-semibold uppercase tracking-wider ${isFounder ? 'text-chart-1' : 'text-primary/70'}`}>
          {member.role}
        </span>
      </div>
      <h4 className="font-semibold text-sm sm:text-base md:text-lg text-foreground px-1">{member.name}</h4>
    </motion.div>
  );

  return (
    <section id="council" className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-gradient-to-br from-primary/10 to-accent/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 sm:w-80 h-48 sm:h-80 rounded-full bg-gradient-to-tr from-chart-1/10 to-chart-5/20 blur-3xl" />
      </div>

      <div className="container relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <motion.span 
            variants={fadeInUp}
            className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6"
          >
            Our Team
          </motion.span>
          <motion.h2 
            variants={fadeInUp}
            className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6"
          >
            Society Council
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-sm sm:text-base md:text-lg text-foreground/70 max-w-2xl mx-auto px-2"
          >
            Meet the dedicated individuals who lead Raahat and work tirelessly to support 
            the mental wellness of our community.
          </motion.p>
        </motion.div>

        {/* Founders Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="mb-10 sm:mb-12 md:mb-14"
        >
          <motion.h3 
            variants={fadeInUp}
            className="text-center font-display text-lg sm:text-xl md:text-2xl font-semibold text-foreground mb-6 sm:mb-8"
          >
            <span className="inline-flex items-center gap-2">
              <Star className="h-4 w-4 sm:h-5 sm:w-5 text-chart-1" />
              Founders
              <Star className="h-4 w-4 sm:h-5 sm:w-5 text-chart-1" />
            </span>
          </motion.h3>
          <div className="flex justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-20">
            {founders.map((member, index) => renderMemberCard(member, index, true))}
          </div>
        </motion.div>

        {/* Leadership Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="mb-10 sm:mb-12 md:mb-14"
        >
          <motion.h3 
            variants={fadeInUp}
            className="text-center font-display text-lg sm:text-xl md:text-2xl font-semibold text-foreground mb-6 sm:mb-8"
          >
            Leadership
          </motion.h3>
          <div className="flex justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-20">
            {leadership.map((member, index) => renderMemberCard(member, index))}
          </div>
        </motion.div>

        {/* Event Coordinators Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.h3 
            variants={fadeInUp}
            className="text-center font-display text-lg sm:text-xl md:text-2xl font-semibold text-foreground mb-6 sm:mb-8"
          >
            Event Coordinators
          </motion.h3>
          <div className="flex justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-20">
            {coordinators.map((member, index) => renderMemberCard(member, index))}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-muted-foreground mt-10 sm:mt-12 text-xs sm:text-sm"
        >
          Council member names and photos will be updated soon. Stay tuned!
        </motion.p>
      </div>
    </section>
  );
}

// Join Section - Direct link to Google Form membership
function JoinSection() {
  const membershipFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdrt3mQJ0OTl_n7lBOs7DmgSaM1GKflVHmWleZD_0oWpTEvsQ/viewform";

  const benefits = [
    { icon: Heart, text: "Access to free counseling sessions" },
    { icon: Users, text: "Join a supportive peer community" },
    { icon: Sparkles, text: "Exclusive workshops & wellness events" },
    { icon: Award, text: "Leadership & volunteering opportunities" },
    { icon: Brain, text: "Mental health resources & self-assessments" },
    { icon: Shield, text: "Safe, confidential, and judgment-free space" }
  ];

  return (
    <section id="join" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-accent/20 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src={IMAGES.heroBg} 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="text-center mb-8 sm:mb-10 md:mb-12"
          >
            <motion.span 
              variants={fadeInUp}
              className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-chart-3/20 text-chart-3 text-xs sm:text-sm font-medium mb-4 sm:mb-6"
            >
              Join Us
            </motion.span>
            <motion.h2 
              variants={fadeInUp}
              className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6"
            >
              Become a Part of Raahat
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-sm sm:text-base md:text-lg text-foreground/70 max-w-2xl mx-auto px-2"
            >
              Join our community of students committed to mental wellness.
              Take the first step towards a healthier, happier you.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-white/90 backdrop-blur-sm border-0 soft-shadow rounded-2xl sm:rounded-3xl overflow-hidden">
              <CardContent className="p-6 sm:p-8 md:p-10 lg:p-14">
                {/* Why Join section */}
                <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground text-center mb-6 sm:mb-8">
                  Why Join Raahat?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-secondary/40 hover:bg-secondary/60 transition-colors">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="h-4 w-4 sm:h-4.5 sm:w-4.5 text-primary" />
                      </div>
                      <span className="text-sm sm:text-base text-foreground/80">{benefit.text}</span>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div className="flex items-center gap-4 mb-8 sm:mb-10">
                  <div className="flex-1 h-px bg-border/50" />
                  <span className="text-xs sm:text-sm text-muted-foreground font-medium">Ready to join?</span>
                  <div className="flex-1 h-px bg-border/50" />
                </div>

                {/* CTA */}
                <div className="text-center">
                  <p className="text-sm sm:text-base text-foreground/70 mb-5 sm:mb-6 max-w-lg mx-auto">
                    Fill out our membership form to become a part of the Raahat family. 
                    It only takes a couple of minutes!
                  </p>
                  <Button 
                    asChild 
                    size="lg" 
                    className="rounded-full px-8 sm:px-10 md:px-12 text-sm sm:text-base md:text-lg h-12 sm:h-14 shadow-lg hover:shadow-xl transition-all"
                  >
                    <a href={membershipFormUrl} target="_blank" rel="noopener noreferrer">
                      Open Membership Form <ExternalLink className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                    </a>
                  </Button>
                  <p className="text-[10px] sm:text-xs text-muted-foreground mt-3 sm:mt-4">
                    You'll be redirected to a Google Form
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Footer - responsive grid
function Footer() {
  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Our Services", href: "#services" },
    { label: "Initiatives", href: "#initiatives" },
    { label: "Join Us", href: "#join" }
  ];

  return (
    <footer className="bg-foreground text-white py-10 sm:py-12 md:py-16">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-10 md:mb-12">
          {/* Brand */}
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <img src={IMAGES.logo} alt="Raahat Logo" className="h-10 sm:h-12 w-auto" />
              <span className="font-display text-xl sm:text-2xl font-semibold">Raahat</span>
            </div>
            <p className="text-white/70 leading-relaxed mb-4 sm:mb-6 max-w-md text-sm sm:text-base">
              The Mental Health and Wellness Society of IIT Madras BS in Data Science. 
              Promoting happiness, tranquility, and sanity since our inception.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-base sm:text-lg font-semibold mb-4 sm:mb-6">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-base sm:text-lg font-semibold mb-4 sm:mb-6">Get in Touch</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-2 sm:gap-3">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-white/70 text-sm sm:text-base break-all">raahat@study.iitm.ac.in</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-white/70 text-sm sm:text-base">IIT Madras BS in Data Science</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-white/50 text-xs sm:text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Raahat - Mental Health and Wellness Society. All rights reserved.
          </p>
          <p className="text-white/50 text-xs sm:text-sm">
            Made with <Heart className="h-3 w-3 sm:h-4 sm:w-4 inline text-primary" /> for mental wellness
          </p>
        </div>
      </div>
    </footer>
  );
}

// Main Home Component
export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <BenefitsSection />
      <InitiativesSection />
      <CouncilSection />
      <JoinSection />
      <Footer />
    </div>
  );
}
