const Button = ({
  children,
  onClick,
  slim,
  secondary,
}: {
  children: React.ReactNode
  onClick?: () => void
  slim?: boolean
  secondary?: boolean
}) => (
  <>
    {onClick ? (
      <button
        onClick={onClick}
        className={`w-full rounded-md ${
          secondary
            ? 'bg-transparent text-neutral-300 hover:bg-neutral-800'
            : 'bg-white text-neutral-900'
        } px-4 ${slim ? 'py-1' : 'py-2'} text-center text-lg font-semibold`}
      >
        {children}
      </button>
    ) : (
      <div
        className={`w-full rounded-md ${
          secondary
            ? 'bg-transparent text-neutral-300 hover:bg-neutral-800'
            : 'bg-white text-neutral-900'
        } px-4 ${slim ? 'py-1' : 'py-2'} text-center text-lg font-semibold`}
      >
        {children}
      </div>
    )}
  </>
)

export default Button