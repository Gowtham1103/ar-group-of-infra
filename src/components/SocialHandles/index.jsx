import { socialHandles } from "../../source";

function SocialHandles() {
  return (
    <div className="flex social__handles">
      {socialHandles.map((handle, index) => {
        return (
          <a
            href={handle.link}
            target="_blank"
            rel="noreferrer"
            className="flex__center icon__container"
            key={index}
          >
            {handle.icon}
          </a>
        );
      })}
    </div>
  );
}

export default SocialHandles;