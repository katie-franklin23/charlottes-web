import Posts from './Posts'
import OtherBlogs from './OtherBlogs'
import RecentEntries from './RecentEntries'
import Header from './Header'
import Footer from './Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <section className="middle-section">
        <OtherBlogs />
        <Posts />
        <RecentEntries />
      </section>

      <Footer />
    </div>
  )
}

export default App
