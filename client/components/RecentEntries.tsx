import recentEntryData from '../data/recent-entries'
import RecentEntry from './RecentEntry'

function RecentEntries() {
  return (
    <div className="recent-entries">
      {recentEntryData.map((entry) => (
        <RecentEntry key={entry.id} {...entry} />
      ))}
    </div>
  )
}

export default RecentEntries
