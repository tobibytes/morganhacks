

export default function Timeline() {


  const timelineEvents = [
    { time: '9:00 AM', event: 'Opening Ceremony', description: 'Welcome to Morgan Hacks!' },
    { time: '10:00 AM', event: 'Hacking Begins', description: 'Start your engines!' },
    { time: '1:00 PM', event: 'Lunch Break', description: 'Refuel with some grub' },
    { time: '6:00 PM', event: 'Dinner Time', description: 'Keep that energy up!' },
    { time: '11:00 PM', event: 'Midnight Snack', description: 'Late night coding fuel' },
    { time: '8:00 AM', event: 'Breakfast', description: 'Rise and shine, hackers!' },
    { time: '12:00 PM', event: 'Hacking Ends', description: 'Pencils down!' },
    { time: '2:00 PM', event: 'Closing Ceremony', description: 'Awards and celebrations' },
  ]

  return (
    <div className="relative min-h-screen w-full bg-cover bg-center py-12 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-4xl font-bold text-purple-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">Morgan Hacks Timeline</h2>
          <div className="relative">
            <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 transform bg-blue-400"></div>

            {timelineEvents.map((event, index) => (
              <div key={index} className={`mb-8 flex w-full items-center justify-between ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                <div className="w-5/12"></div>
                <div className="z-20 flex h-8 w-8 items-center justify-center rounded-full bg-green-400 text-center font-bold shadow-xl">
                  <div className="h-4 w-4 rounded-full bg-purple-600"></div>
                </div>
                <div className="w-5/12">
                  <div className="rounded-lg bg-opacity-80 p-4 shadow-xl transition-all duration-300 ease-in-out hover:scale-105 hover:bg-opacity-100" 
                       style={{backgroundColor: 'rgba(76, 29, 149, 0.8)'}}>
                    <h3 className="mb-1 text-lg font-bold text-green-300">{event.time}</h3>
                    <h4 className="mb-2 text-xl font-bold text-blue-300">{event.event}</h4>
                    <p className="text-sm text-gray-200">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}