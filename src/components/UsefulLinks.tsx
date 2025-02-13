export interface Link {
  href: string;
  text: string;
}

interface UsefulLinksProps {
  links: Link[];
  emojiEnabled: boolean;
}

const UsefulLinks = ({ links, emojiEnabled }: UsefulLinksProps) => {
  return (
    <>
      {links.map((link) => (
        <a href={link.href} key={link.href}>
          {emojiEnabled && <span>🔗 </span>}
          <span>{link.text}</span>
        </a>
      ))}
    </>
  );
};

export default UsefulLinks;
