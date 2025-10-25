import React, { useState } from 'react'
import Image from 'next/image'
import Lightbox from 'yet-another-react-lightbox'

const Carousel: React.FC = () => {
  const [seletedSlide, setSelectedSlide] = useState<{
    src: string
    title: string
    description: string
    youtubeId: string
    type: string
  } | null>(null)

  const slides = [
    {
      src: '/images/now-streaming.jpg',
      title: 'Now Streaming',
      description:
        'Our unnerving entry into the 2025 Jakob Owens Horror Film Festival.',
      youtubeId: 'https://www.youtube.com/embed/4upii3jsKQU?autoplay=1',
      type: 'custom-slide',
    },
    {
      src: '/images/vala.jpg',
      title: "Mr. Vala's Pumpkin Patch",
      description: 'Mr. Vala has a plan for you...',
      youtubeId: 'https://www.youtube.com/embed/nUDC2CQgUZ8?autoplay=1',
      type: 'custom-slide',
    },
    {
      src: '/images/hero-nosferatu.jpg',
      title: 'Nosferatu: Alternate Ending',
      description: "Poor 'Ol Nosferatu bit off more than he could chew...",
      youtubeId: 'https://www.youtube.com/embed/ZuJ76Wv7hQc?autoplay=1',
      type: 'custom-slide',
    },
    {
      src: '/images/pumpkinspice.png',
      title: 'The October Curse',
      description: 'Every October something wicked takes over...',
      youtubeId: 'https://www.youtube.com/embed/Av3huC48UsE?autoplay=1',
      type: 'custom-slide',
    },
    {
      src: '/images/rose.png',
      title: 'The Benson Rose Massacre',
      description:
        "Be careful how you treat him next time you're out in Benson...",
      youtubeId: 'https://www.youtube.com/embed/eBP1xDIbkT8?autoplay=1',
      type: 'custom-slide',
    },
    {
      src: '/images/jeepers.png',
      title: 'Jeepers Creepers',
      description: 'A haunting trip to the DMV',
      youtubeId: 'https://www.youtube.com/embed/uA4I0VvYWik?autoplay=1',
      type: 'custom-slide',
    },
    {
      src: '/images/luigi.png',
      title: "Ghostbusters / Luigi's Mansion",
      description: 'The Ghostbusters take on their highest profile case yet!',
      youtubeId: 'https://www.youtube.com/embed/4Fy4k8daFcs?autoplay=1',
      type: 'custom-slide',
    },
    {
      src: '/images/fitness.png',
      title: 'Running Out Of Time Fitness',
      description: '',
      youtubeId: 'https://www.youtube.com/embed/qC8EWv_aXMM?autoplay=1',
      type: 'custom-slide',
    },
    {
      src: '/images/bag.png',
      title: 'Flaming Bag Prank',
      description: '',
      youtubeId: 'https://www.youtube.com/embed/zUVOtKEBJzs?autoplay=1',
      type: 'custom-slide',
    },
  ]

  return (
    <div className="-mx-2 flex-wrap sm:flex">
      {slides.map((slide, index) => (
        <a
          href="#"
          onClick={() => setSelectedSlide(slide)}
          className="relative mx-2 mb-4 block flex-1"
          key={index}
          style={{ paddingBottom: '30%', minWidth: '30%' }}
        >
          <Image
            src={slide.src}
            alt={slide.title}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="carousel-image"
          />

          <div className="absolute bottom-0 left-0 z-10 w-full p-3 text-left">
            <h3 className="text-lg text-white">{slide.title}</h3>
            {/* <p className='text-white text-sm'>{slide.description}</p> */}
          </div>
        </a>
      ))}

      <Lightbox
        open={seletedSlide !== null}
        close={() => setSelectedSlide(null)}
        slides={[{ src: '' }]}
        carousel={{ finite: true }}
        render={{
          slide: () => (
            <div className="flex h-full w-full items-center">
              <div className="relative w-full" style={{ paddingBottom: '45%' }}>
                <iframe
                  width="853"
                  height="480"
                  src={seletedSlide?.youtubeId}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embedded youtube"
                  className="absolute left-0 top-0 h-full w-full"
                />
              </div>
            </div>
          ),
          iconNext: () => null,
          iconPrev: () => null,
        }}
      />
    </div>
  )
}

export default Carousel
