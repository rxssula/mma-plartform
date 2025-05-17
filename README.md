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
## How to use GraphQL

After you run the server locally go to the "/graphql" route. There you can use queries. For example:

### Query without arguments
<img width="1470" alt="image" src="https://github.com/user-attachments/assets/fe7631e4-db21-493e-8ef7-47fe95bc5313" />

### Query with arguments
<img width="1470" alt="image" src="https://github.com/user-attachments/assets/73e968ee-0e4d-43f9-bafd-1e7b4d497175" />

### Mutation to create fighter
<img width="1470" alt="image" src="https://github.com/user-attachments/assets/86b42ed4-1c53-4fe9-bee0-325b223fc57c" />

## Entity Relationship Diagram (ERD)
<img width="964" alt="image" src="https://github.com/user-attachments/assets/1fe00c4f-c6cc-4ddc-94ba-2b9e92d24236" />
