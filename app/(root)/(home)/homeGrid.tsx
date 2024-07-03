import BagProgress from './bagProgress'
import TopBoxes from './topBoxes'

const HomeGrid = () => {
  return (
    <div className="grid sm:grid-cols-3 gap-3 [&>section]:card [&>section]:bg-base-300/80 [&>section]:p-4">
      <BagProgress />
      <TopBoxes />
    </div>
  )
}

export default HomeGrid
