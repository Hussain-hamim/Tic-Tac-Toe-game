import { LevelContext } from "./LevelContext";

export default function Section({ level, children }) {
  return (
    // provide context
    <section className="section">
      <LevelContext.Provider value={level}>{children}</LevelContext.Provider>
    </section>
  );
}
