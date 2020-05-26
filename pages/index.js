import Head from 'next/head'
import ThisModuleWorks from '../components/this_module_works'
import ThisModuleIsBroken from '../components/this_component_is_broken'

export default function Home() {
  ThisModuleWorks()

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Hello Issue!</h1>

        <ThisModuleIsBroken></ThisModuleIsBroken>
      </main>
    </div>
  )
}
