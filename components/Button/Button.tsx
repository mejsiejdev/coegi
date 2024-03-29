const Button = ({
  children,
  onClick,
  highlight,
  slim,
  type,
}: {
  children: React.ReactNode
  onClick?: () => void
  slim?: boolean
  highlight?: boolean
  type?: 'primary' | 'secondary' | 'tertiary'
}) => (
  <>
    {onClick ? (
      <button
        onClick={onClick}
        className={`rounded-md ${
          type === 'tertiary'
            ? 'bg-transparent text-neutral-300 hover:bg-neutral-800'
            : type === 'secondary'
            ? 'border-2 border-white text-white'
            : 'bg-white text-neutral-900'
        } px-4 ${slim ? 'py-1' : 'py-2'} text-center text-lg font-semibold`}
      >
        {children}
      </button>
    ) : (
      <div
        className={`rounded-md ${
          type === 'tertiary'
            ? `text-neutral-300 ${
                highlight
                  ? 'bg-neutral-700'
                  : `bg-transparent hover:bg-neutral-800`
              }`
            : type === 'secondary'
            ? 'border-2 border-white text-white'
            : 'bg-white text-neutral-900'
        } px-4 ${slim ? 'py-1' : 'py-2'} text-center text-lg font-semibold`}
      >
        {children}
      </div>
    )}
  </>
)

export default Button
