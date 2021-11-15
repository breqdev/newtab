import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faCommentDots,
  faEnvelope,
} from "@fortawesome/free-regular-svg-icons";
import {
  faGithub,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faChalkboardTeacher,
  faExclamationCircle,
  faSchool,
} from "@fortawesome/free-solid-svg-icons";

function Link({ children, to }: { children: React.ReactNode; to: string }) {
  return (
    <a
      href={to}
      className="border-2 border-gray-500 text-gray-500 hover:border-black hover:text-black hover:bg-gray-200 transition-colors duration-300 rounded-3xl p-6 text-xl flex justify-center items-center cursor-pointer gap-2"
    >
      {children}
    </a>
  );
}

export default function Links() {
  return (
    <div className="grid w-full max-w-4xl xl:max-w-7xl grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-8">
      <Link to="https://calendar.google.com/">
        <FontAwesomeIcon icon={faCalendarAlt} />
        calendar
      </Link>
      <Link to="https://twitter.com/">
        <FontAwesomeIcon icon={faTwitter} />
        twitter
      </Link>
      <Link to="https://calendar.google.com/">
        <FontAwesomeIcon icon={faChalkboardTeacher} />
        canvas
      </Link>
      <Link to="https://gmail.com/">
        <FontAwesomeIcon icon={faEnvelope} />
        email
      </Link>
      <Link to="https://instagram.com/">
        <FontAwesomeIcon icon={faInstagram} />
        instagram
      </Link>
      <Link to="https://github.com/">
        <FontAwesomeIcon icon={faGithub} />
        github
      </Link>
      <Link to="https://youtube.com/">
        <FontAwesomeIcon icon={faYoutube} />
        youtube
      </Link>
      <Link to="https://voice.google.com/">
        <FontAwesomeIcon icon={faCommentDots} />
        google voice
      </Link>
      <Link to="https://web.yammer.com/">
        <FontAwesomeIcon icon={faExclamationCircle} />
        yammer
      </Link>
      <Link to="https://nuisance.breq.dev/">
        <FontAwesomeIcon icon={faSchool} />
        nuisance
      </Link>
    </div>
  );
}
