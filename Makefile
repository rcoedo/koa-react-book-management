NODE=node:6.5
DOCKER_FLAGS=-t -w /app --rm
FRONTEND=$(DOCKER_FLAGS) -v $(shell pwd)/frontend:/app $(NODE)
BACKEND=$(DOCKER_FLAGS) -v $(shell pwd)/backend:/app $(NODE)

dev:
	docker-compose up

install-fe:
	docker run $(FRONTEND) npm install

install-be:
	docker run $(BACKEND) npm install

install: install-fe install-be

clean:
	rm -rf dist
