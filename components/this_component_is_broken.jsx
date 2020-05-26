import dynamic from 'next/dynamic'

export default function ThisComponentIsBroken () {
  if (typeof window !== 'undefined') {
    const Phaser = dynamic(
      () => import('phaser'),
      { ssr: false }
    )

    console.log('This returns a LoadableComponent', Phaser)

    var game = new Phaser.Game({
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      canvas: 'gameCanvas',
      scene: {
        preload: preload,
        create: create
      }
    })
  }

  function preload () {
    console.log('Preloada ai!')
  }

  function create () {
    console.log('Phaser foi criado!')
  }


  return (
    <div>
      <canvas id="gameCanvas"></canvas>
    </div>
  )
}
