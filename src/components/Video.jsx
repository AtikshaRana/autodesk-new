"use client"
import React from 'react'
export default function VideoBlock({ blok }) {
    console.log("blok");
    return (
        <video
            autoPlay={true}
            preload="metadata"
            loop
            muted
            poster="https://a-us.storyblok.com/f/1018383/1568x1240/b4f3830ef9/placeholder.png"
        >
            <source src={blok} type="video/mp4" />
        </video>
    )
}




