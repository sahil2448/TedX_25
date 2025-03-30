import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

// Array of event objects
const events = [
  {
    id: 1,
    type: "work",
    date: "Tedx 2013",
    title: "Tedx 2013",

    background: "red",
    color: "#fff",
  },
  {
    id: 2,
    type: "work",
    date: "Tedx 2014",
    title: "Art Director",

    background: "red",
    color: "#fff",
  },
  {
    id: 3,
    type: "work",
    date: "Tedx 2015",

    description: "User Experience, Visual Design",
    background: "red",
    color: "#fff",
  },
  {
    id: 4,
    type: "work",
    date: "Tedx 2016",

    description: "User Experience, Visual Design",
    background: "red",
    color: "#fff",
  },
  {
    id: 5,
    type: "work",
    date: "Tedx 2017",

    description: "User Experience, Visual Design",
    background: "red",
    color: "#fff",
  },
  {
    id: 4,
    type: "work",
    date: "Tedx 2018",

    description: "User Experience, Visual Design",
    background: "red",
    color: "#fff",
  },
  {
    id: 4,
    type: "work",
    date: "Tedx 2019",

    description: "User Experience, Visual Design",
    background: "red",
    color: "#fff",
  },
  {
    id: 4,
    type: "work",
    date: "Tedx 2020",

    description: "User Experience, Visual Design",
    background: "red",
    color: "#fff",
  },
  {
    id: 4,
    type: "work",
    date: "Tedx 2021",

    description: "User Experience, Visual Design",
    background: "red",
    color: "#fff",
  },
  {
    id: 4,
    type: "work",
    date: "Tedx 2022",

    description: "User Experience, Visual Design",
    background: "red",
    color: "#fff",
  },
  {
    id: 4,
    type: "work",
    date: "Tedx 2023",

    description: "User Experience, Visual Design",
    background: "red",
    color: "#fff",
  },
  {
    id: 4,
    type: "work",
    date: "Tedx 2024",

    description: "User Experience, Visual Design",
    background: "red",
    color: "#fff",
  },
  {
    id: 4,
    type: "work",
    date: "Tedx 2025",

    description: "User Experience, Visual Design",
    background: "rgb(33, 150, 243)",
    color: "#fff",
  },

  // Add more events as needed...
];

const EventsLine = () => {
  return (
    <div>
      <VerticalTimeline>
        {events.map((event) => (
          <VerticalTimelineElement
            key={event.id}
            className={`vertical-timeline-element--${event.type} w-[100%] `}
            contentStyle={{
              background: "transparent",
              color: "white",
              // width: "400px",
              textAlign: "center",
              fontSize: "2rem",
              paddingTop: "0rem",
              paddingBottom: "0rem",
              paddingLeft: "0rem",
              paddingRight: "0rem",
              fontFamily: "serif",
            }}
            contentArrowStyle={{
              borderRight: `7px solid ${event.background}`,
            }}
            // date={event.date}
            iconStyle={{
              background: event.background,
              color: event.color,
              width: "20px",
              height: "20px",
              lineHeight: "8px",
              marginLeft: "-10px",
            }}
          >
            <h3>{event.date}</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">
              {event.subtitle}
            </h4>
            <p>{event.description}</p> */}
          </VerticalTimelineElement>
        ))}
        {/* A final timeline element if needed */}
        {/* <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
        /> */}
      </VerticalTimeline>
    </div>
  );
};

export default EventsLine;
