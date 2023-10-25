'use client'

import React from 'react'
import Hero from './components/Hero'
import './page.css'
import Carousel from './components/Carousel/Carousel'
import { Parallax } from 'react-parallax'

export default function Home() {
  return (
    <main className="text-left">
      <Hero
        title="Going somewhere?"
        subtitle="Our new horror film takes a dark look at a local hero"
        ctaText="Watch Now"
        ctaLink="https://www.youtube.com/watch?v=nUDC2CQgUZ8"
        imageUrl="/images/vala.jpg"
      />

      <section className="bg-zinc-900 py-20" id="featured">
        <div className="mx-auto px-6 text-center">
          <h2 className="mb-8 text-center text-5xl font-thin text-white">
            Halloween Frights
          </h2>
          <Carousel></Carousel>
          <a
            href="https://www.youtube.com/justinwwwalin"
            target="_blank"
            rel="noreferrer noopenner"
            className="mt-12 inline-block rounded-full border-2 bg-transparent px-8 py-3 text-lg font-light text-white transition-colors duration-300 hover:bg-white/50"
          >
            View All Videos
          </a>
        </div>
      </section>

      <section className="relative bg-zinc-900" id="about">
        <Parallax
          bgImage={'/images/drone_1.28.1.jpg'}
          bgImageAlt="About Us Image"
          strength={150}
        >
          <div className="relative z-10 m-auto max-w-3xl px-6 py-32 text-center sm:py-36">
            <h2 className="mb-8 text-5xl font-thin text-white">About Us</h2>
            <p className="text-xl leading-8 text-white">
              We are a group of childhood friends from Nebraska who love making
              short-films. Our portfolio ranges from music videos for local rock
              bands to outrageous comedy sketches that push the boundaries of
              YouTube&apos;s content policies.
            </p>
          </div>
        </Parallax>
      </section>

      <section className="relative bg-zinc-900" id="contact">
        <div className="relative z-10 m-auto max-w-3xl px-6 py-32 text-center sm:py-36">
          <h2 className="mb-8 max-w-3xl text-5xl font-thin text-white">
            You think this is a joke?
          </h2>
          <p className="text-xl leading-8 text-white">
            Don&apos;t let the gross-out humor fool you, we take our work very
            seriously. If you have a project you&apos;d like to discuss, drop us
            a line!
          </p>
          <a
            href="mailto:thegardenhouseproductions@gmail.com"
            className="mt-12 inline-block rounded-full border-2 bg-transparent px-8 py-3 text-lg font-light text-white transition-colors duration-300 hover:bg-white/50"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  )
}
