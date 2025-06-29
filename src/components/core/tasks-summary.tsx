import Badge from '../small/badge'
import Text from '../small/text'

export default function TasksSummary() {
  return (
    <>
      <div className="flex items-center gap-2">
        <Text variant="body-sm-bold" className="!text-gray-300">
          Tasks
        </Text>
        <Badge variant="primary">5</Badge>
      </div>
      <div className="flex items-center gap-2">
        <Text variant="body-sm-bold" className="!text-gray-300">
          Done
        </Text>
        <Badge variant="secondary">2 of 5</Badge>
      </div>
    </>
  )
}
