import TaskItem from '@/components/core/task-item'
import TasksSummary from '@/components/core/tasks-summary'
import Container from '@/components/small/container'

export default function PageHome() {
  return (
    <Container as="article" className="space-y-3">
      <header className="flex items-center justify-between">
        <TasksSummary />
      </header>
      <TaskItem />
    </Container>
  )
}
