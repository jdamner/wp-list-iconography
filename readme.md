# WordPress List Iconography

Adds support for icons from the Material Symbols library to be used as the icon in the WordPress list block. 

## Installation
This is aimed at developers, so feel free to package this up as you like to include in your projects. I might consider putting this as a public plugin in the future. 

It does use a couple of 'experimental' WordPress components in the editor, and as such this should be taken into consideration if you plan on using this in production. 

## Contributing

Feedback and PRs are welcome. 

### Quick Start

To develop locally you'll need Docker and Node available and then run. 

```sh
npm install
npm run env start
npm run start
```

The project uses standard WordPress build tooling and WP-Env for a local environment. Typescript is used for all code in the package, and there's a minimal amount of PHP used to load the relevant scripts. 

Alternatively you can use any other method to mount this plugin in a WordPress installation and use node to compile the assets. 
