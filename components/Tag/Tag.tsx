const Tag = ({ genre }: { genre: string }) => (
  <div
    className={`h-min rounded-md py-1 px-2 text-sm font-semibold ${
      genre === 'Drum & Bass'
        ? 'bg-green-700'
        : genre === 'New'
        ? 'bg-blue-700'
        : 'bg-white'
    }`}
  >
    {genre}
  </div>
)

export default Tag
