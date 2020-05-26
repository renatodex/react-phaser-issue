export default async function ThisModuleWorks () {
  if (typeof window !== 'undefined') {
    const Phaser = await import('phaser')

    var game = new Phaser.Game({
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      scene: {
        preload: preload,
        create: create
      }
    })
  }

  function preload () {
    console.log('Game is Preloaded.')
  }

  function create () {
    console.log('Game is Created.')
  }
}
