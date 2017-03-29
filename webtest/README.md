# Running the web test suite

## Installation

### Install selenium

```shell
npm install selenium-standalone@latest -g
selenium-standalone install
```

### Install webdriverio

Inside the webtest directory call

```shell
npm install
```

## Run test

Start selenium in a shell:

```shell
selenium-standalone start
```

Run the tests:

Standard command to run tests is

```shell
npm test
```

You have to log in the app when testing.
So the command has to be extended with the login credentials.
Replace `<user>` and `<password>` with the correct credentials in the following command to run the tests.

```shell
WDIO_USER=<user> WDIO_PASSWORD=<password> npm test
```

To run a test with the gulp plugin, run

```shell
gulp test
```
