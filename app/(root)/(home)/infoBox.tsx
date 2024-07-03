import Loader from '@/components/loader'
import { slideUp } from '@/utils/motion'
import { motion } from 'framer-motion'
import { ReactElement } from 'react'

const InfoBox = ({
  name,
  value,
  isLoading,
  index = 1
}: {
  name: string
  value: string | number | ReactElement | undefined
  isLoading: boolean
  index?: number
}) => {
  return (
    <div className="bg-base-300/80 shadow-md p-3 flex rounded-md !flex-row justify-between items-center gap-5 overflow-hidden">
      <h3 className="text-lg font-semibold">{name}</h3>
      {isLoading ? (
        <div className="translate-x-1 translate-y-1 -my-0.5">
          <Loader width={40} />
        </div>
      ) : (
        <motion.h4
          variants={slideUp}
          initial="hide"
          animate="show"
          exit="hide"
          transition={{ delay: index * 0.05 }}
          className="text-secondary text-3xl font-black"
        >
          {value || 0}
        </motion.h4>
      )}
    </div>
  )
}

export default InfoBox
