# Your Project's Title...
Your project's description...

## Environments
- Preview: https://main--{repo}--{owner}.hlx.page/
- Live: https://main--{repo}--{owner}.hlx.live/

## Installation

```sh
npm i
```

## Linting

```sh
npm run lint
```

## Local development

1. Install the [AEM CLI](https://github.com/adobe/aem-cli): `npm install -g @adobe/aem-cli`
1. Start AEM Proxy: `aem up` (opens your browser at `http://localhost:3000`)
1. Open the `{repo}` directory in your favorite IDE and start coding :)

## Pages list with documents and blocks lists:

The [index](https://main--puresight-demo--websight-rnd.hlx.page) page.

---

### Homepage
Preview link: [Homepage](https://main--puresight-demo--websight-rnd.hlx.page/pages/homepage) \
Document with content: [Hompage doc](https://docs.google.com/document/d/1djq9N8aBBwRju_D9QQqrP0DHuA77_Jw3xgpxmFAE1o0/edit)

Homepage blocks list:
* Hero
* Carousel
* Cards list
* Articles list
* Promo banner
* Levels
* Newsletter form

---

### Blog

Preview link: [Blog](https://main--puresight-demo--websight-rnd.hlx.page/pages/blog) \
Document with content: [Blog doc](https://docs.google.com/document/d/1YurrOa8SQfUMInQ1kBB6INLEGxrsjJO8MzZKfavQimY/edit) \
Articles list data: [Google sheets](https://docs.google.com/spreadsheets/d/1BlG-jJboqjobXv5Ob-rjTrSWsxywWK6ofj7FZA-vhTo/edit#gid=0)

Blog blocks list:
* Blog

---

### Article

Preview link: [Article](https://main--puresight-demo--websight-rnd.hlx.page/pages/article) \
Document with content: [Blog doc](https://docs.google.com/document/d/1CQb0G7dBjPdVBJG5OP6RJUXTUwDyKPYM_QuRWKOlZlk/edit)

Articles blocks list:
* Metadata

---

### Products

Preview link: [Products](https://main--puresight-demo--websight-rnd.hlx.page/pages/product) \
Document with content: [Products doc](https://docs.google.com/document/d/12-rAJ178xUedsNPfyG66I7yuTZ9G9O769FB_qTqntNg/edit)
Products list data: [Google sheets](https://docs.google.com/spreadsheets/d/1SEIydwRrtQHA2gOwk5w72KuiHPDSyYGWCez4HaG-JNo/edit#gid=0)

Products blocks list:
* Breadcrumb
* Product detail
* Product Reviews
* Articles list
* Section Metadata
* Cards list
* Levels
* Newsletter form
* Metadata

The products page take product id from metadata block (Product Id) and then fetch the JSON with procut ID. Example JSON file is [here](/data/products/B075X4VWF9.json)

---

### All JSON files

* [/data/products/B075X4VWF9.json](/data/products/B075X4VWF9.json)

---

### Spreadsheets

Spreadsheets with [articles](https://docs.google.com/spreadsheets/d/1BlG-jJboqjobXv5Ob-rjTrSWsxywWK6ofj7FZA-vhTo/edit#gid=0) and [products](https://docs.google.com/spreadsheets/d/1SEIydwRrtQHA2gOwk5w72KuiHPDSyYGWCez4HaG-JNo/edit#gid=0) are converted to `json` and used as a source of data inside each component's block. Path to `json` is set inside document, example: [blog page](https://docs.google.com/document/d/1YurrOa8SQfUMInQ1kBB6INLEGxrsjJO8MzZKfavQimY/edit).

## Publication to StreamX

There are two GitHub workflows which make it possible to publish and unpublish pages to/from
StreamX:

- [publish-to-streamx.yaml](.github/workflows/publish-to-streamx.yaml)
- [unpublish-from-streamx.yaml](.github/workflows/unpublish-from-streamx.yaml)

Once page is publish or unpublished a relevant workflow will be triggered automatically and make a
call to StreamX instance.

Workflows require few configuration options defined as variables and secrets:

- Variable `EDS_DOMAIN_URL`: a URL to Edge Delivery Services domain,
  e.g.: `https://main--puresight-demo--websight-rnd.hlx.live`.
- Variable `STREAMX_PAGE_PUBLICATION_API`: a URL to StreamX publication API,
  e.g.: `https://ingestion.streamx.tech/publications/v1/channels/pages/messages`.
- Secret `STREAMX_TOKEN`: JWT value required by StreamX publication API.

Both workflows can be
[enabled and disabled manually in GitHub](https://docs.github.com/en/actions/using-workflows/disabling-and-enabling-a-workflow).
