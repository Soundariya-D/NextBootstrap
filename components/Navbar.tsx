'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
      <div className="container">
        <Link href="/" className="navbar-brand fw-bold">
          EQUITEQ
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/what-we-do" className="nav-link">
                What We Do
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/our-firm" className="nav-link">
                Our Firm
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/careers" className="nav-link">
                Careers
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/news-research" className="nav-link">
                News & Research
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/competitor-transactions" className="nav-link">
                Competitor Transactions
              </Link>
            </li>
            <li className="nav-item">
              <button className="btn btn-link nav-link" aria-label="Search">
                <svg
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
