import { LinkButton } from '@/button/tailwind-link';
import { IconGithubFill } from '@t-headless-ui/react';
import { githubLink } from '../../../../config';

export function GithubButton() {
  return (
    <LinkButton href={githubLink} needHoverBg onlyIcon target="_blank">
      <IconGithubFill size="20px" />
    </LinkButton>
  );
}
