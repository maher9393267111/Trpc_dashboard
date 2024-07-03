'use client'

import { useDateStore } from '@/utils/store'
import { trpc } from '@/utils/trpc'
import InfoBox from './infoBox'

const TopBoxes = () => {
  const { month, year } = useDateStore()
  const { data: finance, isLoading: fLoading } =
    trpc.finance.getHomeData.useQuery({ month, year })
  const { data: supply, isLoading: sLoading } =
    trpc.supply.getHomeData.useQuery({ month, year })

  return (
    <div className="flex flex-col gap-2 col-span-2 sm:col-span-1 mt-5 sm:mt-3">
      <h2 className="text-lg font-bold mb-1">الاحصائيات الشهرية</h2>

      <InfoBox
        name="الدخل"
        value={finance?.income}
        isLoading={fLoading}
        index={1}
      />
      <InfoBox
        name="المصاريف"
        value={finance?.expense}
        isLoading={fLoading}
        index={2}
      />
      <InfoBox
        name="التموين"
        value={supply?.supply}
        isLoading={sLoading}
        index={3}
      />
    </div>
  )
}

export default TopBoxes
