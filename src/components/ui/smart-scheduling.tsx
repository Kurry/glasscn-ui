'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { Calendar, CheckCircle, Clock, X } from '@phosphor-icons/react'
import { useState } from 'react'

interface InterviewSlot {
  id: string
  company: string
  timeOptions: string[]
  constraints: string
  scheduled?: string
  isConfirmed?: boolean
}

interface CalendarConflict {
  dayIndex: number
  halfDay: 'morning' | 'afternoon'
  isConflict: boolean
  isScheduled?: boolean
}

interface InterviewCoordinationProps {
  slots: InterviewSlot[]
  calendar: CalendarConflict[][]
  onConfirmAll?: () => void
  onAdjust?: () => void
  className?: string
}

export function InterviewCoordination({
  slots,
  calendar,
  onConfirmAll,
  onAdjust,
  className,
}: InterviewCoordinationProps) {
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']

  return (
    <div
      className={cn(
        'min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-950 dark:to-gray-900 flex items-center justify-center p-4',
        className,
      )}
    >
      <Card className="w-full max-w-2xl" variant="glass" blur="lg">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-3">
            <div className="text-primary-600 bg-primary-100 dark:bg-primary-900/30 p-2 rounded-lg">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <CardTitle className="text-lg">AI Managing Your Interviews</CardTitle>
              <CardDescription>Optimal scheduling based on your availability</CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h3 className="font-medium">Companies want to schedule calls:</h3>

            {slots.map((slot) => (
              <Card
                key={slot.id}
                className={cn(
                  'border',
                  slot.isConfirmed
                    ? 'border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950/20'
                    : 'border-gray-200 bg-white/80 dark:border-gray-800 dark:bg-gray-900/80',
                )}
                variant="solid"
              >
                <CardContent className="p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1">{slot.company}</h4>

                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{slot.constraints}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {slot.timeOptions.map((time, i) => (
                          <Badge key={i} variant="outline" className="bg-gray-50 dark:bg-gray-800">
                            {time}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {slot.scheduled && (
                      <div className="flex items-center">
                        {slot.isConfirmed ? (
                          <Badge className="bg-green-100 text-green-800 border-green-200 flex items-center gap-1">
                            <CheckCircle className="w-3 h-3" />
                            <span>{slot.scheduled}</span>
                          </Badge>
                        ) : (
                          <Badge className="bg-blue-100 text-blue-800 border-blue-200">{slot.scheduled}</Badge>
                        )}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Calendar View */}
          <div className="space-y-3">
            <h3 className="font-medium">Your calendar:</h3>
            <div className="grid grid-cols-5 gap-1 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800">
              {daysOfWeek.map((day, dayIndex) => (
                <div key={day} className="text-center">
                  <div className="py-2 font-medium text-sm bg-gray-100 dark:bg-gray-800">{day}</div>
                  <div>
                    {calendar[dayIndex].map((slot, slotIndex) => (
                      <div
                        key={`${dayIndex}-${slotIndex}`}
                        className={cn(
                          'h-6 text-xs flex items-center justify-center',
                          slot.isConflict
                            ? 'bg-gray-200 dark:bg-gray-700'
                            : slot.isScheduled
                              ? 'bg-blue-100 dark:bg-blue-900/30'
                              : 'bg-green-100 dark:bg-green-900/30',
                        )}
                      >
                        {slot.isConflict ? (
                          <X className="w-3 h-3 text-gray-500" />
                        ) : slot.isScheduled ? (
                          <Calendar className="w-3 h-3 text-blue-500" />
                        ) : (
                          <span>{slot.halfDay === 'morning' ? 'AM' : 'PM'}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            {onConfirmAll && (
              <Button onClick={onConfirmAll} className="sm:flex-1" color="primary">
                Confirm All
              </Button>
            )}

            {onAdjust && (
              <Button onClick={onAdjust} variant="outline" className="sm:flex-1">
                Adjust
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export function SmartSchedulingDemo() {
  const [isConfirmed, setIsConfirmed] = useState(false)

  const interviewSlots: InterviewSlot[] = [
    {
      id: '1',
      company: 'Google',
      timeOptions: ['Tue 2pm', 'Thu 3pm'],
      constraints: 'Tue 2pm or Thu 3pm?',
      scheduled: 'Tue 2pm',
      isConfirmed: isConfirmed,
    },
    {
      id: '2',
      company: 'Meta',
      timeOptions: ['Mon', 'Tue', 'Wed'],
      constraints: 'Mon-Wed, anytime',
      scheduled: 'Wed 10am',
      isConfirmed: isConfirmed,
    },
    {
      id: '3',
      company: 'Stripe',
      timeOptions: ['Fri morning'],
      constraints: 'Fri morning only',
      scheduled: 'Fri 9am',
      isConfirmed: isConfirmed,
    },
  ]

  // [Mon, Tue, Wed, Thu, Fri] x [morning, afternoon]
  const calendarData: CalendarConflict[][] = [
    // Monday
    [
      { dayIndex: 0, halfDay: 'morning', isConflict: true },
      { dayIndex: 0, halfDay: 'afternoon', isConflict: true },
    ],
    // Tuesday
    [
      { dayIndex: 1, halfDay: 'morning', isConflict: false },
      { dayIndex: 1, halfDay: 'afternoon', isConflict: false, isScheduled: isConfirmed },
    ],
    // Wednesday
    [
      { dayIndex: 2, halfDay: 'morning', isConflict: false, isScheduled: isConfirmed },
      { dayIndex: 2, halfDay: 'afternoon', isConflict: true },
    ],
    // Thursday
    [
      { dayIndex: 3, halfDay: 'morning', isConflict: false },
      { dayIndex: 3, halfDay: 'afternoon', isConflict: true },
    ],
    // Friday
    [
      { dayIndex: 4, halfDay: 'morning', isConflict: false, isScheduled: isConfirmed },
      { dayIndex: 4, halfDay: 'afternoon', isConflict: true },
    ],
  ]

  const handleConfirmAll = () => {
    setIsConfirmed(true)
  }

  return (
    <div className="w-full">
      <InterviewCoordination
        slots={interviewSlots}
        calendar={calendarData}
        onConfirmAll={!isConfirmed ? handleConfirmAll : undefined}
        onAdjust={isConfirmed ? () => setIsConfirmed(false) : undefined}
      />
    </div>
  )
}
