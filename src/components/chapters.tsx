export default function Chapters({ onChange, active }) {
  const chapters = ['Chapter', 'Chapter', 'Chapter']

  return (
    <ol id="chapters" className="flex flex-col max-w-md mt-4 mr-10">
      {chapters.map((chapter, index) => (
        <li key={index} className="card bg-base-100 shadow-md p-3" onClick={() => onChange(index)}>
          <h2 className="text-lg font-bold text-left">
            {active === index + 1 ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              `${index + 1} `
            )}
            {chapter}
          </h2>
        </li>
      ))}
    </ol>
  )
}
