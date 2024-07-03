import DateSelector from '@/components/dateSelector'
import { NextPage } from 'next'
import HomeGrid from './homeGrid'

const Home: NextPage = () => {
  return (
    <>
      <div className="py-8 text-center">
        <h1 className="text-4xl font-bold"> جمعية تعاونية</h1>
        <h2 className="text-gray-400 mt-3 text-2xl font-semibold">
          للتجارة
        </h2>
        <div className="inline-flex">
          <DateSelector />
        </div>
      </div>

      <HomeGrid />
    </>
  )
}

export default Home
