import { Button, Frog, TextInput } from 'frog'
import { devtools } from 'frog/dev'
import { serveStatic } from 'frog/serve-static'
import { neynar } from 'frog/hubs'
import { handle } from 'frog/vercel'

// Uncomment to use Edge Runtime.
export const config = {
runtime: 'edge',
 }

export const app = new Frog({
  assetsPath: '/',
  basePath: '/api',
  // Supply a Hub to enable frame verification.
 hub: neynar({ apiKey: '0D6B6425-87D9-4548-95A2-36D107C12421' }),
 title: 'POD LABS Proposal'
})

app.frame('/', (c) => {
  const { buttonValue, inputText, status } = c
  const fruit = inputText || buttonValue
  return c.res({
    action: '/secondframe',
    image: "https://amethyst-able-sawfish-36.mypinata.cloud/ipfs/QmQ3FWNZrxPQ2eL7Yh7iK3ZiVPCwXprFT5U26ZkopdDW8K",
    intents: [
      <Button>ENTER</Button>,
    ],
  })
})

app.frame('/secondframe', (c) => {
  const { buttonValue, inputText, status } = c
  const fruit = inputText || buttonValue
  return c.res({
    action: '/thirdframe',
    image: "https://amethyst-able-sawfish-36.mypinata.cloud/ipfs/QmNafpwmqcjCCGxLobLMWUFBKPx44G6BY6MJdJgME1NsgM",
    intents: [
      <Button>NEXT</Button>,
    ],
  })
})

app.frame('/thirdframe', (c) => {
  const { buttonValue, inputText, status } = c
  const fruit = inputText || buttonValue
  return c.res({
    action: '/fourthframe',
    image: "https://amethyst-able-sawfish-36.mypinata.cloud/ipfs/QmaM1Nz1CQoXJkn1Hs2A66Cex52MRgSDzR849nFHEEK7zx",
    intents: [
      <Button action="/secondframe">Back</Button>,
      <Button>NEXT</Button>,
    ],
  })
})

app.frame('/fourthframe', (c) => {
  const { buttonValue, inputText, status } = c
  const fruit = inputText || buttonValue
  return c.res({
    action: '/fifthframe',
    image: "https://amethyst-able-sawfish-36.mypinata.cloud/ipfs/QmfBj4rQfD6D4YFHtY8FFvcLneXfGhh9tnecGxkt9gruxk",
    intents: [
      <Button action="/thirdframe">Back</Button>,
      <Button>NEXT</Button>,
    ],
  })
})

app.frame('/fifthframe', (c) => {
  const { buttonValue, inputText, status } = c
  const fruit = inputText || buttonValue
  return c.res({
    action: '/sixthframe',
    image: "https://amethyst-able-sawfish-36.mypinata.cloud/ipfs/QmTne6LRw5UtTqQ2hutTqWgCqdaoNAjEwPLG9gpYYzyFcx",
    intents: [
      <Button action="/fourthframe">Back</Button>,
      <Button>NEXT</Button>,
    ],
  })
})

app.frame('/sixthframe', (c) => {
  const { buttonValue, inputText, status } = c
  const fruit = inputText || buttonValue
  return c.res({
    action: '/seventhframe',
    image: "https://amethyst-able-sawfish-36.mypinata.cloud/ipfs/QmTBstpjaj6jim6V4EbGxybf2yfbN2TjfSggScrxuPfuC4",
    intents: [
      <Button action="/fifthframe">Back</Button>,
      <Button>NEXT</Button>,
    ],
  })
})

app.frame('/seventhframe', (c) => {
  const { buttonValue, inputText, status } = c
  const fruit = inputText || buttonValue
  return c.res({
    action: '/eighthframe',
    image: "https://amethyst-able-sawfish-36.mypinata.cloud/ipfs/QmbYbP9gEPzErWcUZ5YtBXaSvqC7XxixBBYCUjq6sCYy42",
    intents: [
      <Button action="/sixthframe">Back</Button>,
      <Button>NEXT</Button>,
    ],
  })
})

app.frame('/eighthframe', (c) => {
  const { buttonValue, inputText, status } = c
  const fruit = inputText || buttonValue
  return c.res({
    action: '/',
    image: "https://amethyst-able-sawfish-36.mypinata.cloud/ipfs/QmTzwzQpJXPtCXPDkjPLeU6BokMvqgKYYqh2QVFt8DEaE4",
    intents: [
      <Button action="/sixthframe">Back</Button>,
      <Button.Link href="https://explorer.gitcoin.co/#/round/1329/9/191">Proposal</Button.Link>,
      <Button.Link href="https://x.com/xThePod">X</Button.Link>,
      <Button.Reset>Restart</Button.Reset>,

    ],
  })
})

// @ts-ignore
const isEdgeFunction = typeof EdgeFunction !== 'undefined'
const isProduction = isEdgeFunction || import.meta.env?.MODE !== 'development'
devtools(app, isProduction ? { assetsPath: '/.frog' } : { serveStatic })

export const GET = handle(app)
export const POST = handle(app)
