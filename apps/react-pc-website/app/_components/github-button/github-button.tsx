import React from 'react';
import { LinkButton } from '@/button/tailwind-link';
import { IconGithubFill } from '@t-headless-ui/react';
import { config } from '../../../config';

export function GithubButton() {
  return (
    <LinkButton href={config.githubLink} needHoverBg onlyIcon target="_blank">
      <IconGithubFill size="20px" />
    </LinkButton>
  );
}
