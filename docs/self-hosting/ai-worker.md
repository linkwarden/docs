---
sidebar_position: 2
---

# AI Tagging

You need to set up an AI provider to use the AI tagging feature in your self-hosted instance of the app. This feature allows you to automatically tag your media files with relevant keywords, making it easier to search and organize your content.

## Supported Providers

### Ollama Provider

You can set up [Ollama](https://github.com/ollama/ollama) and pull your preferred model onto your server to use this feature. A lightweight model like the `phi3:mini-4k` is enough for this feature.

After that, you need to define the `NEXT_PUBLIC_OLLAMA_ENDPOINT_URL` and `OLLAMA_MODEL` environment variables inside your `.env` file.

Here's an example:

```
NEXT_PUBLIC_OLLAMA_ENDPOINT_URL=http://localhost:11434
OLLAMA_MODEL=phi3:mini-4k
```

### OpenAI Compatible Provider

You can use an OpenAI-compatible provider for AI tagging by defining the following environment variables in your `.env` file:

```
CUSTOM_OPENAI_BASE_URL=
OPENAI_MODEL=
OPENAI_API_KEY=
```

Note that if you want to use OpenAI's official API, you don't need to define the `CUSTOM_OPENAI_BASE_URL` variable, as it defaults to OpenAI's API URL. Here's an example of how to set it up:

```
OPENAI_MODEL=gpt-4o
OPENAI_API_KEY=YOUR_OPENAI_API_KEY
```

Another example, to use Gemini:

```
CUSTOM_OPENAI_BASE_URL=https://generativelanguage.googleapis.com/v1beta/openai/
OPENAI_MODEL=gemini-flash-lite-latest
OPENAI_API_KEY=YOUR_GOOGLE_AI_STUDIO_API_KEY
```
