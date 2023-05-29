import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const VideoSlider = ({ videos }) => {
    return (
        <Carousel
            showStatus={false}
            showThumbs={false}
            infiniteLoop
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                    <IconButton onClick={onClickHandler} title={label} style={{ position: 'absolute', left: 15, zIndex: 2 }}>
                        <ChevronLeft fontSize="large" />
                    </IconButton>
                )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                    <IconButton onClick={onClickHandler} title={label} style={{ position: 'absolute', right: 15, zIndex: 2 }}>
                        <ChevronRight fontSize="large" />
                    </IconButton>
                )
            }
        >
            {videos.map((video, index) => {
                // Convert normal YouTube link to embed link
                const embedUrl = video.url.replace("watch?v=", "embed/");
                return (
                    <div key={index}>
                        <iframe width="100%" height="450" src={embedUrl} title={`Video ${index}`} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                    </div>
                );
            })}
        </Carousel>
    );
};

export default VideoSlider;