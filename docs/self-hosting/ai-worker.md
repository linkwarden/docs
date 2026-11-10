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
CUSTOM_OPENAI_BASE_URL=https://generativelanguage.googleapis.com/v1beta
OPENAI_MODEL=gemini-2.5-flash-preview-04-17
OPENAI_API_KEY=YOUR_GOOGLE_AI_STUDIO_API_KEY
```

## Custom Prompts

Linkwarden ships with a prompt for each tagging method, and each one can be replaced with your own through its own environment variable:

| Tagging method           | Environment variable        |
| ------------------------ | --------------------------- |
| Auto Generate Tags       | `AI_GENERATE_TAGS_PROMPT`   |
| Based on Predefined Tags | `AI_PREDEFINED_TAGS_PROMPT` |
| Based on Existing Tags   | `AI_EXISTING_TAGS_PROMPT`   |

All three are optional, and the built-in prompt is used for any method you leave unset. Two placeholders are available inside your prompt:

- `{{text}}` is replaced with the content of the page being tagged. If you leave it out, the content is appended to the end of your prompt.
- `{{tags}}` is replaced with the comma-separated list of tags the model has to choose from, which is either the predefined tags of the user or their 50 most used tags. It is only useful for the predefined and existing methods.

For example, this prompt for the Based on Existing Tags method:

```
AI_EXISTING_TAGS_PROMPT='Pick up to 5 tags from this list that describe the page below: {{tags}}

Use the exact spelling from the list, and answer with a JSON array such as ["Tag1", "Tag2"] and nothing else.

Page: {{text}}'
```

Reaches the model like this:

```
Pick up to 5 tags from this list that describe the page below: Programming, Self-Hosting, Rust, Cooking

Use the exact spelling from the list, and answer with a JSON array such as ["Tag1", "Tag2"] and nothing else.

Page: Ownership is Rust's most unique feature and has deep implications for the rest of the language. It enables Rust to make memory safety guarantees without needing a garbage collector...
```

Your prompt still has to ask for a JSON array of tag names, such as `["Tag1", "Tag2"]`, because that is how Linkwarden reads the answer. A reply it cannot parse is discarded and the link stays untagged. For the predefined and existing methods, tags that are not part of the given list are dropped as well.

The example above is wrapped in single quotes, because a double quote cannot be escaped inside a double-quoted value. If your prompt has no double quotes in it, you can wrap it in double quotes instead and write line breaks as `\n`:

```
AI_GENERATE_TAGS_PROMPT="You are a bookmark manager. Generate 3-5 topic tags for the content below, in German.\n\nAnswer with a JSON array of tag names and nothing else.\n\nContent: {{text}}"
```

Changing a prompt only affects links that are tagged from that point on, links that were already tagged are not processed again.
