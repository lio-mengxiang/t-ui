export function getImageUrl(url: string) {
  return process.env.isGithubPage ? `${process.env.isGithubPage}${url}` : url;
}

export function getStyleImageUrl(url: string) {
  return process.env.isGithubPage ? `url(${process.env.isGithubPage}${url})` : `url(${url})`;
}
