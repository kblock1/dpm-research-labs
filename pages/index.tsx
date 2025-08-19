import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout title="Home">
      <h1>Welcome to DPM Labs</h1>
      <p>
        At DPM Labs, we specialize in transforming business challenges
        into innovation opportunities through cutting-edge AI research.
      </p>

      <p>AI is advancing at unprecedented speed. Businesses face two main choices:</p>

      <div className="mb-4">
        <h3>External Investment</h3>
        <p>Buy into platforms, SaaS subscriptions, or shares in other companies. This gives access to technology but not control. You remain dependent on vendor roadmaps, black-box systems, and the same tools competitors can access. The spend is consumable-once paid, it's gone.</p>

        <h3>Internal Investment</h3>
        <p>Build in-house AI systems and teams. This creates proprietary capability and IP but requires significant up-front cost, niche recruitment, and long-term staff commitments. Many companies cannot carry this risk or overhead.</p>
      </div>

      <h2>DPM Labs is the best of both worlds.</h2>

      <ul>
        <li>You keep all IP generated. The outputs remain an owned business asset.</li>
        <li>You gain access to top-tier AI researchers embedded into your environment without needing to hire permanent staff.</li>
        <li>You avoid the long lead time and overhead of recruitment and employment contracts.</li>
        <li>Engagement is focused and predictable, providing continuity without the risk of excess headcount.</li>
        <li>Your staff learn alongside the lab, so capability transfers into your business.</li>
      </ul>

      <p>
        This model converts AI from speculation into capability. Instead of betting on external platforms, you embed operational leverage directly into your own processes. The result is short-term efficiency gains and long-term competitive advantage delivered with speed, flexibility, and ownership.
      </p>

      <a href="/services">Explore Our Services →</a>
    </Layout>
  )
}