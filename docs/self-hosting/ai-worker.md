---
sidebar_position: 2
---

# AI Tagging

The AI Tagging feature uses [Ollama](https://github.com/ollama/ollama) behind the scenes. If you're self-hosting Linkwarden, you need to set up Ollama and pull your preferred model onto your server to use this feature. A lightweight model like the `phi3:mini-4k` is enough for this feature.

After that, you need to define the `NEXT_PUBLIC_OLLAMA_ENDPOINT_URL` and `OLLAMA_MODEL` environment variables inside your `.env` file.

Here's an example:

```
NEXT_PUBLIC_OLLAMA_ENDPOINT_URL=http://localhost:11434
OLLAMA_MODEL=phi3:mini-4k
```
