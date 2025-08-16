# Nostrhackday

```
https://npub1dn676fsuf5399dqgedrxt2p3r9008j75lj4vuzh742zcw3e5070s99fclh.nsite.lol/
```

This project is a simple, static website for announcing the Nostr Hack Day.

## Publishing as an Nsite

This site can be published as a decentralized website (`nsite`) using the `@nsyte/cli` tool.

### Prerequisites

1.  **Install Deno:** If you don't have Deno installed, you can find instructions at [deno.land](https://deno.land/).

### Deployment

To publish your site, run the following command:

```bash
deno run -A jsr:@nsyte/cli upload ./
```

The tool will guide you through an interactive setup process to configure your Nostr key and other settings. It will then upload your site's files to a decentralized network of content servers and publish the location of your site to the Nostr network.
