import { useState } from 'react'
import './style.css'
import billie from './assets/billie.jpg'
import bruno from './assets/bruno.jpg'

function App() {
  const [search, setSearch] = useState('')
  const [activePage, setActivePage] = useState('Home')

  const artists = [
    {
      name: 'Billie Eilish',
      album: 'HIT ME HARD AND SOFT',
      image: billie,
      songs: [
        'Happier Than Ever',
        'Therefore I Am',
        'Ocean Eyes',
        'BIRDS OF A FEATHER',
        'WILDFLOWER',
        'THE GREATEST',
      ],
    },
    {
      name: 'Bruno Mars',
      album: 'Popular Songs',
      image: bruno,
      songs: [
        'Die With A Smile',
        'Just the Way You Are',
        'When I Was Your Man',
        'Talking to the Moon',
        'Locked Out of Heaven',
        '24K Magic',
      ],
    },
  ]

  const filteredArtists = artists
    .map((artist) => ({
      ...artist,
      songs: artist.songs.filter((song) =>
        `${song} ${artist.name}`
          .toLowerCase()
          .includes(search.toLowerCase())
      ),
    }))
    .filter((artist) => artist.songs.length > 0)

  return (
    <div className="app">
      <aside className="sidebar">
        <h2 className="logo">♫ Melody</h2>

        <button
          className={activePage === 'Home' ? 'nav active' : 'nav'}
          onClick={() => {
            setActivePage('Home')
            setSearch('')
          }}
        >
          🏠 Home
        </button>

        <button
          className={activePage === 'Search' ? 'nav active' : 'nav'}
          onClick={() => setActivePage('Search')}
        >
          🔍 Search
        </button>

        <button
          className={activePage === 'Library' ? 'nav active' : 'nav'}
          onClick={() => setActivePage('Library')}
        >
          🎵 Your Library
        </button>
      </aside>

      <main className="main">
        {activePage === 'Search' && (
          <input
            className="search"
            type="text"
            placeholder="Search songs or artists..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        )}

        <h1>
          {activePage === 'Home'
            ? 'Welcome to Melody 🎧'
            : activePage === 'Search'
              ? 'Search Music'
              : 'Your Library'}
        </h1>

        {activePage === 'Home' && (
          <p className="subtitle">Your favorite music in one place.</p>
        )}

        {activePage === 'Library' && (
          <p className="subtitle">Browse your available artists and songs.</p>
        )}

        {activePage !== 'Search' && (
          <input
            className="search"
            type="text"
            placeholder="Search songs or artists..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        )}

        <div className="albums">
          {filteredArtists.map((artist) => (
            <div className="album" key={artist.name}>
              <div className="album-header">
                <img src={artist.image} alt={artist.name} />

                <div>
                  <p className="label">ARTIST / ALBUM</p>
                  <h2>{artist.album}</h2>
                  <p>{artist.name}</p>
                  <p>{artist.songs.length} songs</p>
                </div>
              </div>

              <h3>Songs</h3>

              <div className="song-list">
                {artist.songs.map((song, index) => (
                  <div className="song" key={song}>
                    <span className="number">{index + 1}</span>
                    <span className="song-name">{song}</span>
                    <span className="music-icon">♫</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {filteredArtists.length === 0 && (
            <p className="subtitle">No songs found. Try another search.</p>
          )}
        </div>
      </main>
    </div>
  )
}

export default App