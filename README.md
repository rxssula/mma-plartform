# MMA Platform

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ pnpm install
```

## Compile and run the project

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Start Database

In order to make database work, be sure to have docker in your machine and run this command in your terminal:

```bash
docker run --name mma-platform -p 5432:5432 -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=root -e POSTGRES_DB=mma-platform -d postgres
```

## How to run SQL scripts in sql folder

Run the following commands:

```bash
# Copy your SQL files to the container
docker cp sql/create_tables.sql mma-platform:/create_tables.sql
docker cp sql/seed_data.sql mma-platform:/seed_data.sql

# Execute the scripts
docker exec -it mma-platform psql -U postgres -d mma-platform -f /create_tables.sql
docker exec -it mma-platform psql -U postgres -d mma-platform -f /seed_data.sql
```
