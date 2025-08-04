import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

const Layout = ({ children, title }: LayoutProps) => (
  <div>
    <h1>{title}</h1>
    {children}
  </div>
)

export default function About() {
  return (
    <Layout title="About">
      <h1>About DPM Research Labs</h1>
      <p>
        We have the skills, processes, and laboratory environment to drive AI
        innovation. Our team has delivered advanced AI R&D for multinational
        banks and top tech consultancies.
      </p>
      <p>
        With a proven methodology and world-class expertise, we help businesses
        leverage the full potential of artificial intelligence - on time and on
        budget.
      </p>
    </Layout>
  )
}