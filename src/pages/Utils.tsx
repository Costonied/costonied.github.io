import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { ProjectCard } from '../components/ProjectCard';
import { utils } from '../data/projects';

export default function Utils() {
  usePageMeta({ title: 'Utils — Igor Savin' });

  return (
    <main className="card card-projects">
      <h1>Utils</h1>
      <p className="description">Useful utils designed for personal and team use</p>

      {utils.map((util) => (
        <ProjectCard key={util.title} {...util} />
      ))}

      <nav className="nav-links" aria-label="Site sections">
        <Link to="/" className="projects-link">
          &lt; Back to Home
        </Link>
      </nav>
    </main>
  );
}
