function Skills() {
    const tools = ['Rider', 'VS Code', 'Visual Studio', 'Git', 'Notion', 'Unity', 'Unreal Engine']
    const languages = ['C#', 'C/C++', 'Java']

  return (
      <div className="Skills border-t-1 p-8">
      <h1 className="text-3xl font-bold mb-6">SKILLS</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Tools</h2>
        <div className="flex flex-wrap gap-3">
          {tools.map((tool) => (
            <SkillTag key={tool} label={tool} variant="tool" />
        ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Languages</h2>
        <div className="flex flex-wrap gap-3">
          {languages.map((language) => (
            <SkillTag key={language} label={language} variant="language" />
        ))}
        </div>
      </section>
    </div>
  )
}
export default Skills

function SkillTag(props: { label: string; variant?: 'tool' | 'language' }) {
  const { label, variant = 'tool' } = props
  const base = 'rounded-2xl border px-4 py-2 text-sm font-medium shadow-sm'
  const variantClass =
    variant === 'tool'
      ? 'border-slate-300/50 bg-white/80 text-slate-700'
      : 'border-slate-300/50 bg-gray-100 text-slate-900'
  return <span className={`${base} ${variantClass}`}>{label}</span>
}
