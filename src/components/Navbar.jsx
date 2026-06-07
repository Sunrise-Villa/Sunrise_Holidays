import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
const sunLogoImg = "https://cdn.jsdelivr.net/gh/Sunrise-Villa/Sunrise_Holidays@main/src/assets/sun_logo.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDestDropdownOpen, setIsDestDropdownOpen] = useState(false);
  const [isPkgDropdownOpen, setIsPkgDropdownOpen] = useState(false);
  const [isMobileDestOpen, setIsMobileDestOpen] = useState(false);
  const [isMobilePkgOpen, setIsMobilePkgOpen] = useState(false);
  const destDropdownRef = useRef(null);
  const pkgDropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (destDropdownRef.current && !destDropdownRef.current.contains(event.target)) {
        setIsDestDropdownOpen(false);
      }
      if (pkgDropdownRef.current && !pkgDropdownRef.current.contains(event.target)) {
        setIsPkgDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="nav-logo" aria-label="Sunrise Holidays Home" onClick={() => setIsMobileMenuOpen(false)}>
          <img src={sunLogoImg} alt="Sunrise Holidays" className="nav-logo-img" width="38" height="38" fetchpriority="high" />
          <span className="nav-brand-name">Sunrise Holidays</span>
        </Link>

        <div className="nav-links desktop-only">
          <NavLink to="/" className="nav-link" activeclassname="active">Home</NavLink>
          
          {/* Destinations Dropdown */}
          <div 
            className="nav-dropdown" 
            ref={destDropdownRef}
            onMouseEnter={() => setIsDestDropdownOpen(true)}
            onMouseLeave={() => setIsDestDropdownOpen(false)}
          >
            <button 
              className={`nav-dropdown-trigger ${isDestDropdownOpen ? 'active' : ''}`}
              onClick={() => setIsDestDropdownOpen(!isDestDropdownOpen)}
              aria-haspopup="true"
              aria-expanded={isDestDropdownOpen}
            >
              Destinations <ChevronDown size={14} className="dropdown-chevron" />
            </button>
            <div className={`nav-dropdown-menu ${isDestDropdownOpen ? 'show' : ''}`}>
              <NavLink to="/destinations/shimla" className="nav-dropdown-item" onClick={() => setIsDestDropdownOpen(false)}>
                Shimla
              </NavLink>
              <NavLink to="/destinations/manali" className="nav-dropdown-item" onClick={() => setIsDestDropdownOpen(false)}>
                Manali
              </NavLink>
              <NavLink to="/destinations/kasol" className="nav-dropdown-item" onClick={() => setIsDestDropdownOpen(false)}>
                Kasol
              </NavLink>
              <NavLink to="/destinations/jibhi" className="nav-dropdown-item" onClick={() => setIsDestDropdownOpen(false)}>
                Jibhi
              </NavLink>
              <NavLink to="/destinations/spiti" className="nav-dropdown-item" onClick={() => setIsDestDropdownOpen(false)}>
                Spiti
              </NavLink>
              <NavLink to="/destinations/dalhousie" className="nav-dropdown-item" onClick={() => setIsDestDropdownOpen(false)}>
                Dalhousie
              </NavLink>
            </div>
          </div>

          {/* Packages Dropdown */}
          <div 
            className="nav-dropdown" 
            ref={pkgDropdownRef}
            onMouseEnter={() => setIsPkgDropdownOpen(true)}
            onMouseLeave={() => setIsPkgDropdownOpen(false)}
          >
            <button 
              className={`nav-dropdown-trigger ${isPkgDropdownOpen ? 'active' : ''}`}
              onClick={() => setIsPkgDropdownOpen(!isPkgDropdownOpen)}
              aria-haspopup="true"
              aria-expanded={isPkgDropdownOpen}
            >
              Packages <ChevronDown size={14} className="dropdown-chevron" />
            </button>
            <div className={`nav-dropdown-menu ${isPkgDropdownOpen ? 'show' : ''}`}>
              <NavLink to="/packages/honeymoon" className="nav-dropdown-item" onClick={() => setIsPkgDropdownOpen(false)}>
                Honeymoon
              </NavLink>
              <NavLink to="/packages/family" className="nav-dropdown-item" onClick={() => setIsPkgDropdownOpen(false)}>
                Family
              </NavLink>
              <NavLink to="/packages/circuit" className="nav-dropdown-item" onClick={() => setIsPkgDropdownOpen(false)}>
                Circuit Plans
              </NavLink>
              <NavLink to="/packages/weekend" className="nav-dropdown-item" onClick={() => setIsPkgDropdownOpen(false)}>
                Weekend
              </NavLink>
            </div>
          </div>

          <NavLink to="/about" className="nav-link" activeclassname="active">About Us</NavLink>
          
          <NavLink to="/custom-trip" className="btn-nav-custom" activeclassname="active">
            <Sparkles size={14} />
            <span>Trip Planner</span>
            <span className="badge-new">NEW</span>
          </NavLink>
        </div>

        <div className="nav-actions desktop-only">
          <Link to="/contact" className="btn btn-primary">Book a Trip</Link>
        </div>

        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="mobile-drawer glass-panel">
          <div className="mobile-links">
            <NavLink to="/" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>Home</NavLink>
            
            {/* Mobile Destinations Accordion */}
            <div className="mobile-dropdown-section">
              <button 
                className="mobile-link mobile-dropdown-trigger" 
                onClick={() => setIsMobileDestOpen(!isMobileDestOpen)}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', textAlign: 'left' }}
              >
                <span>Destinations</span>
                <ChevronDown size={18} style={{ transform: isMobileDestOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
              </button>
              {isMobileDestOpen && (
                <div className="mobile-dropdown-submenu">
                  <NavLink to="/destinations/shimla" className="mobile-submenu-link" onClick={() => setIsMobileMenuOpen(false)}>Shimla</NavLink>
                  <NavLink to="/destinations/manali" className="mobile-submenu-link" onClick={() => setIsMobileMenuOpen(false)}>Manali</NavLink>
                  <NavLink to="/destinations/kasol" className="mobile-submenu-link" onClick={() => setIsMobileMenuOpen(false)}>Kasol</NavLink>
                  <NavLink to="/destinations/jibhi" className="mobile-submenu-link" onClick={() => setIsMobileMenuOpen(false)}>Jibhi</NavLink>
                  <NavLink to="/destinations/spiti" className="mobile-submenu-link" onClick={() => setIsMobileMenuOpen(false)}>Spiti</NavLink>
                  <NavLink to="/destinations/dalhousie" className="mobile-submenu-link" onClick={() => setIsMobileMenuOpen(false)}>Dalhousie</NavLink>
                </div>
              )}
            </div>

            {/* Mobile Packages Accordion */}
            <div className="mobile-dropdown-section">
              <button 
                className="mobile-link mobile-dropdown-trigger" 
                onClick={() => setIsMobilePkgOpen(!isMobilePkgOpen)}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', textAlign: 'left' }}
              >
                <span>Packages</span>
                <ChevronDown size={18} style={{ transform: isMobilePkgOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
              </button>
              {isMobilePkgOpen && (
                <div className="mobile-dropdown-submenu">
                  <NavLink to="/packages/honeymoon" className="mobile-submenu-link" onClick={() => setIsMobileMenuOpen(false)}>Honeymoon</NavLink>
                  <NavLink to="/packages/family" className="mobile-submenu-link" onClick={() => setIsMobileMenuOpen(false)}>Family</NavLink>
                  <NavLink to="/packages/circuit" className="mobile-submenu-link" onClick={() => setIsMobileMenuOpen(false)}>Circuit Plans</NavLink>
                  <NavLink to="/packages/weekend" className="mobile-submenu-link" onClick={() => setIsMobileMenuOpen(false)}>Weekend</NavLink>
                </div>
              )}
            </div>

            <NavLink to="/about" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>About Us</NavLink>
            
            <NavLink to="/custom-trip" className="mobile-link mobile-custom-trip-highlight" onClick={() => setIsMobileMenuOpen(false)}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Sparkles size={16} style={{ color: 'var(--primary)' }} />
                Trip Planner
              </span>
              <span className="badge-new-mobile">NEW</span>
            </NavLink>
            
            <Link to="/contact" className="btn btn-primary w-full" onClick={() => setIsMobileMenuOpen(false)}>Book a Trip</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

