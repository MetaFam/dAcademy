export const toHTTP = (url: string) => {
  return url.replace(/^ipfs:\/\//, 'https://w3s.link/ipfs/')
}