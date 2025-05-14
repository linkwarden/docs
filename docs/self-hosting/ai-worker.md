---
sidebar_position: 2
---

# AI Tagging
## Ollama

The AI Tagging feature uses [Ollama](https://github.com/ollama/ollama) behind the scenes. If you're self-hosting Linkwarden, you need to set up Ollama and pull your preferred model onto your server to use this feature. A lightweight model like the `phi3:mini-4k` is enough for this feature.

After that, you need to define the `NEXT_PUBLIC_OLLAMA_ENDPOINT_URL` and `OLLAMA_MODEL` environment variables inside your `.env` file.

Here's an example:

```
NEXT_PUBLIC_OLLAMA_ENDPOINT_URL=http://localhost:11434
OLLAMA_MODEL=phi3:mini-4k
```

## Custom AI

You can use your preferred AI application by setting the following parameters:

```
CUSTOM_OPENAI_BASE_URL=
OPENAI_MODEL=
OPENAI_API_KEY=
```

For example, to use Gemini:

```
CUSTOM_OPENAI_BASE_URL=https://generativelanguage.googleapis.com/v1beta
OPENAI_MODEL=gemini-2.5-flash-preview-04-17
OPENAI_API_KEY=YOUR_GOOGLE_AI_STUDIO_API_KEY
```
