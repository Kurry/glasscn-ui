import { 
  MarketTrendAlert,
  MarketIntelligenceDemo
} from '@/components/ui/market-intelligence'
import type { Meta } from '@storybook/react'

const meta: Meta = {
  title: 'Automation/Market Intelligence',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

export const Market_Trend_Alert = {
  name: 'Market Trend Alert',
  render: () => (
    <MarketTrendAlert 
      trend="SWE"
      percentage={73}
      currentSkill="Docker"
      suggestedAddition="Containerized microservices using Docker and orchestrated with Kubernetes"
      onAutoAdd={() => console.log('Auto-add to resume')}
      onDismiss={() => console.log('Dismiss alert')}
    />
  )
}

export const Market_Intelligence_Demo = {
  name: 'Market Intelligence Demo Flow',
  render: () => <MarketIntelligenceDemo />
}