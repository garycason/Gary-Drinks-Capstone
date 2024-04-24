// src/components/HomePage/HomePage.jsx

import { Link } from 'react-router-dom'
import './HomePage.css'

const HomePage = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Garretts Bar!</h1>
      <p>Discover and share your favorite cocktail recipes.</p>

      {/* Featured Drink Section */}
      <section className="featured-drink">
        <h2>Drink of the Day: Mojito</h2>
        <img src="/images/mojito.webp" alt="Mojito" />
        <p>A refreshing classic rum and mint cocktail. Perfect for sipping poolside!</p>
        <Link to="/drinks/mojito">Learn how to make it</Link>
      </section>

      {/* Search Bar */}
      <section className="search-bar">
        <input type="text" placeholder="Search for a drink..." />
        <button>Search</button>
      </section>

      {/* Navigation Links */}
      <nav className="home-nav">
        <Link to="/drinks">All Drinks</Link>
        <Link to="/add-drink">Add New Drink</Link>
        {/* Add other links as needed */}
      </nav>
    </div>
  )
}

export default HomePage
