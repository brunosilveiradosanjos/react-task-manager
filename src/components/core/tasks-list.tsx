import Button from '../small/button'
import TaskItem from './task-item'
import PlusIcon from '@/assets/icons/plus.svg?react'

export default function TasksList() {
  return (
    <>
      <section>
        <Button icon={PlusIcon} className="w-full">
          New Task
        </Button>
      </section>
      <section className="space-y-2">
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </section>
    </>
  )
}
