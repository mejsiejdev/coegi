const Tag = ({ genre }: { genre: string }) => (
  <div
    className={`h-min rounded-md py-1 px-2 text-sm font-semibold ${
      genre === 'Drum & Bass'
        ? 'bg-green-700'
        : genre === 'House'
        ? 'bg-blue-700'
        : genre === 'Trance'
        ? 'bg-violet-700'
        : 'bg-red-700'
    }`}
  >
    {genre}
  </div>
)

export default Tag
