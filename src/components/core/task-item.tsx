import React from 'react'
import ButtonIcon from '../small/button-icon'
import Card from '../small/card'
import InputCheckbox from '../small/input-checkbox'
import Text from '../small/text'
import TrashIcon from '@/assets/icons/trash.svg?react'
import PencilIcon from '@/assets/icons/pencil.svg?react'
import XIcon from '@/assets/icons/x.svg?react'
import CheckIcon from '@/assets/icons/check.svg?react'
import InputText from '../small/input-text'

export default function TaskItem() {
  const [isEditing, setIsEditing] = React.useState(false)

  function handleEditTask() {
    setIsEditing(true)
  }

  function handleExitEditTask() {
    setIsEditing(false)
  }

  return (
    <Card size="md" className="flex items-center gap-4">
      {isEditing ? (
        <>
          <InputText className="flex-1" />
          <div className="flex gap-1">
            <ButtonIcon icon={XIcon} variant="secondary" onClick={handleExitEditTask} />
            <ButtonIcon icon={CheckIcon} variant="primary" onClick={handleExitEditTask} />
          </div>
        </>
      ) : (
        <>
          <InputCheckbox />
          <Text className="flex-1">Do the grocery shopping</Text>
          <div className="flex gap-1">
            <ButtonIcon icon={PencilIcon} variant="tertiary" onClick={handleEditTask} />
            <ButtonIcon icon={TrashIcon} variant="tertiary" />
          </div>
        </>
      )}
    </Card>
  )
}
