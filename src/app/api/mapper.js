export const mapSectionsToVM = sections =>
  sections.map(section => ({ term: section.title, description: section.content }));
