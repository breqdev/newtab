import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faBluesky,
  faGithub,
  faGitlab,
  faMastodon,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Button({
  icon,
  label,
  color,
  url,
}: {
  icon: IconDefinition;
  label: string;
  color: string;
  url: string;
}) {
  return (
    <a className="flex flex-col items-center gap-1" href={url} target="_top">
      <FontAwesomeIcon icon={icon} className="text-4xl" style={{ color }} />
      <span className="text-gray-600 dark:text-gray-200">{label}</span>
    </a>
  );
}

export default function Launcher() {
  return (
    <div className="border-2 border-black dark:border-white rounded-3xl md:col-span-2 p-2 md:p-6 grid grid-cols-6">
      <Button
        icon={faGithub}
        label="GitHub"
        color="#1F2328"
        url="https://github.com/"
      />
      <Button
        icon={faGitlab}
        label="GitLab"
        color="#E24329"
        url="https://gitlab.com/"
      />
      <Button
        icon={faEnvelope}
        label="Gmail"
        color="#EA4335"
        url="https://mail.google.com/"
      />
      <Button
        icon={faMapMarkedAlt}
        label="Maps"
        color="#34A853"
        url="https://maps.google.com/"
      />
      <Button
        icon={faBluesky}
        label="Bluesky"
        color="#0085ff"
        url="https://bsky.app/"
      />
      <Button
        icon={faMastodon}
        label="Fedi"
        color="#605BF4"
        url="https://tacobelllabs.net/"
      />
    </div>
  );
}
