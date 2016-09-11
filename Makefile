NODE=node:6.5
DOCKER_FLAGS=-t -w /app --rm
FRONTEND=$(DOCKER_FLAGS) -v $(shell pwd)/frontend:/app $(NODE)
BACKEND=$(DOCKER_FLAGS) -v $(shell pwd)/backend:/app $(NODE)

IMAGE=koa-react-book-management:latest

dev:
	docker-compose up

test:
	docker run $(BACKEND) npm run test

install-fe:
	docker run $(FRONTEND) npm install

install-be:
	docker run $(BACKEND) npm install

install: install-fe install-be

package-be:
	docker run $(BACKEND) npm run compile

package-fe:
	docker run $(FRONTEND) npm run build

package: clean package-be package-fe
	cp -r backend dist
	cp -r frontend/dist dist/lib/public
	docker build --rm -t $(IMAGE) .

deploy:
	docker push $(IMAGE)

clean:
	rm -rf dist/
