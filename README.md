# Evaluate A News Article with Natural Language Processing (NLP)

## Overview

This project aims to build a web tool that allows users to run Natural Language Processing on articles or blogs by URL. When a user submits a URL of an article that URL send to backend for processing, the web page then dispalys sentiment analysis returned from [meaningcloud API](https://learn.meaningcloud.com/developer/sentiment-analysis/2.1/doc), based on the contents of the article.

What You Will Build in this project:

- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls

On top of that, I want to introduce you to the topic of Natural Language Processing. NLPs leverage machine learning and deep learning create a program that can interpret natural human speech. Systems like Alexa, Google Assistant, and many voice interaction programs are well known to us, but understanding human speech is an incredibly difficult task and requires a lot of resources to achieve. Full disclosure, this is the Wikipedia definition, but I found it to be a clear one:

> Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence
> concerned with the interactions between computers and human (natural) languages, in particular how to program computers to
> process and analyze large amounts of natural language data.

## Getting Started

The project can be start with npm, so you can start with the following instructions.

### Installing and Start

#### Instructions

1. Download the project:

```
git clone https://github.com/IslamTrabih/evaluate-news-nlp-project.git
```

then

```
cd Would-You-Rather-Project
```

or download [Zip File](https://github.com/IslamTrabih/evaluate-news-nlp-project)

2. Install all dependencies for project:

```
npm install
```

3. Go to [meaningcloud.com](https://www.meaningcloud.com/developer/create-account) and sign up to get an API key.

4. Configure environment variables with your API key

- Create a new `.env` file in the root of project.
- Fill the `.env` file with your API key like this:
  ```
  API_KEY = your API key
  ```

5. Build project file:

```
npm run build-prod
```

6. Run project backend:

```
npm start
```

7. Open your browser at:

```
http://localhost:3030/
```

## Testing

You can test functionality by run in Terminal:

```
npm run test
```

## Build Tools

- HTML
- CSS
- JavaScript
- Node
- Express
- Cors
- Webpack
- meaningcloud API
- Sass
- Dotenv
- axios
- Jest
- Workbox

## Deploying

A great step to take with your finished project would be to deploy it! Unfortunately its a bit out of scope for me to explain too much about how to do that here, but checkout [Netlify](https://www.netlify.com/) or [Heroku](https://www.heroku.com/) for some really intuitive free hosting options.
