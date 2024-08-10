'use server'
import './App.css'
import { Card } from './components/Card'

const HomePage: React.FC = () => {
  return (
    <main className="main">
      <h1 className="main-title">My Vite-Bun App</h1>
      <section className="container">
        <Card title="Ikälaskuri" />
      </section>
    </main>
  )
}

export default HomePage;