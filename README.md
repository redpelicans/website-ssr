# website

Website of RedPelicans (in progress)

# Install

A now well known incantation:

``` 
  $ npm install -g yarn
  $ yarn install
```

# Code and re-code

The first target of the project is to render pages server side. So we have to deal with a NodeJS server that will execute server but also client code and a bundle task drived by webpack to packed assets for browser. Two developement modes are available 1/ client side only, where a static index.html is served by webpack develepment server 2/ Full sides, where ...

## Client side only

```
  $ yarn run client-dev
  http://0.0.0.0:3000/
  webpack result is served from /build/
  content is served from ./public
```

Launch yor browser to `http://0.0.0.0:3000` and code your
client, hot reload is enable. `index.html` is a static file served from `./public` folder. 


## Full sides

We need to rebuild webpack contents and write them to `./build` each time client code is modified and rerun server each time server code is ..., so run 2 commands in 2 seprated shells:

```
  $ yarn bundle:dev
  $ yarn server:dev
 
```

## Production mode

```
  $ yarn bundle:build
  $ yarn server:dist
  $ yarn start
  server started on http://0.0.0.0:5555
```


## Docker


```
# cd website
# docker build --no-cache -t redpelicans/website .
# docker push redpelicans/website
// restart website and proxy
```
