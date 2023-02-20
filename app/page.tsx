import Link from 'next/link'

const Page = () => {
  return (
    <div>
      <h1 className="text-center text-2xl">
        Welcome to
        <br />
        <span className="text-5xl">COEGI</span>
      </h1>
      <Link href={'/follow'}>Follow</Link>
    </div>
  )
}

export default Page
