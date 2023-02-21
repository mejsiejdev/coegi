const Follow = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-10 flex h-full min-h-screen w-full flex-col items-center justify-center bg-black/50 p-4">
      <div className="rounded-md bg-neutral-800 p-4">
        <div className="flex flex-row items-center gap-8">
          <p className="text-xl">Follow</p>
          <button
            className="w-min pl-4 font-icons text-3xl text-white"
            title="Close"
            onClick={onClose}
          >
            close
          </button>
        </div>
      </div>
    </div>
  )
}

export default Follow
