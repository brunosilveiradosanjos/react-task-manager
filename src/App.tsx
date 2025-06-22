import Text from './components/text'
import TrashIcon from './assets/icons/trash.svg?react'
import CheckIcon from './assets/icons/check.svg?react'
import XIcon from './assets/icons/x.svg?react'
import PencilIcon from './assets/icons/pencil.svg?react'
import PlusIcon from './assets/icons/plus.svg?react'
import SpinnerIcon from './assets/icons/spinner.svg?react'
import Icon from './components/icon'
import Badge from './components/badge'
import Button from './components/button'
import ButtonIcon from './components/button-icon'
import InputText from './components/input-text'
import InputCheckbox from './components/input-checkbox'

export default function App() {
  return (
    <div className="grid gap-10">
      <div className="flex flex-col gap-2">
        <Text variant="body-sm-bold" className="text-pink-base">
          Hello World!
        </Text>
        <Text className="text-green-base">Hello World!</Text>
        <Text variant="body-md-bold">Hello World!</Text>
        <Text>Hello World!</Text>
      </div>

      <div className="flex gap-1">
        <Icon svg={TrashIcon} className="fill-green-base" />
        <Icon svg={CheckIcon} className="fill-green-dark" />
        <Icon svg={PlusIcon} className="fill-green-light" />
        <Icon svg={SpinnerIcon} animate className="fill-pink-base" />
        <Icon svg={PencilIcon} className="fill-pink-dark" />
        <Icon svg={XIcon} className="fill-pink-light" />
      </div>

      <div>
        <Badge variant="secondary">5</Badge>
        <Badge variant="primary">2 de 5</Badge>
      </div>
      <div>
        <Button icon={PlusIcon}>Nova tarefa</Button>
      </div>
      <div className="flex gap-1">
        <ButtonIcon icon={TrashIcon} disabled />
        <ButtonIcon icon={TrashIcon} variant="secondary" />
        <ButtonIcon icon={TrashIcon} variant="tertiary" />
      </div>
      <div>
        <InputText placeholder="type your password" />
      </div>
      <div>
        <InputCheckbox />
      </div>
    </div>
  )
}
