build:
	./node_modules/.bin/webpack

install:
	npm install

test:
	npm test

dev:
	./node_modules/.bin/webpack --watch &
	./node_modules/.bin/ts-node src/server/server.ts

server:
	./node_modules/.bin/ts-node src/server/server.ts

.PHONY: test
