interface SectionHeaderProps {
  title: string
  description: string
}

const SectionHeader = ({ title, description }: SectionHeaderProps) => (
  <header className="justify-start mb-4">
    <h1 className="text-2xl font-medium text-primary justify-left text-left text-shadow-md">{title}</h1>
    <h2 className="text-xl font-medium text-accent justify-left text-left text-shadow-md">{description}</h2>
  </header>
)

export default SectionHeader