'use client';

import { useState } from 'react';

export default function LocationSearch() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <section className="location-search-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h2 className="location-title">Lorem ipsum dolor sit</h2>
            <p className="location-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="btn btn-dark btn-learn-more">Learn More</button>
            
            <form onSubmit={handleSearch} className="location-search-form">
              <div className="search-input-wrapper">
                <input
                  type="text"
                  className="form-control location-search-input"
                  placeholder="OR search location"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-icon-btn" aria-label="Search">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </button>
              </div>
              <a href="#" className="view-all-link">View all Locations →</a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
