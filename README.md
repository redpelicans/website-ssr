# website

Website of RedPelicans (in progress)

# Install

A now well known incantation:

``` 
  $ npm i
```

# Code and re-code

The first target of the project is to render pages server side. So we have to deal with a NodeJS server that will execute server but also client code and a bundle task drived by webpack to packed assets for browser. Two developement modes are available 1/ client side only, where a static index.html is served by webpack develepment server 2/ Full sides, where ...

## Client side only

```
  $ npm run client-dev
  http://0.0.0.0:3000/
  webpack result is served from /dist/

```

Launch yor browser to `http://0.0.0.0:3000/index.html` and code your
client, hot reload is enable. `index.html` is a static file from `/dist` folder. 


