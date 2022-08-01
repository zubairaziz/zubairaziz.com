---
title: Hello, World!
pageTitle: Hello, World!
description: First post for zubairaziz.com. Read more to learn about the development and tech stack for the site.
publishedAt: 2022-07-25
categories:
  - TypeScript
  - Next.js
  - TailwindCSS
  - Markdown
---

Here's an outline of how this site was built and all the underlying technologies that powers it.

## TypeScript

[TypeScript](https://www.typescriptlang.org/) is a strongly typed programming language that builds on JavaScript. Deciding on TypeScript to write the entire app was a no-brainer. I've been reaching for TypeScript for writing any piece of JavaScript for about three years now, and I'm incredibly satisfied with the experience.

First of all, there's great integration with VS Code for type hinting, code completion, and error reporting. When it comes to writing code in TypeScript, I have to be a bit more expressive regarding the design patterns I choose to avoid build-time errors. This automatically (in my opinion) makes my code easier to read and much simpler to refactor if I need to make changes in the future.

I think TypeScript's also a good choice as it has Microsoft backing it, and according to the [State of JS Survey (2021)](https://2021.stateofjs.com/en-US/other-tools/#javascript_flavors), TypeScript is the most widely adopted flavor of JavaScript with 69% of respondents saying they have used it in some form. So I don't think Typescript is going away anytime soon.

## Next.js

The next core technology of this site is [Next.js](https://nextjs.org/), a meta-framework built on top of React. I believe that this choice can future-proof this site, and allow me to integrate newer technologies more easily as I continue to update the site.

I think Next.js is the perfect framework to use as it has great developer experience, out of the box TypeScript support, smart bundling, route pre-fetching, and can statically generate pages for me at build time. For what I'm building, this is more than enough to get a fast reliable site for my users.

## TailwindCSS

[TailwindCSS](https://tailwindcss.com/) is another easy pick for this project. Easily integrate with Next.js via [PostCSS](https://postcss.org/). Tailwind allows me to build author production-ready CSS in no time at all. It comes with sensible defaults and has a large array of nice colors to play with. Not to mention that it also comes with [PurgeCSS](https://purgecss.com/) out of the box, ensuring that my bundle sizes remain as small as possible.

Contrary to what some might say about TailwindCSS, it's actually highly customizable and in my opinion a much better experience compared to authoring your own CSS. Resulting in beautiful websites/apps that don't have a "cookie cutter theme" feeling to it. Of course, this does require some experience with using Tailwind to get some really unique results, but I think that the developer experience with Tailwind is great.

## Markdoc

[Markdoc](https://markdoc.io/) would probably be the most interesting choice for this site. I wanted something easy to write blog posts in without too much configuration to make it work. Markdoc is an open-source library by [Stripe](https://stripe.com/), that they use in [their documentation](https://stripe.com/docs) themselves. As of the writing of this post, Markdoc is still considered beta at version `0.1.4`, but I still think it's worth using and solves a lot of the problems I had in authoring a static site.

To really understand how I came with the decision, we need to look at the other options I had, either plain Markdown, or [MDX](https://mdxjs.com/).

### Markdown VS MDX VS Markdoc

While static markdown files, solves **most** of the issues I had with authoring a static blogging platform, this requires some configuration to get it working and doesn't support arbitrary components without custom transforms.

For most, this can be solved with MDX. MDX is a superset of Markdown, which allows you to write JSX inside of your Markdown. You can use the same component-based principles from React and apply them to authoring Markdown documents. While this is a good solution, I think that MDX is a bit of an over-kill for my situation and I'm losing some TypeScript magic when using JSX in my markdown files. While there is a time and place for MDX, I don't think I need all that power that comes with MDX. Something a bit simpler would be perfect for my use case.

This is where Markdoc comes in. Especially with their [Next.js adapter](https://markdoc.io/docs/nextjs), setting up `.md` pages is extremely easy, I can write custom nodes, tags, and partials for my markdown, and I don't need to mix `markdown` with `JSX` for any custom content, resulting in much cleaner content authoring.

## Netlify

The final piece of the puzzle for this site is [Netlify](https://www.netlify.com/). I don't think there's any platform that's simpler to use than Netlify when it comes to deploying static sites. The only thing I needed to do is to authorize Github on Netlify, then track my PRs on the repo. Once all that is taken care of, Netlify will just deploy my site automatically for any changes made to the codebase. I'm also doing all this on just their [free tier](https://www.netlify.com/pricing/), so there's really no barriers to entry for deploying your static site on Netlify.
