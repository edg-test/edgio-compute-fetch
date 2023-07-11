// This file was automatically added by edgio init.
// You should commit this file to source control.
// Learn more about this file at https://docs.edg.io/guides/edgio_config
module.exports = {
  origins: [
    {
      name: 'next',
      hosts: [
        {
          location: 'nextjs.org',
        },
      ],
      override_host_header: 'nextjs.org',
    },
  ],
  serverless: {
    include: ["node_modules/node-fetch", "node_modules/tr46", "webidl-conversions", "whatwg-url"],
  }
}
