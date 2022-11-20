# OTB-Tech-Test

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) because I fancied trying out some NextJS as it's used by OTB.

And although it's definitely overkill for something like this it made sense to add some pizzazz too!

## `Some House Keeping`

Before we get started, as this is a tech test, I want to lay out what is different between what I'd do in production and here.

### `Why Aren't You Pairing?`

Well I stopped offering to pair when I realised I spend more time thinking - "they probably think you're an idiot for not knowing this now, well done, you've blown it..." - more than actually thinking about the problem I was dealing with. When in reality I was just writing an if statement and nobody was paying attention just yet.

In reality when I am comfortable and a job isn't on the line, I like to chat with folk and enjoy the process because why not!

### `How is the "project" structured?`

As its my first attempt using NextJS it might be weird but it looked like theres typically no src folder, so everything is at the root.
- components hold components for each page, Results being the main page, and any components that could be common across multiple pages are in a Common dir.
- constants hold some style constants and mock data.
- pages hold... pages.
- styles are actually handled with styled-components, another first for me in a personal project at least, I usually prefer SASS but decided to try something different
- utils hold the sort utils, although if the sort buttons were to be 100% portable into other apps as a package, maybe they could live in a react context?


### `Will You Write Conventional commits?`

These would be done in the real world, but its just me here and the likely-hood of anybody needing to read those to debug or revert some critical work is minimal, so I will just use descriptive commits.

### `Well, What About Unit Testing?`

I will do some testing to demonstrate but again we aren't deploying to millions of people ~~yet~~ just now so I will keep it basic.

### `Well what about all the other automated tests you idiot?!?!...`

It's just a tech test mate chill out...

### `Yeah you're right they should understand...`

No pressure then. Here we go.

#
## Getting Started

To run in development mode;

```bash
npm run dev
```

To run in production mode;

```bash
npm run dev
```

And to run either of the above successfully

```bash
npm install - # of course do this first please
```
