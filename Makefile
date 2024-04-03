SONARSCANNER_VERSION=5.0.1

sonar:
	docker run \
		--rm \
		-it \
		--name sonarscanner \
		-v $(PWD):/usr/src \
		-e SONAR_HOST_URL=$(SONAR_HOST_URL) \
		-e SONAR_TOKEN=$(SONAR_TOKEN) \
		-e SONAR_SCANNER_OPTS="-Xmx1024m" \
		sonarsource/sonar-scanner-cli:$(SONARSCANNER_VERSION)

upgrade:
	npx ncu -u
	npx update-browserslist-db@latest
	npm install
	npm audit fix

restart:
	npm install --save-dev \
		@types/jest \
		coveralls \
		jest \
		jest-cucumber \
		npm-check-updates \
		prettier \
		ts-jest \
		tslint \
		tslint-config-prettier \
		typescript
