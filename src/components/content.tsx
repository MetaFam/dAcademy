interface ContentProps {
  active: string;
  content: string;
}

export default function Content({ active, content }: ContentProps) {
  return (
    <div id="content" className="flex-grow">
      <div className="card bg-transparent max-w-md mt-4 mx-auto">
        <h2 className="text-lg font-bold text-left">Quest {active} Content:</h2>
        <p className="text-sm text-secondary">{content}</p>
      </div>
    </div>
  )
}