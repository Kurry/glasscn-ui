import {
  OfferProbabilityCalculator,
  NegotiationPreparation,
  PredictiveOfferDemo,
} from '@/components/ui/predictive-offer'
import { Warning, Briefcase, CurrencyDollar, Buildings } from '@phosphor-icons/react'
import type { Meta } from '@storybook/react'

const meta: Meta = {
  title: 'Automation/Predictive Offer',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

export const Offer_Probability = {
  name: 'Offer Probability Calculator',
  render: () => (
    <OfferProbabilityCalculator
      predictions={[
        {
          company: 'Stripe',
          probability: 87,
          strengths: ['Strong technical round', 'Culture fit confirmed', 'Similar candidates: 9/10 got offers'],
        },
        {
          company: 'Airbnb',
          probability: 65,
          strengths: ['Good system design', 'Competing with 3 others'],
        },
        {
          company: 'Meta',
          probability: 34,
          strengths: ['Tough feedback on coding'],
          statusNote: 'Consider other opportunities',
        },
      ]}
      onPrepareNegotiations={() => console.log('Preparing negotiations')}
    />
  ),
}

export const Negotiation_Assistant = {
  name: 'Negotiation Assistant',
  render: () => (
    <NegotiationPreparation
      company="Stripe"
      likelyOffer="$165k"
      suggestedAsk="$178k + 10% bonus"
      leveragePoints={[
        {
          icon: <Briefcase className="w-4 h-4" />,
          text: '2 other final rounds pending',
        },
        {
          icon: <CurrencyDollar className="w-4 h-4" />,
          text: 'Market rate: $155k-180k',
        },
        {
          icon: <Warning className="w-4 h-4" />,
          text: 'Their urgency: High (Q4 hiring)',
        },
        {
          icon: <Buildings className="w-4 h-4" />,
          text: 'Your unique value: Payment exp',
        },
      ]}
      successProbability={73}
      preparedScripts={['If they say yes', 'If they counter', 'If they say no', 'If they stall']}
      onViewScripts={(scriptType) => console.log(`Viewing script: ${scriptType}`)}
    />
  ),
}

export const Predictive_Offer_Demo = {
  name: 'Complete Predictive Offer Flow',
  render: () => <PredictiveOfferDemo />,
}
