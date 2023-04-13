import Image from 'next/image'
import { memo } from 'react'

interface Props {
  url: string
  setSelected: () => void
  isFlipped?: boolean
  isDisabled?: boolean
  isCorrect?: boolean
  isNotCorrect?: boolean
  isNotHighlighted?: boolean
}

function CardFunction({
  url,
  setSelected,
  isFlipped = false,
  isDisabled = false,
  isCorrect = false,
  isNotCorrect = false,
  isNotHighlighted = false
}: Props) {
  const customStylesArray = []

  customStylesArray.push(isNotHighlighted ? 'opacity-60' : 'opacity-100')
  isCorrect && customStylesArray.push('border-green-600')
  isNotCorrect && customStylesArray.push('border-red-600')
  !isNotCorrect && !isCorrect && customStylesArray.push('border-[#96ADCF]')
  customStylesArray.push(
    isFlipped ? 'bg-blue-50 rotate-animation' : 'bg-[#DBE2EF]'
  )

  const customStylesString = customStylesArray.join(' ')

  return (
    <button
      onClick={setSelected}
      disabled={isDisabled}
      className={`${customStylesString} p-[4px] border-2 rounded-md shadow-md break-inside-avoid mb-[15px] sm:mb-[28px] block`}
    >
      <Image src={url} alt="icon" width={70} height={70} />
    </button>
  )
}

export const Card = memo(CardFunction)
