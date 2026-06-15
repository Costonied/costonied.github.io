import type { ProjectItem } from '../data/projects';
import { ExternalLinkIcon } from '../icons';

export function ProjectCard({ title, status, href, linkLabel, description }: ProjectItem) {
  return (
    <article className="project">
      <h2>{title}</h2>

      {status && (
        <div className="project-status-row">
          <span className={`status-pill status-${status.variant}`}>{status.label}</span>
        </div>
      )}

      <a href={href} target="_blank" rel="noopener noreferrer" className="project-link">
        <ExternalLinkIcon />
        {linkLabel}
      </a>

      <p>{description}</p>
    </article>
  );
}
