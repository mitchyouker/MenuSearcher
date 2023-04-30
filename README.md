# Dine Refine

A front end for the Dine Refine administrator portal written in Next.Js and Tailwind CSS.

## Description

This tool is to be used for administrative purposes only. Provides Dine Refine administrators with an easy way to interface with the backend/database.

## Getting Started

### Dependencies

* Docker

### Installing

* If you're running Visual Studio Code, please install the "Task Explorer" extension. Then simply run the "docker: debug" task under "vscode".
* You can also run the following commands in a terminal session.
```
cd <project directory>
docker-compose --file docker/docker-compose-debug.yml --project-directory . up --build --renew-anon-volumes
```

## Version History

* 0.2
    * Revised for peer development. Various bug fixes and optimizations.
    * See [commit change]() or See [release history]()
* 0.1
    * Initial Release